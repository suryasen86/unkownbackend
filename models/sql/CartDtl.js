const Sequelize = require("sequelize");

class CartDtl extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        cart_dtl_id: {
          type: Sequelize.INTEGER(11),
          autoIncrement: true,
          primaryKey: true,
        },
        cart_id: DataTypes.INTEGER(11),
        qty: DataTypes.INTEGER(11),
        product_id: DataTypes.INTEGER(11),
        cat_id: DataTypes.INTEGER(11),
        user_id:DataTypes.INTEGER(11),
        rate: DataTypes.FLOAT(7, 2),
        total: DataTypes.FLOAT(10, 2),
        
        is_active: DataTypes.INTEGER(1),
        created_by: DataTypes.STRING(50),
        updated_by: DataTypes.STRING(50),
      },
      {
        sequelize,
        freezeTableName: true,
        tableName: "trans_cart_dtl",
        defaultScope: {
          attributes: {
            exclude: ["createdAt", "updatedAt", "created_by", "updated_by"],
          },
        },
      }
    );
  }

  static associate(models) {
    // Cuisine.belongsTo(models.Organization, {foreignKey: "org_id"})//
  }
}

module.exports = CartDtl;
