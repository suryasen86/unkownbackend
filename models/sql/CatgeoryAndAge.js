const Sequelize = require('sequelize');

class CatgeoryAndAge extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init({
            cat_age_id: {
                type: Sequelize.INTEGER(11),
                autoIncrement: true,
                primaryKey: true,
            },
            cat_name: {
                type: DataTypes.STRING(50),
            },
            
            cat_id: DataTypes.INTEGER(10),
            age_id:DataTypes.INTEGER(10),
            is_active: DataTypes.INTEGER(1),
            created_by: DataTypes.STRING(50),
            updated_by: DataTypes.STRING(50),
        },
            {
                sequelize, freezeTableName: true, tableName: 'map_category_age',
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

module.exports = CatgeoryAndAge;
