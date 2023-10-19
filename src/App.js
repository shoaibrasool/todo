import { useState } from 'react';
import './App.css';
import Input from './components/Input/input';
import List from './components/task/List';

function App() {

  const [data, setData] = useState([]);
  const [checkedTodos, setCheckedTodos] = useState([]);

  const deleteTodo = (itemToDelete) => {
    const filteredData = data.filter((item) => {
      return item !== itemToDelete;
    })
    setData(filteredData);
  }

  const checkTodo = (checkedItem) => {
    setCheckedTodos([checkedItem, ...checkedTodos]);
    const filteredData = data.filter((item) => {
      return item !== checkedItem;
    })
    setData(filteredData);
  }

  return (
    <div className="App" style={{ display: 'grid', placeItems: 'center', }}>
      <Input data={data} setData={setData} />
      <div className="todos">
        <List data={data} title="ToDo's" deleteTodo={deleteTodo} checkTodo={checkTodo} condition={true} />
        <List data={checkedTodos} title="Checked" condition={false}/>
      </div>
    </div>
  );
}

export default App;
