import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import About from './About';

function App() {
  return (
    <>
    <Navbar title="TextUtils"/>
    <div className='container my-3'>
    <TextForm heading="Enter the text to analyze below"/>
    {/* <About/> */}
    </div>
    </>
  );
}
export default App;
