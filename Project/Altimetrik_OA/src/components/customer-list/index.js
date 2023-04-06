import React, { useState } from "react";
import "./index.css";

function CustomerList() {
    const [inputValue, setInputValue] = useState("")
    const [inputList, setInputList] = useState([])

    const inputValueHandler = (e) => {
        e.preventDefault();
        const inputVal = e.target.value
        if(inputVal !== ""){
          setInputValue(e.target.value)
        }
        
    }
    const add = () => {
      if(inputValue !== ""){
        setInputList((prevState) => [...prevState, inputValue])
        setInputValue("")
      }
        
    }

    return (
        <div className="mt-75 layout-column justify-content-center align-items-center">
            <section className="layout-row align-items-center justify-content-center">
                <input type="text" className="large" placeholder="Name" data-testid="app-input" value={inputValue} onChange={inputValueHandler} />
                <button onClick={add} type="submit" className="ml-30" data-testid="submit-button">Add Customer</button>
            </section>
            <ul className="styled mt-50" data-testid="customer-list">
            {
              inputList ?   
                    inputList.map((item, index) => {
                        return <li className="slide-up-fade-in" data-testid={`list-item${index}`} key={index} >{item}</li>
                    })
              :
             null
            }
            </ul>

        </div>
    );
}

export default CustomerList