import { MarkdownRender, InlineNode } from "my-doc-jsx"

export class HelloWorld2 extends InlineNode<MarkdownRender>{
    constructor(...arg){
        super(...arg)
    }

    async render(render: MarkdownRender){
        return render.renderInlineNodes(this.childPseudoNodes)
    }
}
