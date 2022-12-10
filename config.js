const Sequelize = require("sequelize");

const sequelize = new Sequelize("test_ahm", "root", "1234567890", {
  dialect: "mysql",
  host: "localhost",
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
