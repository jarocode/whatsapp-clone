import React from 'react';
import './App.css';
import useSideBarStyles from './jss/SidebarStyle'
import { 
  Layout,
  Menu, 
  Avatar, 
  Col, 
  Row, 
  Input, 
  Typography,
 } from 'antd';

 import dottedMenu from './assets/icons/svg/dottedMenu.svg';
 import chatIcon from './assets/icons/svg/chat.svg';
 import status from './assets/icons/svg/status.svg';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  SearchOutlined,
  MoreOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import whatsappBg  from './assets/images/whatsapp-chat-bg.png'

const { Header, Content, Footer, Sider } = Layout;
const { Title, Text,  Paragraph } = Typography;
const { SubMenu } = Menu;



const App = () => {
  const {menuIcon, menuIcon2} = useSideBarStyles();
  return(
  <>
    <Layout>
      <Sider style={{height: '100vh', background: '#ededed', borderRight: '1px solid #dfdfdf'}}>
        <Menu  mode="horizontal" defaultSelectedKeys={['2']} style={{padding: '.6rem .6rem .6rem .6rem', background: '#ededed'}}>
          <Avatar size="large" icon={<UserOutlined />} />
          <div style={{float: 'right', display:'flex', flexDirection: 'row'}}>
            <Menu.Item key="1" style={{marginLeft: '2rem'}}><img src={status} alt="status" /></Menu.Item>
            <Menu.Item key="2" style={{marginLeft: '2rem'}}><img src={chatIcon} alt="chat" /></Menu.Item>
            <Menu.Item key="3" style={{margin: '0 1rem 0 2rem'}}><img src={dottedMenu} height={'22px'} width={'22px'}/></Menu.Item>
          </div>
        </Menu>
        <Row>
            <Col span={24} style={{padding: '.5rem .7rem .5rem .7rem', background: '#f6f6f6'}}>
              <Input size="large" placeholder="large size" prefix={<SearchOutlined />} style={{borderRadius: '1.5rem', border: 'none'}} />
            </Col>
            <Col span={24} style= {{background: '#fff', width: '10rem', height: '100vh'}}>
              <Row style={{padding:'.5rem .7rem .5rem .7rem', }} >
                  <Col span={4}>
                    <Avatar size="large" icon={<UserOutlined />} style={{display: 'block', height: '3rem', width: '3rem'}}/>
                  </Col>
                  <Col span={20} style={{borderBottom: '1px solid #efefef', paddingBottom: '.8rem', marginTop: '1.2rem'}}>
                    <Row>
                      <Col span={20}>
                        <Title level={4} style={{margin: '-1.2rem 0 0 0', fontWeight: '400'}}>VESSELS IN PRAISE</Title>
                      </Col>
                      <Col span={4} style={{marginTop: '-1rem'}}>
                        <Text >11:41</Text>
                      </Col>
                  </Row>
                    <Row >
                      <Text>Uchman</Text> : <Text>how far my Gee</Text>
                    </Row>
                  </Col>
              </Row>
            </Col>
        </Row>
        
      </Sider>
      <Layout style={{width: '60%'}}>
        <Header style={{background: '#ededed', position: 'fixed', width: '100%', zIndex: '40', padding: '0 1rem' }}>
          <Row>
            
            <Col span={4}>
              <Row>
                  <Text style={{marginRight: '1rem'}}> 
                    <Avatar size="large" icon={<UserOutlined />} /> 
                  </Text>
                  <Text style={{fontSize: '1.2em'}}>Jaroslaw</Text>
              </Row>
            </Col>
            
            <Col span={4} offset={10}>
                  <Text><SearchOutlined style={{fontSize: '1.4em', color: '#8f8f8f', margin: '1rem 0 0 5.3rem'}} /></Text>
                  <Text ><img src={dottedMenu} height={'22px'} width={'22px'} className={menuIcon}/></Text>
            </Col>
          
          </Row>
        </Header>
        <Content style={{position: 'fixed', height: '100%', width: '100%'}}>Content</Content>
        <Footer style={{position: 'fixed', bottom: '0', width: '100%'}}>Footer</Footer>
      </Layout>
    </Layout>
  </>
)};

export default App;