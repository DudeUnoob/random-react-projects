import { useRef, useState } from 'react'



function App() {
  const [list, setList] = useState([])
  const ref = useRef(null)


  const handleAddItem = (event) => {
    event.preventDefault()

    setList((currentList) => [...currentList, ref.current.value]);
  }

  const handleDeleteItem = (event, index) => {
    
    setList((currentList) => currentList.filter((item, i) => i !== index));

  }

  return (
    <>

      <input type='text' ref={ref} />
      <button onClick={(event) => handleAddItem(event)} type="button">Add Item</button>


      <ul>
        {list.map((elm, i) => {

          return (
            <>
              <li key={i}>{elm}</li>
              <button type='button' style={{ fontSize:"12px", margin:"5px", display:"flex"}} onClick={(event) => handleDeleteItem(event, i)}>Delete</button>
            </>
          )
        })}
      </ul>
    </>
  )
}

export default App
