import './App.css';
import { React, useEffect, useState } from 'react'
import axios from "axios";
import NPTStudentList from './components/NPTStudentlist';

function App() {
  const [nptStudentList, setNPTStudentList] = useState([]);
  const NptGetStudent = async () => {
    try {
      const response = await axios.get("https://667cce403c30891b865db7dc.mockapi.io/nptApi/v1/nptUsers");
      setNPTStudentList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    NptGetStudent();
  }, []);
  return (
    <div className='container border my-3'>
      <h1 className='text-center my-3'>Làm Việc Với API</h1>
      <hr />
      <NPTStudentList renderNPTStudentList = {nptStudentList}/>
    </div>
  )
}

export default App;