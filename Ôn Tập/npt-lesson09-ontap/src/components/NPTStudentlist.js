import React from 'react'

export default function NPTStudentList({ renderNPTStudentList }) {
    console.log("Data:", renderNPTStudentList);
    let nptElement = renderNPTStudentList.map((nptStudent, index) => {
        return (
            <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{nptStudent.UserName}</td>
                <td>{nptStudent.PassWord}</td>
                <td>{nptStudent.Avatar}</td>
                <td>{nptStudent.Phone}</td>
                <td>{nptStudent.nptid}</td>
            </tr>
        )
    });
    return (
        <div className='Row'>
            <h2>Danh Sách Sinh Viên</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">UserName</th>
                        <th scope="col">PassWord</th>
                        <th scope="col">Avatar</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Id</th>
                        <th scope="col">Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    {nptElement}
                </tbody>
            </table>

        </div>
    )
}