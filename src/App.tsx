// import Alert from "./components/Alert";
// import Button from "./components/Button";
// import Like from "./components/Like";
// import ListGroup from "./components/ListGroup";

import { useState } from "react";
import ExpenseList from "./components/expense-tracker/components/ExpenseList";
import GroceryList from "./components/GroceryList";
import styled from 'styled-components';
import ExpenseFilter from "./components/expense-tracker/components/ExpenseFilter";
import './App.css'
import ExpenseForm from "./components/expense-tracker/components/ExpenseForm";



const AppStyle = styled.div`
  width: 100%;
  height: 100vh;
`

const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

function App() {
  const [ selectedCategory, setSlectedCategory ] = useState("")
  const [ expenses, setExpenses ] =useState([
    {id: 1, description: 'aaa', amount: 10, category: 'Utilities'},
    {id: 2, description: 'bbb', amount: 10, category: 'Utilities'},
    {id: 3, description: 'ccc', amount: 10, category: 'Utilities'},
    {id: 4, description: 'ddd', amount: 10, category: 'Utilities'},
  ])
  const [backgroundColor, setBackgroundColor] = useState('');

  const changeBackgroundColor = (color: string) => {
    setBackgroundColor(color);
  };

  // const handelSelectItem = (item:string) => {
  //   console.log(item)
  // }
  const visibleExpenses = selectedCategory ? expenses.filter( e => e.category === selectedCategory) : expenses;

  return(
    <AppStyle className="App" style={{ backgroundColor }}>
      {colors.map((color, index) => (
          <button key={index} onClick={() => changeBackgroundColor(color)}>
            {color}
          </button>
        ))}
      {/* <GroceryList/> */}
      <div className="mb-3">
        <ExpenseForm onSubmit={newExpense => setExpenses([...expenses, {...newExpense, id: expenses.length + 1}])}/>
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={category => setSlectedCategory(category)}/>
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={(id)=> setExpenses(expenses.filter((e) => e.id !== id))}/>
      {/* <Like onClick={() => console.log("clicked")}/> */}
      {/* <Alert>
        Hello<span>World</span>
      </Alert> */}
      {/* <ListGroup items={items} heading="Cities" onSelectItem={handelSelectItem}/> */}
    </AppStyle>
  )
}

export default App;