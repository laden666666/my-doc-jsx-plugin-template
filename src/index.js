import docjsx from "my-doc-jsx"
import htmlHelloWorld from './HTMLRender/blockTags/HelloWorld'
import markdownHelloWorld from './MarkdownRender/blockTags/HelloWorld'

class Plugin extends docjsx.BasePlugin{
    constructor(...arg){
        super(...arg)
        this.registerBlockNode('HTML', 'hello-world' ,htmlHelloWorld)
        this.registerBlockNode('MARKDOWN', 'hello-world' ,markdownHelloWorld)
    }
}

module.exports = Plugin