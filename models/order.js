const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerId: { type: String, required: true },
  items: [{
    productId: { type: String, required: true },
    quantity: { type: Number, required: true }
  }],
  totalAmount: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'processing', 'shipped', 'delivered', 'canceled'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);