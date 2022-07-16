const Product = require('../MODEL/model')

exports.add= (req, res) => {
  try {

    console.log(req.body);

    const product = new Product(req.body);
    console.log(product);
    product.save((err, result) => {
      if (err || !result) {
        res.json({
          success: false,
          msg: err,
        });
      } else {
        res.json({
          "result": "Success"
          });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getproductDetails = (req, res) => {
  try {
    Product.find().exec((err, product) => {
      if (err || !product || product.length == 0) {
        res.json({
          success: false,
        });
      } else {
        res.json({
          success: true,
          data: product,
        });
      }
    });
  } catch (err) {}
};