import React, { useState } from 'react'

function App() {

    const [inputText, setInputText] = useState("")
    const [Items, setItems] = useState([])

    function handleChange(e) {
        const text = e.target.value
        setInputText(text)
    }

    function addItem() {
        setItems((prevItems) => {
            return [
                ...prevItems,
                inputText
            ]
        })
        setInputText("")
    }

    return (
        <div className="container">
        <div className="heading">
            <h1>To-Do List</h1>
        </div>
        <div className="form">
            <input type="text" onChange={handleChange} value={inputText} />
            <button onClick={addItem}>
                <span>Add</span>
            </button>
        </div>
        <div>
            <ul>
                {Items.map( (item) => {
                    return <li>{item}</li>
                })}
            </ul>
        </div>
        </div>
    );
}

export default App;

