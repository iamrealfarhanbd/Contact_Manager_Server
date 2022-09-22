var mongoose = require('mongoose');
var dumbledoresArmySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required."],
      },
      address: {
        type: String,
        required: [true, "address is required."],
      },
      email: {
        type: String,
        required: [true, "email is required."],
      },
      phone: {
        type: Number,
        required: [true, "phone number is required."],
      },
      image: {
        type: String,
        required: [true, "String number is required."],
      },
});

const DumbledoresArmy = new mongoose.model("DumbledoresArmy", dumbledoresArmySchema);



module.exports = {
  
  DumbledoresArmy,
};