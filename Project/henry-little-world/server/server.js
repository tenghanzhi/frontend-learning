let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');

// let mongoose = require('mongoose');
// let dbConfig = require('./database/db');

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Henry Little World." });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// Express Route
// const portfolioRoute = require('../server/routes/portfolio.route')

// Connecting MongoDB Database
// mongoose.Promise = global.Promise;
// mongoose.connect(dbConfig.db).then(() => {
//     console.log('Database successfully connected!')
// },
//     error => {
//         console.log('Could not connect to database : ' + error)
//     }
// )

// app.use('/portfolio', portfolioRoute)

// PORT
// const port = process.env.PORT || 4000;
// const server = app.listen(port, () => {
//     console.log('Connected to port ' + port)
// })

// 404 Error
// app.use((req, res, next) => {
//     res.status(404).send('Error 404!')
// });

// app.use(function (err, req, res, next) {
//     console.error(err.message);
//     if (!err.statusCode) err.statusCode = 500;
//     res.status(err.statusCode).send(err.message);
// });