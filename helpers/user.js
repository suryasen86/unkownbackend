const UserPersistence = require('../persistence/user')
const { generateToken } = require("../sys/utils/auth")
const categoryHelper = require('./category')
const { sendOtp } = require('../sys/utils/sendsms')
const answerPersistance = require('../persistence/answer')
const productHelper = require('../helpers/product')
const cartPersistence = require('../persistence/cart')
const voucher_codes = require('voucher-code-generator');
const { getOtp } = require('../sys/utils/getotp')
 
class UserHelper {
    async getUserByMobile(mobile) {
        return await UserPersistence.getUserByMobile(mobile)
    }
    async getUserById(user_id) {
        return await UserPersistence.getUserById(user_id)
    }
    async getOtp(incoming) {
        let otp =getOtp()
        incoming.user_otp = otp
        let user = await this.getUserByMobile(incoming.user_phone)

        if (!user) {
            await sendOtp(incoming.user_phone, otp)
            return await UserPersistence.create(incoming)
        }
        else {
            await sendOtp(incoming.user_phone, otp)
            return await UserPersistence.update(incoming.user_phone, incoming)
        }
    }
    async verifyotp(incoming) {
        return new Promise(async (resolve, reject) => {
            let user = await this.getUserByMobile(incoming.user_phone)
            if (!user) reject(new Error(`User Not Found with ${incoming.user_phone}`))
            else {
                console.log(incoming.user_otp == user.user_otp)
                if (incoming.user_otp != user.user_otp) {
                    reject(new Error(`Invalid Otp ,Try Again`))
                }
                else {
                    await UserPersistence.update(incoming.user_phone, { user_otp: null })
                    let token = await generateToken({ ...user.dataValues });
                    user.token = token
                    resolve({ ...user.dataValues, token })
                }
            }
        })
    }
    async assignAgeAndGender(incoming, id) {
        console.log(incoming)
        return await UserPersistence.updateById(incoming, id)
    }

    async getCategoryAndSubcategory(user_id) {
         
        return new Promise(async (resolve, reject) => {
            let user = await this.getUserById(user_id)
            if (!user) {
                reject(new Error("Invalid User"))
            }
            else {
                let { gender, from_age, to_age ,age_id} = user
                let category = await categoryHelper.findByGenderAndAge(gender, from_age, to_age)
                resolve(category)
            }
        })
    }
    async getProducts(incoming) {
        let { answers } = incoming
        let productKey = []
        let products = []
        let allProductsKeys = await answerPersistance.allProductsKeys(answers)
        if (allProductsKeys.length) {
            for (let index = 0; index < allProductsKeys.length; index++) {
                let element = allProductsKeys[index];
                element = element.product_ids.split(',')
                for (let index = 0; index < element.length; index++) {
                    const test = element[index];
                    productKey.push(test)
                }

            }
            products = await productHelper.checkMultipleProductExistOrNot(productKey)
        }
        
       
        return products
    }
    async createCart(incoming) {
        let total = 0
        let { cart_items, user_id } = incoming
        for (let index = 0; index < cart_items.length; index++) {
            let element = cart_items[index];
            let product = await productHelper.getProductById(element.product_id)

            cart_items[index].product_price = product.product_price
            console.log(product.product_price, element.qty)
            total = total + product.product_price * element.qty
        }


        let coupon = await voucher_codes.generate({
            length: 10,
            count: 1,charset:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        })
        let cart = await cartPersistence.createCartHeader({
            cart_total: total,
            cart_sub_total: total,
            is_active: 1,
            coupon: coupon[0],
            created_by: user_id,
            user_id: user_id
        })
        for (let index = 0; index < cart_items.length; index++) {
            const element = cart_items[index];
            await cartPersistence.createCartDetail({
                cart_id: cart.cart_id,
                product_id: element.product_id,
                user_id: user_id,
                rate: element.product_price,
                total: element.qty * element.product_price,
                is_active: 1,
                created_by: user_id,
                qty: element.qty
            })

        }

        return cart
    }

}


module.exports = new UserHelper()