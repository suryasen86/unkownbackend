const Sequelize = require("sequelize");

class User extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        user_id: {
          type: Sequelize.INTEGER(11),
          autoIncrement: true,
          primaryKey: true,
        },
        user_name: DataTypes.STRING(50),
        user_email: DataTypes.STRING(50),
        user_phone: DataTypes.STRING(12),
        user_otp:DataTypes.STRING(50),
        user_alt_phone: DataTypes.STRING(12),
        gender: DataTypes.INTEGER(1),
        from_age: DataTypes.STRING(12),
        to_age: DataTypes.STRING(12),
        user_pin: DataTypes.STRING(250),
        is_privacy:DataTypes.INTEGER(1),
        role_id: DataTypes.INTEGER(2),
        is_active: DataTypes.INTEGER(1),
        created_by: DataTypes.STRING(50),
        updated_by: DataTypes.STRING(50),
      },
      {
        sequelize,
        freezeTableName: true,
        tableName: "mst_user",
        defaultScope: {
          attributes: {
            exclude: ["created_by", "updated_by"],
          },
        },
      }
    );
  }

  static associate(models) {}
}

module.exports = User;
