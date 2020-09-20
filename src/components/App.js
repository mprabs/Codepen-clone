import React, { useState, useEffect } from 'react';
import Editor from './editor'

function App() {
const [html, setHtml] = useState('')
const [css, setCss] = useState('')
const [javaScript, setJavaScript] = useState('')
const [srcDoc, setSrcDoc] = useState('')

useEffect(() => {
  const timeout = setTimeout(() => {
    setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${javaScript}</script>
      </html>
    `)
  }, 250)

  return () => clearTimeout(timeout);
}, [html, css, javaScript])


return (
    <>
    <div className="pane top-pane">
      <Editor
        language="xml"
        displayName="HTML"
        value={html}
        onChange={setHtml}
       />
      <Editor
        language="css"
        displayName="CSS"
        value={css}
        onChange={setCss}
       />
       <Editor
        language="javascript"
        displayName="JS"
        value={javaScript}
        onChange={setJavaScript}
       />
    </div>
    <div className="pane">
      <iframe
        srcDoc={srcDoc}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </div>
    </>
  );
}

export default App;
