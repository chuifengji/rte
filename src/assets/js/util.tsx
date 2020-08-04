//dcRange delete and copy the range
let dcRange = (): [Range, string, DocumentFragment] => {
    let selection = window.getSelection(),
        range = selection.getRangeAt(0),
        cloneNodes = range.cloneContents(),//copy the selected data
        text = range.toString();
    let elem = range.commonAncestorContainer;
    if (range.commonAncestorContainer.parentNode.nodeName === 'DIV') {
        elem = elem
    } else {
        elem = elem.parentNode.parentNode
    }
    removeAllChilds(elem);
    range.deleteContents()
    return [range, text, cloneNodes]
}
//setTitle set h tag hierachy
let setTitle = (hierachy: string): void => {
    let [range, text] = dcRange(),
        codeContainer = document.createElement(hierachy),
        textnode = document.createTextNode(text);
    codeContainer.appendChild(textnode);
    range.insertNode(codeContainer)
}
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
    setTitle,
    updateState
}