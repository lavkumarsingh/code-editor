import React, { useState } from 'react';
import './App.css';

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/theme-twilight";

function App() {

  const [html, setHtml] = useState('');
  const [docs, setDocs] = useState('');

  function onChange(newValue) {
    setHtml(newValue);
  }

  function click() {
    setDocs(html);
  }

  return (
    <div className="App">
      <div className='editor'>
          <AceEditor
              placeholder= 'happy coding...'
              className= 'editor_space'
              mode="xml"
              theme="twilight"
              value={html}
              onChange={onChange}
              wrapEnabled= 'true'
              highlightActiveLine='true'
          />
          <div className='action'>
            <button onClick={click}>Run</button>
          </div>
      </div>

      <div className='output'>
        <iframe
          title = 'Output'
          srcDoc = {docs}
        />
      </div>
    </div>
  );
}

export default App;


/*         <AceEditor
        className= 'editor_space'
          mode="xml"
          theme="github"
          value={html}
          onChange={onChange}
        />
 */