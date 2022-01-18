import React, { Component, useState } from 'react';
import { Layout, Menu, Breadcrumb, Switch } from 'antd';
import { addEmitHelper } from 'typescript';
import { Sdefine, Subm } from '.';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants';

import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  SearchOutlined,
  EyeOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { BrowserRouter as Router, Link, Route, Navigator, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { render } from 'react-dom';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Dashboard1() {
  return <div>Dashboard</div>;
}
function Meseros() {
  return <div>Meseros</div>;

}


// class RouterApp extends Component {
//   state = {
//     collapsed: false
//   };



export const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const collapseHandler = () => {
    setCollapsed(!collapsed);
  };
  const navigate = useNavigate();

  function logOut() {
    window.localStorage.clear();
    navigate(ROUTES.login);
  };

  return (

    <Layout style={{ minHeight: '20vh' }} className='no-printme'>
      <Sider collapsible collapsed={collapsed} onCollapse={collapseHandler}>
        <div className="logo" />


        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {/* <Button variant="btn btn-success" onClick={() => history.push('/Products')}>Click button to view products</Button> */}

          <Menu.Item key="1" icon={<DesktopOutlined />}>
            < Link to="/dashboard" > Home</Link>
            <Link to="/Dashboard"> </Link>
          </Menu.Item>

          <Menu.Item key="2" icon={<PieChartOutlined />} >
            <Link to="/subm">Enter </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<PieChartOutlined />} >
            <Link to="/Sdefine">Define </Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<FileOutlined />} title="Report">
            <Menu.Item key="4">   <Link to="/printSch">Print Schedule </Link></Menu.Item>
            <Menu.Item key="5">
              <Link to="/printChq">Print Cheque </Link></Menu.Item>

          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="About">
            <Menu.Item key="6">Help</Menu.Item>
            <Menu.Item key="8">About</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<UserOutlined />}>
            Users
          </Menu.Item>
          <Menu.Item key="10" icon={<UserOutlined />} onClick={logOut}>
            LogOut
          </Menu.Item>
        </Menu>
      </Sider >
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 0px' }}>

          <div className="site-layout-background" style={{ padding: 0, minHeight: 0, margin: '16px 0' }}>
            <div>

              {< Sdefine />}
            </div>


          </div>
        </Content>
        {<Footer style={{ textAlign: 'center' }}>V 1.1, By IT Directorate </Footer>}
      </Layout >
    </Layout >

  );

};


