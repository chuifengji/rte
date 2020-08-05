//dcRange delete and copy the range
let dcRange = (): [Range, string, DocumentFragment] => {
    let selection = window.getSelection(),
        range = selection.getRangeAt(0),
        cloneNodes = range.cloneContents(),//copy the selected data
        text = range.toString();
    return [range, text, cloneNodes]
}
//setTitle set h tag hierachy

//updateState 
let updateState = (value: string, key: string, state: object, setState: Function) => {
    let target = Object.assign({}, state, {
        [key]: value
    })
    setState(target)
}
//removeAllChilds 删除所有子节点
let removeAllChilds = (elem) => {
    let childs = elem.childNodes;
    for (let i = childs.length - 1; i >= 0; i--) {
        elem.removeChild(childs[i]);
    }
}
export {
    updateState,
    dcRange,
    removeAllChilds
}