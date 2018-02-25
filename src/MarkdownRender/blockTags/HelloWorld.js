import docjsx from "my-doc-jsx"

class HelloWorld extends docjsx.BlockNode{
    constructor(...arg){
        super(...arg)
        this.priority = 0;
    }

    render(render){
        return render.renderChildInlineNodes(this.childPseudoNodes)
    }
}

export default HelloWorld;