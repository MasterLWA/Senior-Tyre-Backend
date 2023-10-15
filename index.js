const express = require('express');
const mongoose = require('mongoose');
const app = express();
const env = require('dotenv').config();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
const supplierRoutes = require('./Routes/Supplier.Js');
const grnRoutes = require('./Routes/grnRoutes.js');
const mrnRoutes = require('./Routes/mrnRouter.js');

app.use(supplierRoutes);
app.use(grnRoutes);
app.use(mrnRoutes);

// Connect to MongoDB
 const dbUrl = process.env.DBURL;

    mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log('Connected to MongoDB');
            app.listen(PORT, () => {
                console.log(`Listening on port ${PORT}`);
            });
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
        });

    // Error handling middleware
    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Something went wrong!');
    });

// console.log(process.env.DBURL);