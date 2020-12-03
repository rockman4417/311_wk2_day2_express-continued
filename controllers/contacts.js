const contacts = require('../data/contacts.js')

const list = (req, res) => {
    res.json(contacts)}
  
const show = (req, res) => {
    res.json(contacts.filter(contact =>contact._id === parseInt(req.params.id)))
}
  
  const create = (req, res) => {
    // res.send(req.body)
      const newContact = {
      _id: contacts.length + 1,
      name: req.body.name,
      occupation: req.body.occupation,
      avatar: req.body.avatar
      //   ...req.body
    }
  
    contacts.push(newContact);
    res.json(contacts)
}
  
  module.exports = {
    list,
    show,
    create
  }