var assert = require('assert');
import {parseHtml} from "../src/parser.js";

describe("parse html: ", function(){
    it('<a href="//time.geekbang.org"></a>', function() {
        let tree = parseHtml('<a href="//time.geekbang.org"></a>');
        //assert.equal(tree.children[0].tagName, "a");
        assert.equal(tree.children.length , 1);
        assert.equal(tree.children[0].children.length , 0);
    });
    
    it('<a href></a>', function() {
        let tree = parseHtml('<a href></a>');
        assert.equal(tree.children.length , 1);
        assert.equal(tree.children[0].children.length , 0);
    });

    it('<a href="abc" id></a>', function() {
        let tree = parseHtml('<a href="abc" id></a>');
        assert.equal(tree.children.length , 1);
        assert.equal(tree.children[0].children.length , 0);
    });

    it('<a id=abc></a>', function() {
        let tree = parseHtml('<a id=abc></a>');
        assert.equal(tree.children.length , 1);
        assert.equal(tree.children[0].children.length , 0);
    });

    it('<a id=\'abc\'/>', function() {
        let tree = parseHtml('<a id=\'abc\'/>');
        assert.equal(tree.children.length , 1);
        assert.equal(tree.children[0].children.length , 0);
    });

    it('<a id=abc/>', function() {
        let tree = parseHtml('<a id=abc/>');
        assert.equal(tree.children.length , 1);
        assert.equal(tree.children[0].children.length , 0);
    });

    it('<a />', function() {
        let tree = parseHtml('<a />');
        assert.equal(tree.children.length , 1);
        assert.equal(tree.children[0].children.length , 0);
    });

    it('<A /> upper case', function() {
        let tree = parseHtml('<A />');
        assert.equal(tree.children.length , 1);
        assert.equal(tree.children[0].children.length , 0);
    });

    it('<>', function() {
        let tree = parseHtml('<>');
        assert.equal(tree.children.length , 1);
        assert.equal(tree.children[0].type , "text");
    });

    it('<a href id></a>', function() {
        let tree = parseHtml('<a href id></a>');
        assert.equal(tree.children.length , 1);
        assert.equal(tree.children[0].children.length , 0);
    });
});
