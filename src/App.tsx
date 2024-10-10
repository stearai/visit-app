import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>AI File Interaction App</h1>
        <p>Upload and chat with your files using AI</p>
      </header>
      <main>
        <div className="upload-section">
          <h2>Upload Your File</h2>
          <div className="upload-area">
            <p>Drag and drop your file here or click to select</p>
          </div>
        </div>
        <div className="recent-files">
          <h2>Recent Files</h2>
          <ul>
            <li>File 1</li>
            <li>File 2</li>
            <li>File 3</li>
          </ul>
        </div>
      </main>
      <footer>
        <nav>
          <button>Home</button>
          <button>Chat</button>
          <button>History</button>
          <button>Notifications</button>
        </nav>
      </footer>
    </div>
  )
}

export default App