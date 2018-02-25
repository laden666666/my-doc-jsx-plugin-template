import myDocJsx from 'my-doc-jsx'
import Plugin from '../src/index'

var assert = require('chai').assert;

describe('myDocJsx基本功能测试', function() {
    it('转换测试', function() {
        myDocJsx.usePlugin(new Plugin)
        var jsxStr =
            `<doc>
                <hello-world>hello world!</hello-world>
            </doc>`
        var htmlStr = myDocJsx.convert(jsxStr)
        console.log(htmlStr)
        assert.equal(htmlStr.indexOf('hello world!') > -1, true)
    });
});