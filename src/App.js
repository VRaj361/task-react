import './App.css';
import { useState } from 'react';
import {  Route, Routes } from "react-router-dom";
import HomeComponent from './components/HomeComponent'
import { DisplayTable } from './components/DisplayTable';
import { ArrayDelete } from './components/ArrayDelete';


function App() {


  const a=[{"name":'vraj',rollno:23},{"name":'v',rollno:2},{"name":'vr',rollno:13}];
  const [arr, setarr] = useState(a)
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<HomeComponent/>}></Route>
        <Route path="/displaytable" element={<DisplayTable/>}></Route>
        <Route path="/deleterowtable" element={<ArrayDelete data={arr} dataset={setarr}/>}></Route>
      </Routes>
      
      
  
    </div>
  );
}

export default App;
