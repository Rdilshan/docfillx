
import './App.css'

import {handleDownload} from 'docfillx';

function App() {

  const datavalue = {
    name: "John Doe",
    age: 30,
    data: [
      { id: 1, name: "a" },
      { id: 2, name: "b" },
    ],
  };
  
  return (
    <>
      <h1>check pdf</h1>
      <button onClick={() => handleDownload("/template.docx",datavalue)}>Download Document</button>

    </>
  )
}

export default App
