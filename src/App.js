import './App.css';
import { useState } from 'react';
import Contain from './Component/Contain'
import {FakeData} from './Data'
import Title from './Component/Title'
import Button from './Component/Button'

function App() {
  const [TasksData , SetTasksData] = useState(FakeData)

  const onDelete =()=>{
    SetTasksData([])
  }

  const onShow =()=>{
    SetTasksData(FakeData)
  }

  return (
    <div className="App">
      
      <Title FakeData={TasksData}/>
      <Contain FakeData={TasksData}/>
      <Button  DeletData={onDelete} ShowData={onShow}/>

    </div>
  );
}

export default App;
