const Subscriptions = require('../models/subscription.model');

const subscriptionModel = new Subscriptions();

 exports.saveSubscriptions = (req, res, next) => {
    subscriptionModel.saveSubscriptions(req, res);
  };