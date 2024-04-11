// import logo from './logo.svg';
import './App.css';
import NPT_ClassComponent from './components/NPT_ClassComponent';
import NPT_Funcion from './components/NPT_Funcion';

function App() {
  // Khai báo biến
  const users = {
    username : "k22cnt3",
    password : "28042004",
    firstname : "Nguyễn Phong Tân",
    lastname : "Tanami"
  }
  // Khai báo đối tượng hàm
  function formatname(user){
    return <h2>Xin chào {user.firstname} {user.lastname}</h2>
  }
  return (
    <div className="App">
      {/* Biểu thức JSX */}
      <div>
        <p> Fullname: {users.firstname} {users.lastname}</p>
        {formatname(users)}
      </div>
    {/* Sử dụng function components */}
      <div>
        <NPT_Funcion/>
        {/* Sử dụng func_comp có props */}
        <NPT_Funcion username="NPT" fullname="Nguyễn Phong Tân" age="20"/>
      </div>

      {/* Sử dụng class components */}
      <div>
        {/* Không sử dụng props */}
        <NPT_ClassComponent/>
        {/* Sử dụng props */}
        <NPT_ClassComponent company="Fit-NTU - K22cnt1" course="ReactJs 1" />
        <NPT_ClassComponent company="Fit-NTU - K22cnt2" course="ReactJs 2" />
        <NPT_ClassComponent company="Fit-NTU - K22cnt3" course="ReactJs 3" />
        <NPT_ClassComponent company="Fit-NTU - K22cnt4" course="ReactJs 4" />
      </div>
      
    </div>
  );
}

export default App;
