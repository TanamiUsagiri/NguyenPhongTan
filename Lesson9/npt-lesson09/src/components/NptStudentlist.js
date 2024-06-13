import React from 'react'

export default function NptStudentList(renderNptStudentList) {
    console.log("Data:" ,renderNptStudentList)
    let nptElement = renderNptStudentList.map((nptStudent, index) =>{
        return (
            <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>{nptStudent.nptId}</td>
              <td>{nptStudent.nptName}</td>
              <td>{nptStudent.Age}</td>
              <td>{nptStudent.Phone}</td>
              <td>{nptStudent.Email}</td>
              <td>{nptStudent.Status}</td>
              <td>Edit / Delete</td>
            </tr>
        )
    })
    }
  return (
    <div>
      <h2>Danh sach sinh vien</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Ma sinh vien</th>
              <th scope="col">Ho ten</th>
              <th scope="col">Tuoi</th>
              <th scope="col">Dien thoai</th>
              <th scope="col">Email</th>
              <th scope="col">Trang thai</th>
              <th scope="col">Chuc nang</th>
            </tr>
          </thead>
          <tbody>
            {Element}
          </tbody>
        </table>
    </div>
  );

