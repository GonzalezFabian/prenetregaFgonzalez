import logo from './logo.svg';
import './App.css';
import  Item  from './components/';
import SegundoCompo from './components/SegundoCompo';

function App() {
  return (
    <div className="App"> 
     <Item />

     <SegundoCompo/>
     
     <Item />
     
     <SegundoCompo/>

     <Item />
     <SegundoCompo/>
     

    </div>
  );
}

export default App;
