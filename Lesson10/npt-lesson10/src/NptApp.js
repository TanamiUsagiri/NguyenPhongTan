import React, { useEffect, useState } from 'react'
import NptCategoryList from "./Components/NptCategoryList"
import axios from "./api/NptApi";
import NptCategoryForm from './Components/NptCategoryForm';

function NptApp() {
  //Lay du lieu tu API
  const [NptCategories,setNptCategories] = useState ([]);

  const getNptCategories = async () => {
      const NptCategoryResponse = await axios.get("NptCategory");
      setNptCategories(NptCategoryResponse.data);
  }

  useEffect(() =>{
    getNptCategories();
  },[])

  // Trang thai Form
  const [nptCategoryIsForm, setNptCategoryIsForm] = useState (false);

  const nptHandleAddNew = (param) =>{
    setNptCategoryIsForm(param);
  }
  const nptHandleCategoryCloseForm = (param) =>{
    setNptCategoryIsForm(param);
  }
  const nptHandleCategorySubmit = (param) =>{
    NptCategories.push(param);
    setNptCategories((prev) =>
    {
      return[...prev];
    })
    setNptCategoryIsForm(false);
  }
  return (
    <div className='container border m-3'>
      <h2>Nguyen Phong Tan - Call API</h2>
      <hr/>
      <NptCategoryList renderNptCategories = {NptCategories}
          onAddNew={nptHandleAddNew}/>
      <hr/>
      {
        nptCategoryIsForm===true?<NptCategoryForm 
        onCloseForm={nptHandleCategoryCloseForm}
        onCategorySubmit={nptHandleCategorySubmit}/>:""
      }
    </div>
  )
}

export default NptApp;
