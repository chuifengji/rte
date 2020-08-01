import * as React from 'react';
import { useState, useEffect } from 'react';
const styles = require("../assets/css/corezone.scss");
interface CoreZoneConfig {

}
let CoreZone = function (props: CoreZoneConfig) {
    //const [upload_progress, setupload_progress] = useState(0);//upload progress
    useEffect(() => {
        console.log('use effect!')
    });
    return (
        <div contentEditable="true" className={styles.editor_corezone_container}>
            <p>i'm corezone</p>
        </div>
    )
}

export default CoreZone