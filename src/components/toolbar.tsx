import * as React from 'react';
import { useState, useEffect } from 'react';
import { setTitle, setFontBold, setFontColor, execCommandHandler } from '../assets/js/execCommandHandler';
import { DefaultToolList } from "../config/toolbarConfig";
import { updateState } from "../assets/js/util"
const styles = require("../assets/css/toolbar.scss")
interface ToolBarConfig {
    toolList: {
        iconfontName: string,
        title: string,
        cmd: string
    }[],
}

let ToolBar = function (props: ToolBarConfig) {
    let dms =
    {
        htag: 'none',
    }

    const [toolList, setToolList] = useState(DefaultToolList);
    const [dropModelState, setdropModelState] = useState(dms);
    useEffect(() => {
        if (props.toolList) {
            setToolList(props.toolList)
        }
    });
    let toolHandler = (cmd: string) => {//确定是否有模态选择框
        // console.log(cmd)
        switch (cmd) {
            case 'setTitle':
                let currentState = dropModelState['htag'] == 'block' ? 'none' : "block"
                updateState(currentState, "htag", dropModelState, setdropModelState);
                break;
            case "bold":
                setFontBold()
                break;
            case "foreColor":
                setFontColor('blue');
                break;
            case "italic":
            case "insertorderedlist":
            case "insertunorderedlist":
                console.log(cmd)
                execCommandHandler(cmd, null);
                break;
        }
    }
    return (
        <div className={styles.editor_toolbar_container}>
            <div className={styles.toolbar}>
                {toolList.map(item =>
                    <div key={item.title} title={item.title} onMouseDown={() => {
                        toolHandler(item.cmd)
                    }}
                        className={"iconfont " + item.iconfontName + " " + styles.tool_item}></div>
                )}
            </div>
            <div className={styles.model_title}
                onMouseLeave={() => {
                    updateState('none', "htag", dropModelState, setdropModelState);
                }} style={{ display: dropModelState["htag"] }}>
                <p className={styles.drop_title}>设置标题</p>
                <ul className={styles.drop_list}>
                    <li className={styles.drop_item}
                        onMouseDown={() => {
                            setTitle('h1');
                            updateState('none', "htag", dropModelState, setdropModelState);
                        }}><h1>H1</h1></li>
                    <li className={styles.drop_item}
                        onMouseDown={() => {
                            setTitle('h2');
                            updateState('none', "htag", dropModelState, setdropModelState);
                        }}><h2>H2</h2></li>
                    <li className={styles.drop_item}
                        onMouseDown={() => {
                            setTitle('h3');
                            updateState('none', "htag", dropModelState, setdropModelState);
                        }}><h3>H3</h3></li>
                    <li className={styles.drop_item}
                        onMouseDown={() => {
                            setTitle('h4');
                            updateState('none', "htag", dropModelState, setdropModelState);
                        }}><h4>H4</h4></li>
                    <li className={styles.drop_item}
                        onMouseDown={() => {
                            setTitle('h5');
                            updateState('none', "htag", dropModelState, setdropModelState);
                        }}><h5>H5</h5></li>
                    <li className={styles.drop_item}
                        onMouseDown={() => {
                            setTitle('p');
                            updateState('none', "htag", dropModelState, setdropModelState);
                        }}><p>正文</p></li>
                </ul>
            </div>
        </div>
    )
}

export default ToolBar