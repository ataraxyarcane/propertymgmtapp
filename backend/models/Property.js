const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  rent: { type: Number, required: true },
  description: String,
  tenants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' }]
});

module.exports = mongoose.model('Property', propertySchema);