 import { useState } from "react"
 import "./styles.css"
 
 export default function App() {
    return (
      <>
        <form className = "new-item-form">
            <div className = "form-row">
                <label htmlFor="item">New Item</label>
                <input type="text" id="item" />
            </div>
        </form>
        <h1 className="header"> Todo List</h1>
        <ul className="list">
            <li>
                
                <label>    
                  <input type="checkbox" />
                    Item 1
                </label>
                <button className="btn btn-danger">
                    Delete
                </button>
            </li>
            <li>
                <label>
                    <input type="checkbox" />
                    Item 2
                </label>
                <button className="btn btn-danger">
                    Delete
                </button>
            </li>
        </ul>
        <div>
            <input type="checkbox" id="checkbox1" />
            <label for="checkbox1">Check me!</label>
        </div>
        

      </>
    )
 }