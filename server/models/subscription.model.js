const subscriptionsModel = require("../schemas/subscription.schema");
const sendResponse = require("../core/response/send-response");

class Subscriptions {
  async saveSubscriptions(req, res) {
    if (!req.body.subscription_id) {
      return sendResponse(res, [], "Bad request", true, 400);
    }
    try {
      const subscription = await subscriptionsModel.create({
        subscription_id: req.body.subscription_id,
      });
      return sendResponse(
        res,
        subscription,
        "Subscriptions save successfully",
        false,
        200
      );
    } catch (e) {
      return sendResponse(res, [], "Internal server error",true, 500);
    }
  }
}

module.exports = Subscriptions;
