const productHelper = require('../helpers/product')
const questionsPersistence=require('../persistence/questions')
const answerPersistence=require('../persistence/answer')
class questionsHelper {
    async create(incoming) {
        let { question, cat_id, answers ,subcat_id,user_id} = incoming
        for (let index = 0; index < answers.length; index++) {
            let { products_ids } = answers[index];
            products_ids=products_ids.map((e)=>e.value)
            console.log(products_ids)
             
            await productHelper.checkMultipleProductExistOrNot(products_ids)
        }
        let questionCreate =await questionsPersistence.create({questions_val:question,cat_id,subcat_id,is_active:1,created_by:user_id})
        for (let index = 0; index < answers.length; index++) {
            let {option,products_ids} = answers[index];
            products_ids=products_ids.map((e)=>e.value)
            await answerPersistence.create({
                answer_val:option,
                questions_id:questionCreate.questions_id,
                product_ids:products_ids.toString(),
                created_by:user_id,
                is_active:1
            })
        }
        
        return incoming

    }
    async getAll(incoming) {
        let finalResponse=[]
        let allQuestion= await questionsPersistence.getAll(incoming)
    
        for (let index = 0; index < allQuestion.length; index++) {
            let element = allQuestion[index];
            element.answers=await answerPersistence.findByQuestion(element.questions_id)
            finalResponse.push(element)
            
        }
        
        return finalResponse 
    }

    async patch(incoming, id) {
        return await questionsPersistence.patch(incoming,id)
    }
    async update(incoming, id) {

    }
}

module.exports = new questionsHelper()