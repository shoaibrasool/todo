import { useState } from 'react';
import './App.css';
import Input from './components/Input/input';
import List from './components/task/List';

function App() {

  const [data, setData] = useState(['hey', 'bwyywewe','slayyyyyyyyyyyy']);

  return (
    <div className="App" style={{display: 'grid',placeItems: 'center',}}>
      <Input data={data} setData={setData}/>
      <List data = {data} title = "ToDo's" />
    </div>
  );
}

export default App;
