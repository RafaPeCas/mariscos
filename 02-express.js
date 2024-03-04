'use strict';

require('dotenv').config(); // Carga las variables de entorno desde un archivo .env

let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser'); 
let path = require('path');
let app = express();
app.use(bodyParser.urlencoded({extenden:false}));
app.use(bodyParser.json());

async function main() {

    const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@elkamaroninino.kbimphh.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`; 
    
    console.log(uri)
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Base de datos conectada');
        
        // Resto del código de configuración de Express aquí
        app.use(express.static(__dirname + '/public/'));
        app.use('/assets', express.static(path.join(__dirname, 'assets')));
        app.set('view engine', 'ejs');
        app.set('views', __dirname + '/views/');
        app.use('/', require('./router/rutas'));
        app.use('/kamaron', require('./router/kamaron'));

        app.use((req, res) => {
            res.status(404).render("404", {
                titulo: "ERROR 404",
                description: "Page not found"
            });
        });

        app.listen(3000, () => {
            console.log('Iniciando Express en el puerto 3000');
        });
    } catch (error) {
        console.error(error);
    }
}

main().catch(err => console.log(err));