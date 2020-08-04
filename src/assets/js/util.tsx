//dcRange delete and copy the range
let dcRange = () => {
    let selection = window.getSelection(),
        range = selection.getRangeAt(0),
        cloneNodes = range.cloneContents();//copy the selected data
    range.deleteContents()
    return [cloneNodes, range]
}
//setTitle set h tag hierachy
let setTitle = (hierachy: string): void => {//TODO：存在嵌套问题
    console.log('nmsl')
    let [cloneNodes, range] = dcRange(),
        codeContainer = document.createElement(hierachy);
    if (cloneNodes instanceof DocumentFragment) {
        codeContainer.appendChild(cloneNodes);
    }
    if (range instanceof Range) {
        range.insertNode(codeContainer)
    }
}
//updateState 
let updateState = (value: string, key: string, state: object, setState: Function) => {
    console.log(value)
    let target = Object.assign({}, state, {
        [key]: value
    })
    setState(target)
}
export {
    setTitle,
    updateState
}