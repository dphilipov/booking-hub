module.exports = function paginatedResults(model) {
    return async (req, res, next) => {
        const pageIndex = Number(req.query.pageIndex) || 0;
        const pageSize = Number(req.query.pageSize) || 5;

        const startIndex = pageIndex * pageSize;

        const result = {};

        //TO DO: add validation cheks

        try {
            result.totalCount = await model.countDocuments().exec();
            result.list = await model.find().limit(pageSize).skip(startIndex).exec();

            res.paginatedResult = result;

            next();
        } catch(err) {
            res.status(500).json({
                message: err.message
            });
        }

    }
}