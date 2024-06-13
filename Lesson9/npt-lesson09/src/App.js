import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import NptStudentList from "./components/NptStudentlist";
function NptApp() {
  // Sử dụng hàm useState của hook
const [NptStudentList, setNptStudentList]=useState([]);
//Get data from api
const nptGetStudent = async () =>{
  try {
    const response = await axios.get("https://666a624c7013419182cf11ca.mockapi.io/api/nptv1/nptStudent");
    setNptStudentList(response.data);
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
useEffect(()=> {
  nptGetStudent();
}, [])
  return (
    <div className="container border mt-5 p-3">
      <h2 className="text-center">Xử lý các chức năng CRUD - Hook - API</h2>
      <hr />
      <NptStudentList renderNptStudentList = {NptStudentList}/>
    </div>
  );
}

export default NptApp;
