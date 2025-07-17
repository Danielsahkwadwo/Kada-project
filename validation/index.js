
module.exports = {
  passengerValidation: require('./passengerValidation').passengerValidation,
  updatePassengerValidation: require('./passengerValidation').updatePassengerValidation,
  driverValidation: require('./driverValidation'),
  locationValidation: require('./locationValidation'),
  rideValidation: require('./rideValidation'),
  adminValidation: require('./adminValidation'),
  
  validator: require('./validator')
};