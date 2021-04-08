import React from 'react'
import {useState ,useEffect} from 'react'
import './App.css'
const App = () => {
  const [Listitems, setListitems] = useState([]);
  const [inputlist, setinputlist] = useState("");
  const listEvent = (value) => {
    setinputlist(value);
  };
  const listofitems = () => {
    setListitems ((olditems) => {
      return [...olditems, inputlist];
    });
    setinputlist("")
  };
  const deleteTodo=(id)=>{
    var Data =Listitems.filter((itemval, index)=>(index!=id))
    setListitems(
    Data
    )}
  return (
    <>
    


      { <div className="main-div">
        <div className="main-child">
          <br />
          <h1 className="header">MY Todo List</h1>
          <br />
          <input type="text" className="input" placeholder="Add A Item" value={inputlist} onChange={(event)=>listEvent(event.target.value)} />
          <button onClick={listofitems}>+</button>
          <ul>
            {Listitems.map((itemval,ind) => {
              return <li key={ind}>{itemval}{""}<button Id={ind} className="dbtn"onClick={(e)=>deleteTodo(e.target.id)}>X</button></li>
            })}
          </ul>
        </div>
        <div className="main-child">
          <br />
          <h1 className="header">MY Todo List</h1>
          <br />
          <input type="text" className="input" placeholder="Add A Item" value={inputlist} onChange={(event)=>listEvent(event.target.value)} />
          <button onClick={listofitems}>+</button>
          <ul>
            {Listitems.map((itemval,ind) => {
              return <li key={ind}>{itemval}{""}<button Id={ind} className="dbtn"onClick={(e)=>deleteTodo(e.target.id)}>X</button></li>
            })}
          </ul>
        </div>
        <div className="main-child">
          <br />
          <h1 className="header">MY Todo List</h1>
          <br />
          <input type="text" className="input" placeholder="Add A Item" value={inputlist} onChange={(event)=>listEvent(event.target.value)} />
          <button onClick={listofitems}>+</button>
          <ul>
            {Listitems.map((itemval,ind) => {
              return <li key={ind}>{itemval}{""}<button Id={ind} className="dbtn"onClick={(e)=>deleteTodo(e.target.id)}>X</button></li>
            })}
          </ul>
        </div>
          // </div>}
    
    </>
  )
}
export default App;
