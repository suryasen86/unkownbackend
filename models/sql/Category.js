const Sequelize = require('sequelize');

class Category extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init({
            cat_id: {
                type: Sequelize.INTEGER(11),
                autoIncrement: true,
                primaryKey: true,
            },
            cat_name: {
                type: DataTypes.STRING(50),
                unique: true
            },
            cat_img: DataTypes.TEXT,
            cat_desc: DataTypes.STRING(300),
            age_from: DataTypes.STRING(100),
            age_to: DataTypes.STRING(100),
            gender: DataTypes.STRING(100),
            disp_priority: DataTypes.INTEGER(1),
            is_active: DataTypes.INTEGER(1),
            created_by: DataTypes.STRING(50),
            updated_by: DataTypes.STRING(50),
        },
            {
                sequelize, freezeTableName: true, tableName: 'mst_category',
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

module.exports = Category;
