var mongoose = require('mongoose')

var User = mongoose.model('User', {
  User: {
    type: String,
    minlength: 1,
    trim: true
  },
  email: {
    type: String,
    minlength: 1
  }
})

module.exports = {User}
