import './App.css';
import Func_JSX_NguyenPhongTan from './components/Func_JSX_NguyenPhongTan';
import Class_NguyenPhongTan from './components/Class_NguyenPhongTan';
function App() {
  return (
    <section className='app'>
      <h1>Demo JSX</h1>
      <Func_JSX_NguyenPhongTan/>
      <Func_JSX_NguyenPhongTan fullname="Nguyễn Phong Tân" school="Đại học Nguyễn Trãi"/>
      <Class_NguyenPhongTan/>
      <br/>
      <Class_NguyenPhongTan info="Học ReactJs" time="11"/>
    </section>
  );
}

export default App;
