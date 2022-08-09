const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
// handlebars
// const exphbs = require('express-handlebars');
// const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// handlebars
const hbs = exphbs.create();

// handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/controller.js'));


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening http://localhost:${PORT}`));
});




