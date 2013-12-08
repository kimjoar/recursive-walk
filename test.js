var expect = require('chai').expect;
var recursiveWalk = require('./index.js');

describe('recursive-walk', function() {

    it('triggers callback for each root item', function() {
        var items = [1, 2];
        var count = 0;

        recursiveWalk(items, null, function() {
            count += 1;
        });

        expect(count).to.equal(2);
    });

    it('triggers callback when has child', function() {
        var items = [{
            children: ['child']
        }];
        var count = 0;

        recursiveWalk(items, 'children', function(item) {
            if (item === 'child') count += 1;
        });

        expect(count).to.equal(1);
    });

    it('triggers callback when child has child', function() {
        var items = [{
            children: [
                { children: [1] },
                { children: [2, 3] }
            ]
        }];
        var count = 0;

        recursiveWalk(items, 'children', function(item) {
            if (item === 1 || item === 2 || item === 3) count += 1;
        });

        expect(count).to.equal(3);
    });

});
