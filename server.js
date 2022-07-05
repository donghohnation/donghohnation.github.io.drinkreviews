const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// app.use(express.favicon(__dirname + '/public/assets/images/drink_favi.png'));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
const routes = require("./controllers/drinks_controller.js");

app.use(routes);

// Start server so that it can begin listening to client requests
app.listen(PORT, () => {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});