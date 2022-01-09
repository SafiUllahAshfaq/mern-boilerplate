import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { addEmitHelper } from 'typescript';
import { Sdefine } from '.';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  SearchOutlined,
  EyeOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const collapseHandler = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
    <Sider collapsible collapsed={collapsed} onCollapse={collapseHandler}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<DesktopOutlined />}>
        <Link to="/dashboard">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<PieChartOutlined />} >
        <Link to="/subm">Enter </Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<PieChartOutlined />} >
        <Link to="/Sdefine">Define </Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<FileOutlined />} title="Report">
          <Menu.Item key="4">Print Schedule</Menu.Item>
          <Menu.Item key="5">Print Cheque</Menu.Item>
          
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="About">
          <Menu.Item key="6">Help</Menu.Item>
          <Menu.Item key="8">About</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<UserOutlined />}>
          Users
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout">
      {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
      <Content style={{ margin: '0 16px' }}>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
           <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item> 
        </Breadcrumb> */}
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 ,margin: '16px 0' }}>
          <Sdefine/>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>V 1.1, By IT Directorate </Footer>
    </Layout>
  </Layout>
);

};
