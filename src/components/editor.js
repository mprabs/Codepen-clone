import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'

function Editor(props) {
    const { 
        language, 
        displayName,
        value,
        onChange
     } = props

     const [open, setOpen] = useState(true)

     function handleChange(editor, data, value) {
         onChange(value)
     }

    return (
        <div className={`editor-container ${open ? '' : 'collapsed'}`}>
            <div className="editor-title">
                {displayName}
                <button onClick={() => setOpen(prevOpen => !prevOpen)}> <i className={`fas fa-${open ? 'compress' : 'expand'}-alt`}></i> </button>
            </div>
            {console.log(open)}
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineNumbers: true,
                    lineWrapping:true,
                    lint:true,
                    mode: language,
                    theme: 'material'
                }}
             />
        </div>
    )
}

export default Editor
