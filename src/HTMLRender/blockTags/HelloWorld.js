import docjsx from "my-doc-jsx"
import './HelloWorld.css'

class HelloWorld extends docjsx.BlockTag{
    constructor(...arg){
        super(...arg)
        this.priority = 0;
    }

    render(){
        return `<div class="mydoc_helloWorld">${this.$renderChildren(this.$getChildrenText())}</div>`
    }
}

export default HelloWorld;