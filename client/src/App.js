import logo from './logo.svg';
import Navbar from './components/Navbar';
import SiderLeft from './components/SiderLeft';
import { Layout } from 'antd';
import "antd/dist/antd.css";
import './App.css';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';

function App() {
  return (
    <div className="App">
      <Layout style={{background:"none"}}>
        <Header className="App-header">
          <Navbar />
        </Header>
        <Layout>

            <SiderLeft></SiderLeft>
       
          <Content>Noi dung o giua</Content>
       
        </Layout>
        <Footer></Footer>     
      </Layout>
    </div>
  );
}

export default App;
