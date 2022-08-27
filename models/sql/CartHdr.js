const Sequelize = require("sequelize");

class CartHdr extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        cart_id: {
          type: Sequelize.INTEGER(11),
          autoIncrement: true,
          primaryKey: true,
        },
        user_id: DataTypes.INTEGER(11),
        coupon: DataTypes.STRING(100),
        cart_total: DataTypes.FLOAT(10, 2),
        cart_sub_total: DataTypes.FLOAT(10, 2),
        CGST: DataTypes.FLOAT(10, 2),
        IGST: DataTypes.FLOAT(10, 2),
        SGST: DataTypes.FLOAT(10, 2),
        is_active: DataTypes.INTEGER(1),
        created_by: DataTypes.STRING(50),
        updated_by: DataTypes.STRING(50),
      },
      {
        sequelize,
        freezeTableName: true,
        tableName: "trans_cart_hdr",
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

module.exports = CartHdr;
