module.exports = walk;

function walk(items, key, callback) {
    items.forEach(function(item) {
        callback(item);
        if (item[key]) {
            walk(item[key], key, callback);
        }
    });
}
