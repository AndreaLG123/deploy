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


//Usa las vistas de react
if(process.env.NODE_ENV === 'production')
{
	app.use(express.static('client/build'));
	const path = require('path');
	app.get('*', (req, res) =>{
		res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
	});
}

app.listen(process.env.PORT || 5000); // Puerto: 5000 -> back, 3000 -> front 

