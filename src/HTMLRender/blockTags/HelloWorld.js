import docjsx from "my-doc-jsx"
import './HelloWorld.css'

class HelloWorld extends docjsx.BlockNode{
    constructor(...arg){
        super(...arg)
        this.priority = 0;
    }

    render(render){
        return `<div class="mydoc_helloWorld">${render.renderChildInlineNodes(this.childPseudoNodes)}</div>`
    }
}

export default HelloWorld;