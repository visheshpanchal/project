const {DataTypes} = require("sequelize");

const userModel = (sequelize) => {
  sequelize.define("user",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName:{
        type:DataTypes.STRING,
        allowNull:false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      role : {
        type: DataTypes.STRING,
        allowNull:false
      },
      password: { type: DataTypes.STRING, allowNull: false },
      active:{
        type:DataTypes.BOOLEAN,
        default:false
      }
    },
    {
      timestamps: false,
    }
  );
};

module.exports = userModel;