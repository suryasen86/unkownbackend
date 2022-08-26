const Sequelize = require('sequelize');

class Product extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init({
            product_id: {
                type: Sequelize.INTEGER(11),
                autoIncrement: true,
                primaryKey: true,
            },
            product_name: {
                type: DataTypes.STRING(50),
            },
            product_img: DataTypes.TEXT,
            product_desc: DataTypes.STRING(300),
            product_price:DataTypes.INTEGER(10),
            is_active: DataTypes.INTEGER(1),
            created_by: DataTypes.STRING(50),
            updated_by: DataTypes.STRING(50),
        },
            {
                sequelize, freezeTableName: true, tableName: 'mst_product',
                defaultScope: {
                    attributes: {
                        exclude: [
                            "createdAt",
                            "updatedAt",
                            "created_by",
                            "updated_by"
                        ],
                    },
                },
            }
        )
    }

    static associate(models) {
        // Cuisine.belongsTo(models.Organization, {foreignKey: "org_id"})//
    }
}

module.exports = Product;
