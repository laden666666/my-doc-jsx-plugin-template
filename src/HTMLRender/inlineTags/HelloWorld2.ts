import { HTMLRender, InlineNode } from "my-doc-jsx"
declare function require(name: string): any;
var style = require('./HelloWorld2.scss')

export class HelloWorld2 extends InlineNode<HTMLRender>{
    constructor(...arg){
        super(...arg)
    }

    async render(render: HTMLRender){
        render.setStyle('helloWorld2', style)
        return `<span class="mydoc_helloWorld2">${await render.renderInlineNodes(this.childPseudoNodes)}</span>`
    }
}