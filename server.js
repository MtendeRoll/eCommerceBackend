const express = require("express");
const routes = require("./routes");
// import sequelize connection
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});

// PSUEDO CODE
// create databases
// create associations (many to many relations is already done) and figure out what req.body will be for POST and PUT routes
// fill out api routs in product-routes.js, tag-routes.js anmd category-routes.js to perform CRUD using sequelize models
// use environment variables to store seszitive data: MySQL username, password and database name
// sync sequelize models to the database, then turn on the server (above in this js)
