import { MarkdownRender, InlineNode } from "my-doc-jsx"
declare function require(name: string): any;

export class HelloWorld2 extends InlineNode<MarkdownRender>{
    constructor(...arg){
        super(...arg)
    }

    render(render: MarkdownRender){
        return render.renderInlineNodes(this.childPseudoNodes)
    }
}
