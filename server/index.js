const express = require('express'); /* Funcion: para obtener todo mas rapido y facil */
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./models/Gatos');
mongoose.connect(keys.MONGO_URL);

const app = express(); //nos facilita realizar las peticiones post, get etc...
app.use(bodyParser.json());

//const GatosRoutes = require('./routes/gatosRoutes'); //Forma larga
require('./routes/gatosRoutes')(app); //Forma corta

app.listen(process.env.PORT || 5000); // Puerto: 5000 -> back, 3000 -> front 

