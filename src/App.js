import React from 'react';
import { Layout, Button } from 'antd';
import 'antd/dist/reset.css'; // 引入 Ant Design 样式
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header style={{ color: 'white', textAlign: 'center', fontSize: '20px' }}>
        欢迎来到我的 React 应用！
      </Header>
      <Content style={{ padding: '50px', textAlign: 'center' }}>
        <h1>使用 Ant Design 构建你的界面</h1>
        <Button type="primary" style={{ marginTop: '20px' }}>
          点击我
        </Button>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        ©2025 Created by Your Name
      </Footer>
    </Layout>
  );
}

export default App;