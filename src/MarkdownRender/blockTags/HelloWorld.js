import docjsx from "my-doc-jsx"

class HelloWorld extends docjsx.BlockTag{
    constructor(...arg){
        super(...arg)
        this.priority = 0;
    }

    render(){
        return this.$getChildrenText()
    }
}

export default HelloWorld;