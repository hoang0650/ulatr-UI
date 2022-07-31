import logo from './logo.svg';
import Navbar from './components/Navbar';
import SiderLeft from './components/SiderLeft';
import { Layout } from 'antd';
import "antd/dist/antd.css";
import './App.css';
import { Content, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>
          <Navbar />
        </Header>
       
          <Sider>
            <SiderLeft></SiderLeft>
          </Sider>
          {/* <Content></Content>
          <Sider></Sider> */}
        
      </Layout>
    </div>
  );
}

export default App;
