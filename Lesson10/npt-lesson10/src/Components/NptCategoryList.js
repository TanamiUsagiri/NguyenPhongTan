import React from 'react'

export default function NptCategoryList({renderNptCategories, onAddNew}) {
  console.log("renderNptCategories: ", renderNptCategories);
  let nptCategoryElement = renderNptCategories.map((nptCategory,index)=>{
    return (
      <tr key={index}>
        <th>{index+1}</th>
        <td>{nptCategory.nptId}</td>
        <td>{nptCategory.nptCategoryName}</td>
        <td>{nptCategory.nptCategoryStatus===true?"Hien thi":"Tam khoa"}</td>
      </tr>
    )
  })

  const nptHandleAdd = () =>{
    onAddNew(true);
  }
  return (
    <div>
      <h2>Danh sach san pham</h2>
      <table className='table table-bordered'>
        <thead>
            <tr>
                <th>#</th>
                <th>Ma loai</th>
                <th>Ten hang</th>
                <th>Trang thai</th>
                <th>Chuc nang</th>
            </tr>
        </thead>
        <tbody>
            {nptCategoryElement}
        </tbody>
      </table>
      <button className='btn btn-primary' onClick={nptHandleAdd}>Them moi</button>
    </div>
  )
}
