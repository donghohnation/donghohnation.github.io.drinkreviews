const express = require("express");

const PORT = process.env.PORT;

const app = express();

//static content
app.use(express.static("public"));

//JSON parse
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//routes and server access
const routes = require("./controllers/drinks_controller.js");

app.use(routes);

// start server
app.listen(PORT, () => {
  console.log("Server: http://localhost:" + PORT);
});
