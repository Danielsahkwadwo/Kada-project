const mongoose = require('mongoose');
const BaseUser = require('./BaseUser');

const adminSchema = new mongoose.Schema({
  permissions: { type: [String], default: ['manageUsers', 'manageDrivers', 'viewLogs'] },
});

const Admin = BaseUser.discriminator('admin', adminSchema);

module.exports = Admin;
