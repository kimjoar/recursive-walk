module.exports = function(items, key, callback) {
    walk(items, key, callback);
}

function walk(items, key, callback) {
    items.forEach(function(item) {
        callback(item);
        if (item[key]) {
            walk(item[key], key, callback);
        }
    });
}
