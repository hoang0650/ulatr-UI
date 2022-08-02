import Home from './components/Home';
import { Layout } from 'antd';
import "antd/dist/antd.css";
import './App.css';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Navbar from './components/Navbar';
const {Header,Content,Sider} = Layout;
// import Sider from 'antd/lib/layout/Sider';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Route path='/' exact component={Home}  />
        <Route path='/n' exact component={Navbar} />
        </BrowserRouter>
    </div>
  );
}

export default App;
