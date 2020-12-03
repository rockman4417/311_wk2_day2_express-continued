const vehicles = require('../data/vehicles.js')

const list = (req, res) => {
    res.json(vehicles)
  }
  
  const show = (req, res) => {
    res.json(vehicles.filter(vehicle =>vehicle._id === parseInt(req.params.id)))
}
  
  const create = (req, res) => {
    // res.send(req.body)
      const newVehicle = {
      _id: vehicles.length + 1,
      year: req.body.year,
      make: req.body.make,
      model: req.body.model
    //   ...req.body
    }
  
    vehicles.push(newVehicle);
    res.json(vehicles)
}
  
  module.exports = {
    list,
    show,
    create
  }
