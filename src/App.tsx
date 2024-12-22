
import './App.css'

import {handleFile} from 'docfillx';

function App() {

  const datavalue = {
    name: "John Doe",
    age: 30,
    data: [
      { id: 1, name: "a" },
      { id: 2, name: "b" },
    ],
  };
  //this data save on word template
  //template in public folder

  return (
    <>
      <h1>Sample for docfillx</h1>
      <button onClick={() => handleFile("/template.docx",datavalue)}>Download Document</button>

    </>
  )
}

export default App
