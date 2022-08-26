const Sequelize = require('sequelize');

class Answer extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init({
            answer_id: {
                type: Sequelize.INTEGER(11),
                autoIncrement: true,
                primaryKey: true,
            },
            answer_val: {
                type: DataTypes.STRING(200),
            },
            questions_id: DataTypes.INTEGER(5),
            product_ids: DataTypes.STRING(100),
            is_active: DataTypes.INTEGER(1),
            created_by: DataTypes.STRING(50),
            updated_by: DataTypes.STRING(50),
        },
            {
                sequelize, freezeTableName: true, tableName: 'mst_answer',
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

module.exports = Answer;
