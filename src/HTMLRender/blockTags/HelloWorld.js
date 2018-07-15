import {BlockNode} from "my-doc-jsx"
var style = require('./HelloWorld.css')

class HelloWorld extends BlockNode{
    constructor(...arg){
        super(...arg)
        this.priority = 0;
    }

    async render(render){
        render.setStyle('helloWorld', style)
        return `<div class="mydoc_helloWorld">${await render.renderInlineNodes(this.childPseudoNodes)}</div>`
    }
}

export default HelloWorld;