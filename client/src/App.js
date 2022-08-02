import logo from './logo.svg';
import Navbar from './components/Navbar';
import SiderLeft from './components/SiderLeft';
import Home from './components/Home';
import { Layout } from 'antd';
import "antd/dist/antd.css";
import './App.css';
const {Header,Content,Sider} = Layout;
// import Sider from 'antd/lib/layout/Sider';

function App() {
  return (
    <div className="App">
      <Layout style={{background:"none"}}>
        <Header className="App-header">
          <Navbar />
        </Header>
        <Layout>
          <Sider className='site-layout-background' style={{background:"none"}}>
            <SiderLeft></SiderLeft>
          </Sider>
          <Content className='site-layout-background'>
            <Home></Home>
          </Content>
          <Sider style={{background:"none"}}> </Sider>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
