/**
 * Chunk into certain parts
 * e.q.: [1,2,3,4,5,6,7,8] [[1,2,3],[4,5,6],[7,8]]
 */
utils.arrChunk = (data = [], space = 5) => {
    var result = [];
    for (var i = 0, len = data.length; i < len; i += space) {
        result.push(data.slice(i, i + space));
    }
    return {
        data: result,
        total: data.length,
        space
    };
}