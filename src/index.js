import docjsx from "my-doc-jsx"
import htmlHelloWorld from './HTMLRender/blockTags/HelloWorld'
import markdownHelloWorld from './MarkdownRender/blockTags/HelloWorld'

class Plugin extends docjsx.BasePlugin{
    constructor(...arg){
        super(...arg)
        this.$registerBlockTag('HTML', 'hello-world' ,htmlHelloWorld)
        this.$registerBlockTag('MARKDOWN', 'hello-world' ,markdownHelloWorld)
    }
}

module.exports = Plugin