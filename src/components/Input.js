import React, { useState } from "react"
import Display from "../Display";

const Input = () => {
    const [inputText, setInputText] = useState([]);


    const handleSubmit = () => {
        setInputText(inputText)
    }

    return (
        <div>
            <Display/>
            <form>
                <input type='text' placeholder="add ToDo"></input>
                <button onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Input