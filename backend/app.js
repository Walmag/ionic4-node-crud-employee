const dbURL = { db: 'mongodb+srv://Walmag:ncs0105@crud-nodejs-ehphn.mongodb.net/test?retryWrites=true&w=majority' }

let express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    dataBaseConfig = dbURL;

// Conectando o DB mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(dataBaseConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
        console.log('DB connectado com sucesso!')
    },
    error => {
        console.log('Erro ao se conectar com o DB =>' + error)
    }
)

const employeeRoute = require('./routes/employee.route')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

// RESTful API root
app.use('/api', employeeRoute)

// PORT
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Porta conectada em => http://localhost:' + port)
})

//Erro 500
app.use(function(err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
    console.log('Erro' + err.statusCode + '=> ', err.message)
});

//Erro 404
app.use((req, res, next) => {
    next(createError(404));
});