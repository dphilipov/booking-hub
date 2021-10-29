module.exports = function paginatedResults(model) {
    return (req, res, next) => {
        const pageIndex = Number(req.query.pageIndex) || 0;
        const pageSize = Number(req.query.pageSize) || 5;

        const startIndex = pageIndex * pageSize;
        const endIndex = startIndex + pageSize;

        const result = {};

        //TO DO: add validation cheks

        result.totalCount = model.length;
        result.list = model.slice(startIndex, endIndex);

        res.paginatedResults = result;
        next();
    }
}