import React from 'react'
import ReactDom from 'react-dom'
import Editor from '../src'

const props = {
    toolConfig: {

    },
    corezoneConfig: {

    }
}
ReactDom.render(<div style={{ width: "100vw", height: "100vh", position: "relative" }}> <Editor {...props} /></div >, document.getElementById('app'))
