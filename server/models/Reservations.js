const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/reservation', { useNewUrlParser: true })
  .then(() => {
    console.log(' Reservation connecting Done ');
  })
  .catch(err => {
    console.log(' Err when conecting To Reservation ', err);
  });
  const ReservSchema = new mongoose.Schema({
    customer_id:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    },
    status:{
        type:Boolean
    },
    mobile_number:{
        type:Number
    },
    type_Reserv:{
        type:Array
    },

    total_price:{
        type:Number
    },
    place_name:{
        type:String
    },
    number_of_person :{
        type:Number,
        required:true
    }

  })

  module.exports = Reserv = mongoose.model('Reserv', ReservSchema);