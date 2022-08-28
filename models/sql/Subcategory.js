const Sequelize = require('sequelize');

class Subcategory extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init({
            subcat_id: {
                type: Sequelize.INTEGER(11),
                 autoIncrement: true,
                  primaryKey: true,
            },
            subcat_name: {
                type:DataTypes.STRING(50),
              
            },
            subcat_desc: DataTypes.STRING(300),
            subcat_img: DataTypes.TEXT,
            product_img:DataTypes.TEXT,
            poster_img:DataTypes.TEXT,
            promo_img:DataTypes.TEXT,
            is_active: DataTypes.INTEGER(1),
            created_by: DataTypes.STRING(50),
            updated_by: DataTypes.STRING(50),
        },
            {
                sequelize, freezeTableName: true, tableName: 'mst_subcat',
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

module.exports = Subcategory;
