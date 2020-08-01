import * as React from 'react';
import { useState, useEffect } from 'react';
import ToolBar from "./components/toolbar";
import CoreZone from "./components/corezone";
import "./assets/css/iconfont.scss"
const styles = require("./assets/css/index.scss");
interface EditorConfig {
    toolConfig: {
        toolList:
        {
            iconfontName: string,
            title: string
        }[]

    },
    corezoneConfig: {

    }
}

let Editor = function (props: EditorConfig) {
    //const [upload_progress, setupload_progress] = useState(0);//upload progress
    useEffect(() => {
        console.log('use effect!')
    });
    return (
        <div className={styles.editor_container}>
            <ToolBar {...props.toolConfig}></ToolBar>
            <CoreZone {...props.corezoneConfig}></CoreZone>
        </div>)
}

export default Editor;