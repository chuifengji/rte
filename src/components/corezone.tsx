import * as React from 'react';
import { useState, useEffect } from 'react';
const styles = require("../assets/css/corezone.scss");
interface CoreZoneConfig {

}
let CoreZone = function (props: CoreZoneConfig) {
    useEffect(() => {
        console.log('use effect!')
    });
    return (
        <div className={styles.editor_corezone_container}>
            <div suppressContentEditableWarning contentEditable="true"
                className={styles.main} id="editor_container_id">
                <h1>测试</h1>
            </div>
        </div>
    )
}

export default CoreZone