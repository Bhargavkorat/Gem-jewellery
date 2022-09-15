const Razorpay = require("razorpay")
const shortid = require('shortid')
// var razorpays = new Razorpay({
//     key_id: 'rzp_test_9SrTVx77YpCiEb',
//     key_secret: '4y8HC1ByP6IHcClPHSbsDekj',
// });

module.exports.razorpay = async (req, res) => {
	const payment_capture = 1
	const amount = 499
	const currency = 'INR'

	const options = {
		amount: amount * 100,
		currency,
		receipt: shortid.generate(),
		payment_capture
	}

	try {
		var instance = new Razorpay({ key_id: 'rzp_test_9SrTVx77YpCiEb', key_secret: '4y8HC1ByP6IHcClPHSbsDekj' })

		const response = await razorpay.orders.create(options)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
	}
}