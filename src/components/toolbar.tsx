import * as React from 'react';
import { useState, useEffect } from 'react';
import { setTypeface, setBoldface, setItalic, setFontColor, setOrderlyLabel, setUnorderlyLabel } from "../assets/js/toolHandler";
const styles = require("../assets/css/toolbar.scss")
interface ToolBarConfig {
    toolList: {
        iconfontName: string,
        title: string,
    }[],
}

let ToolBar = function (props: ToolBarConfig) {
    //const [upload_progress, setupload_progress] = useState(0);//upload progress
    useEffect(() => {
        console.log(props)
    });
    return (
        <div className={styles.editor_toolbar_container}>
            {props.toolList.map(item =>
                <div key={item.title} title={item.title} onClick={changeHandler.bind(this, item.title)}
                    className={"iconfont " + item.iconfontName + " " + styles.tool_item}></div>
            )}
        </div>
    )
}
function changeHandler(title) {
    switch (title) {
        case "字体":
            setTypeface();
            break;
        case "黑体":
            setBoldface();
            break;
        case "斜体":
            setItalic();
            break;
        case '字体颜色':
            setFontColor();
            break;
        case "有序标签":
            setOrderlyLabel();
            break;
        case "无序标签":
            setUnorderlyLabel();
            break;
    }
};
export default ToolBar