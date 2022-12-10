const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: "mysql",
  host: process.env.DB_HOST,
});

// Model Config
const models = [
  require("./models/User")
]

for (const model of models)
{
  model(sequelize)
}


module.exports = sequelize;
