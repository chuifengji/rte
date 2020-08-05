import { dcRange, removeAllChilds } from "./util"

let execCommandHandler = (cmd: string, aValueArgument?: string) => {
    document.execCommand(cmd, false, aValueArgument);
}
let setTitle = (hierachy: string): void => {
    let [range, text] = dcRange(),
        textContainer = document.createElement(hierachy),
        textnode = document.createTextNode(text);
    let elem = range.commonAncestorContainer;
    if (range.commonAncestorContainer.parentNode.nodeName === 'DIV') {
        elem = elem
    } else {
        elem = elem.parentNode.parentNode
    }
    removeAllChilds(elem);
    range.deleteContents();
    textContainer.appendChild(textnode);
    range.insertNode(textContainer)
}
//setFontBold 设置字体加粗
let setFontBold = () => {
    let [range, text] = dcRange(),
        textContainer = document.createElement('span'),
        textnode = document.createTextNode(text);
    let elem = range.commonAncestorContainer;
    if (elem.parentNode.nodeName === 'SPAN') {//如果已经有span就不用创建
        elem.parentElement.style.fontWeight = '700'
    } else {
        textContainer.appendChild(textnode);
        textContainer.style.fontWeight = '700';
        range.deleteContents();
        range.insertNode(textContainer)
    }

}
//setFontBold 设置字体颜色
let setFontColor = (colorCode: string) => {
    let [range, text] = dcRange(),
        textContainer = document.createElement('span'),
        textnode = document.createTextNode(text);
    let elem = range.commonAncestorContainer;
    if (elem.parentNode.nodeName === 'SPAN') {//如果已经有span就不用创建
        elem.parentElement.style.color = colorCode
    } else {
        textContainer.appendChild(textnode);
        textContainer.style.color = colorCode;
        range.deleteContents();
        range.insertNode(textContainer);
    }
}
export {
    execCommandHandler,
    setTitle,
    setFontBold,
    setFontColor,
}
