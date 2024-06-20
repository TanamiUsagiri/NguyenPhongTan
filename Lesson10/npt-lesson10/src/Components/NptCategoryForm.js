import React, { useEffect, useState } from 'react'
import axios from '../api/NptApi'

export default function NptCategoryForm({onCloseForm, onCategorySubmit, renderNptCategory}) {
    //state
    const [nptId,setNptId] = useState(0);
    const [nptCategoryName,setnptCategoryName] = useState("");
    const [nptCategoryStatus,setnptCategoryStatus] = useState(true);

    useEffect(()=> {
        setNptId(renderNptCategory.nptId);
        setnptCategoryName(renderNptCategory.nptCategoryName);
        setnptCategoryStatus(renderNptCategory.nptCategoryStatus);
    });
    const nptHanldeClose = ()=>{
        onCloseForm(false);
    }
    const nptHandleSubmit = async (event)=>{
        event.preventDefault();
        
        if(nptId==0){
        let nptCategory ={
            nptId:0,
            nptCategoryName:nptCategoryName,
            nptCategoryStatus:nptCategoryStatus
        }
        console.log("nptCategory",nptCategory);
        await axios.post("NptCategory",nptCategory);
        onCategorySubmit(nptCategory);
    }else{
        let nptCategory ={
            nptId:0,
            nptCategoryName:nptCategoryName,
            nptCategoryStatus:nptCategoryStatus
        }
    }
    }
        return (
            <div>
                <form>
                    <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Category Name</span>
                <input type="text" class="form-control"
                    name='nptCategoryName'
                    value={nptCategoryName}
                    onChange={(ev)=>setnptCategoryName(ev.target.value)}
                    placeholder="Category Name" aria-label="Category Name" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">Category Status</span>
                <select className='form-control'
                    name='nptCategoryStatus'
                    value={nptCategoryStatus}>
                    onChange={(ev)=>setnptCategoryStatus(ev.target.value)}
                    <option value={true}>Hien thi</option>
                    <option value={false}>Tam khoa</option>
                </select>
                    </div>
                    <button className='btn btn-success' onClick={nptHandleSubmit}>Ghi lai</button>
                    <button className='btn btn-success' onClick={nptHanldeClose}>Dong Form</button>
                </form>
            </div>
        )
}
