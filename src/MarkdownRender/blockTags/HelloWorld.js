import docjsx from "my-doc-jsx"

class HelloWorld extends docjsx.BlockNode{
    constructor(...arg){
        super(...arg)
        this.priority = 0;
    }

    async render(render){
        return render.renderInlineNodes(this.childPseudoNodes)
    }
}

export default HelloWorld;