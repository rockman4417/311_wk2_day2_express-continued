const products = require('../data/products.js')

const list = (req, res) => {
    res.json(products)}
  
  const show = (req, res) => {
    res.json(products.filter(product =>product._id === parseInt(req.params.id)))
}

  const create = (req, res) => {
    // res.send(req.body)
      const newProduct = {
      _id: products.length + 1,
      name: req.body.name,
      description: req.body.description,
      //   ...req.body
    }
  
    products.push(newProduct);
    res.json(products)
}
  
  module.exports = {
    list,
    show,
    create
  }