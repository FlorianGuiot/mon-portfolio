const mailService = require('../services/mailService');

exports.sendMessage = async (req, res, next) => {
    try {
        const { name, email, message } = req.body;
        await mailService.sendMail({ name, email, message });
        res.status(200).json({ success: true });
    } catch (error) {
        next(error);
    }
};
