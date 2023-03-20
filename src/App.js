import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';


import AliReactTable from './ali-react-table'
import AntdTable from './andt-table'
import AntdTree from './andt-tree'
import AntvS2 from './antv-s2'
import AntvCkb from './antv-ava-ckb'
import CBK from './antv-ava-ckb'

import 'antd/dist/reset.css';
import './App.css';
import './index.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const { Header, Content, Sider } = Layout;

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});
function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div className='content-box'>
      <Layout className='layout-my'>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
        </Header>
        <Layout>
          <Sider
            width={200}
            style={{
              background: colorBgContainer,
            }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
                borderRight: 0,
              }}
              items={items2}
            />
          </Sider>
          <Layout
            style={{
              padding: '0 24px 24px',
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
                overflow: 'auto'
              }}
            >
              <CBK></CBK>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
