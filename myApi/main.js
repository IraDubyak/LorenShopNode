var domain = require('domain');
var serverDomain = domain.create();

serverDomain.on('error', function(err) {
    console.log("Помилка на сервері %s", err);
    process.exit(1);
});

serverDomain.run(function() {
    var express = require("express");
    var bodyParser = require("body-parser");
    var sql = require("mssql");
    var sqlcon = require("./sql_connect");

    var app = express();
    app.use(bodyParser.json());
    app.use(function (req, res, next) {
        //Enabling CORS
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
        next();
    });

    //Setting up server
    var server = app.listen(process.env.PORT || 3333, function () {
        var port = server.address().port;
        console.log("App now running on port", port);
    });

    app.get('/', (req, res) => {
        res.send('Welcome to my site :D');
    });

    var womanProductsRouter = require('./routes/woman_products');
    app.use('/woman_products', womanProductsRouter);
    var womanProductsRouterSizeXS = require('./routes/woman_products_size_xs');
    app.use('/woman_products_size_xs', womanProductsRouterSizeXS);
    var womanProductsRouterSizeS = require('./routes/woman_products_size_s');
    app.use('/woman_products_size_s', womanProductsRouterSizeS);
    var womanProductsRouterSizeM = require('./routes/woman_products_size_m');
    app.use('/woman_products_size_m', womanProductsRouterSizeM);
    var womanProductsRouterSizeL = require('./routes/woman_products_size_l');
    app.use('/woman_products_size_l', womanProductsRouterSizeL);
    var womanProductsRouterSizeXL = require('./routes/woman_products_size_xl');
    app.use('/woman_products_size_xl', womanProductsRouterSizeXL);

    var manProductsRouter = require('./routes/man_products');
    app.use('/man_products', manProductsRouter);
    var manProductsRouterSizeXS = require('./routes/man_products_size_xs');
    app.use('/man_products_size_xs', manProductsRouterSizeXS);
    var manProductsRouterSizeS = require('./routes/man_products_size_s');
    app.use('/man_products_size_s', manProductsRouterSizeS);
    var manProductsRouterSizeM = require('./routes/man_products_size_m');
    app.use('/man_products_size_m', manProductsRouterSizeM);
    var manProductsRouterSizeL = require('./routes/man_products_size_l');
    app.use('/man_products_size_l', manProductsRouterSizeL);
    var manProductsRouterSizeXL = require('./routes/man_products_size_xl');
    app.use('/man_products_size_xl', manProductsRouterSizeXL);

    var manCategoriesRouter = require('./routes/man');
    app.use('/man', manCategoriesRouter);

    var womanCategoriesRouter = require('./routes/woman');
    app.use('/woman', womanCategoriesRouter);

    var productCategoriesRouter = require('./routes/product_categories');
    app.use('/product_categories', productCategoriesRouter);

    var productsRouter = require('./routes/products');
    app.use('/products', productsRouter);





    var productRouter = require('./routes/product');
    app.use('/product', productRouter);

     var orderItemRouter = require('./routes/order_items');
    app.use('/order_items', orderItemRouter);

    var loginRouter = require('./routes/login');
    app.use('/login', loginRouter);

    var cartRouter = require('./routes/cart');
    app.use('/cart', cartRouter);

});