require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const { logger } = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3500;

console.log(process.env.NODE_ENV);

app.use(logger);

app.use(cors(corsOptions));

app.use(express.json());

app.use(cookieParser());

app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/root'));

app.use(errorHandler);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//connect mongoose to mongoDB
mongoose = require('mongoose');
const uri = "mongodb+srv://gadget-grade-admin:DbpN0ELqr48BuVm4@cluster0.2hwjbnu.mongodb.net/?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(uri); 


//add account route
User = require('./models/User.js');
var userRoute = require('./routes/userRoutes');
app.use('/user', userRoute);

//add product route
Product = require('./models/Product.js');
var productRoute = require('./routes/productRoutes');
app.use('/product', productRoute);

//add review route
Review = require('./models/Review.js');
var reviewRoute = require('./routes/reviewRoutes');
app.use('/review', reviewRoute);

app.all('*', (req, res) => {
    res.status(404);
    if(req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    }
    else if(req.accepts('json')) {
        req.json({message: '404 Not Found'});
    }
    else {
        res.type('txt').send('404 Not Found');
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})