import {BasePlugin} from "my-doc-jsx"
import htmlHelloWorld from './HTMLRender/blockTags/HelloWorld'
import markdownHelloWorld from './MarkdownRender/blockTags/HelloWorld'
import {HelloWorld2 as htmlHelloWorld2} from './HTMLRender/inlineTags/HelloWorld2'
import {HelloWorld2 as markdownHelloWorld2} from './MarkdownRender/inlineTags/HelloWorld2'

class Plugin extends BasePlugin{
    constructor(...arg){
        super(...arg)
        this.registerBlockNode('HTML', 'hello-world' ,htmlHelloWorld)
        this.registerBlockNode('MARKDOWN', 'hello-world' ,markdownHelloWorld)
        this.registerInlineNode('HTML', 'hello-world2' ,htmlHelloWorld2)
        this.registerInlineNode('MARKDOWN', 'hello-world2' ,markdownHelloWorld2)
    }
}

module.exports = Plugin