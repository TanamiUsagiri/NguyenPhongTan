import React, { useEffect, useState } from 'react'
import NptCategoryList from "./Components/NptCategoryList"
import axios from "./api/NptApi";
import NptCategoryForm from './Components/NptCategoryForm';

function NptApp() {
  //Lay du lieu tu API
  const [nptCategories,setNptCategories] = useState ([]);

  const getNptCategories = async () => {
      const NptCategoryResponse = await axios.get("NptCategory");
      setNptCategories(NptCategoryResponse.data);
  }

  useEffect(() =>{
    getNptCategories();
    console.log("getNptCategories: ",nptCategories);
  },[])

  // Trang thai Form
  const [nptCategoryIsForm, setNptCategoryIsForm] = useState (false);
  const [NptCategoryEdit, setNptCategoryEdit] = useState ("");
  const nptHandleAddNew = (param) =>{
    setNptCategoryIsForm(param);
  }
  const nptHandleCategoryCloseForm = (param) =>{
    setNptCategoryIsForm(param);
  }
  const nptHandleCategorySubmit = (param) =>{
    nptCategories.push(param);
    setNptCategories((prev) =>
    {
      return[...prev];
    })
    setNptCategoryIsForm(false);
  }
  const nptHandleDelete = (nptId) =>{
    console.log("App-Delete-nptId: ",nptId);
    const nptResponse = axios.delete('NptCategory/${nptId}');
    console.log("nptResponse-Delete",nptResponse);
    let nptDelete = nptCategories.filter(x=>x.nptId !== nptId)
    setNptCategories = (nptDelete);
  }

  //Edit Category
  const NptHandleEdit = (nptCategory)=>{

    setNptCategoryEdit(nptCategory)
    setNptCategoryIsForm(true);
  }
  return (
    <div className='container border m-3'>
      <h2>Nguyen Phong Tan - Call API</h2>
      <h2>Tanami</h2>
      <hr/>
      <NptCategoryList renderNptCategories = {nptCategories}
          onAddNew={nptHandleAddNew}
          onNptDelete={nptHandleDelete}
          onNptEdit={NptHandleEdit}/>
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
