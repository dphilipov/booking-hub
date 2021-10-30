module.exports = async function deleteOne(req, res, next) {
    try {
        await res.booking.deleteOne();
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }

    next();
}