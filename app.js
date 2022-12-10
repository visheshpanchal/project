const express = require("express");
const cors = require("cors");
const sequelize = require("./config");
const { route } = require("./routers/admin.router");
const PORT = 3000;

const app = express();

app.use(express.json())
app.use(cors());

// Router Register

const routers = [
    require("./routers/admin.router"),
    require("./routers/customer.router")
]

for (const route of routers){
    app.use(route)
}

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log("App is running on ", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
