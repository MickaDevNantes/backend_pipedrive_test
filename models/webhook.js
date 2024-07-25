const mongoose = require('mongoose')
   
const webhookSchema = mongoose.Schema({
action: String,
object: String,
company_id: String,
user_id: String,
});

const Webhook = mongoose.model('webhooks', webhookSchema);

module.exports = Webhook;