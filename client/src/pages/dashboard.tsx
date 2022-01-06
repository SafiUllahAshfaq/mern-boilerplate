import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  SearchOutlined,
  EyeOutlined,
} from '@ant-design/icons';
import { addEmitHelper } from 'typescript';
import { Sdefine } from '.';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const collapseHandler = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={collapseHandler} className='pt-10'>
        <div className='logo' />
        <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline' className='mt-10'>
          {/* <Menu.Item key='1' icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item> */}
          
           
            
          <Menu.Item key='1' icon={<DesktopOutlined />}>
            Home
          </Menu.Item>

          <Menu.Item key='2' icon={<SearchOutlined />}>
            Serach
          </Menu.Item>
          <SubMenu key='sub2' icon={<TeamOutlined />} title='CPA'>
            <Menu.Item key='6'>Enter</Menu.Item>
            <Menu.Item key='8'>Define
            
            </Menu.Item>
          </SubMenu>
          <SubMenu key='sub1' icon={<UserOutlined />} title='User'>
            <Menu.Item key='3'>Tom</Menu.Item>
            <Menu.Item key='4'>Bill</Menu.Item>
            <Menu.Item key='5'>Alex</Menu.Item>
          </SubMenu>
          
          <SubMenu key='sub3' icon={< EyeOutlined />} title='Help'>
            <Menu.Item key='3'>About</Menu.Item>
            <Menu.Item key='4'>Intro</Menu.Item>
          </SubMenu>  
          
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Header className='site-layout-background' style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
        
        <Sdefine/>
        
          <div
            className='site-layout-background'
            style={{ padding: 24, minHeight: 360 }}
          >
            
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          IT PBM 
        </Footer>
      </Layout>
    </Layout>
  );
};
