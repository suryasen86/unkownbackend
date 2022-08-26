const Sequelize = require('sequelize');

class Questions extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init({
            questions_id: {
                type: Sequelize.INTEGER(11),
                autoIncrement: true,
                primaryKey: true,
            },
            questions_val: {
                type: DataTypes.STRING(500),
            },
            cat_id: DataTypes.INTEGER(5),
            subcat_id: DataTypes.INTEGER(5),
            is_active: DataTypes.INTEGER(1),
            created_by: DataTypes.STRING(50),
            updated_by: DataTypes.STRING(50),
        },
            {
                sequelize, freezeTableName: true, tableName: 'mst_questions',
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

module.exports = Questions;
