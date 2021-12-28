const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const subscriptionSchema = new Schema({
  subscription_id: String,
});

const subscriptionsModel = mongoose.model('subscriptions', subscriptionSchema, 'subscriptions');


module.exports = subscriptionsModel


