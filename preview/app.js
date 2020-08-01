import React from 'react'
import ReactDom from 'react-dom'
import Editor from '../src'

const props = {
    toolConfig: {
        toolList: [
            {
                iconfontName: 'icon22',
                title: '字体'
            },
            {
                iconfontName: 'iconjiacu',
                title: '黑体'
            },
            {
                iconfontName: 'iconxieti',
                title: '斜体'
            },
            {
                iconfontName: 'iconzimua',
                title: '字体颜色'

            }
            , {
                iconfontName: 'iconyouxubiaoqian',
                title: '有序标签'

            }
            , {
                iconfontName: 'iconwuxubiaoqian',
                title: '无序标签'

            }
        ]
    },
    corezoneConfig: {

    }
}
ReactDom.render(<div style={{ width: "100vw", height: "100vh", position: "relative" }}> <Editor {...props} /></div >, document.getElementById('app'))
