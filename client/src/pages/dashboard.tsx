
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants';


import { Menu } from 'antd';
import { UserAddOutlined, PaperClipOutlined, PicCenterOutlined, LogoutOutlined } from '@ant-design/icons';
import { Footer } from 'antd/lib/layout/layout';

const { SubMenu } = Menu;


export const Dashboard = () => {

  const navigate = useNavigate();
  function logOut() {
    window.localStorage.clear();
    navigate(ROUTES.login);
    window.location.reload();
  };
  const pages = [{ title: 'Schedule', url: ROUTES.subm }, { title: 'Define', url: ROUTES.sdefine }, { title: 'Print Schedule', url: ROUTES.printSch }];
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (

    <>
      {/* <Menu className='no-printme' mode="horizontal" theme='dark' style={{ background: 'linear-gradient(-60deg, #055c2f 20%, #1a283d 20% ) ' }} > */}
      <Menu className='no-printme' mode="horizontal" theme='dark' style={{ background: 'linear-gradient(-60deg, #048252 20%, #1a283d 20% ) ' }} >
        {/* <Menu mode="horizontal" theme='dark' style={{ background: 'linear-gradient(-70deg, #fa7c30 30%, rgba(10, 34, 0, 0) 30%)' }} > */}
        <SubMenu key="sub1" icon={<PicCenterOutlined />} title="Prepare"  >

          <Menu.Item key="1"><Link to="/Sdefine"  >Define </Link></Menu.Item>
          <Menu.Item key="2"><Link to="/subm">Schedule </Link></Menu.Item>

        </SubMenu>
        <SubMenu key="sub2" icon={<PaperClipOutlined />} title="Print">
          <Menu.Item key="5"><Link to="/printSch"> Schedule </Link></Menu.Item>
          <Menu.Item key="6"><Link to="/printChq">Cheque </Link></Menu.Item>
          <SubMenu key="sub3" title="Manage">
            <Menu.Item key="7"><Link to="/updateSchedule">Cancel Cheque </Link></Menu.Item>
            <Menu.Item key="8"><Link to="/deleteCheque">Delete Cheque </Link></Menu.Item>

          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" icon={<UserAddOutlined />} title="Manage">
          <Menu.Item key="9">Create User</Menu.Item>
          <Menu.Item key="12">Request</Menu.Item>
        </SubMenu>

        <SubMenu key="sub5" onTitleClick={logOut} icon={<LogoutOutlined />} title="Logout" >

        </SubMenu>
      </Menu>
      {/* <Footer style={{ textAlign: 'center' }}>V 1.1, By IT Directorate </Footer> */}

    </>

    // <AppBar position="static">
    //   <Container maxWidth="xl">
    //     <Toolbar disableGutters>
    //       <Typography
    //         variant="h6"
    //         noWrap
    //         component="div"
    //         sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
    //       >
    //         PBM
    //       </Typography>

    //       <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
    //         <IconButton
    //           size="large"
    //           aria-label="account of current user"
    //           aria-controls="menu-appbar"
    //           aria-haspopup="true"
    //           onClick={handleOpenNavMenu}
    //           color="inherit"
    //         >
    //           <MenuIcon />
    //         </IconButton>
    //         <Menu
    //           id="menu-appbar"
    //           anchorEl={anchorElNav}
    //           anchorOrigin={{
    //             vertical: 'bottom',
    //             horizontal: 'left',
    //           }}
    //           keepMounted
    //           transformOrigin={{
    //             vertical: 'top',
    //             horizontal: 'left',
    //           }}
    //           open={Boolean(anchorElNav)}
    //           onClose={handleCloseNavMenu}
    //           sx={{
    //             display: { xs: 'block', md: 'none' },
    //           }}
    //         >
    //           <MenuItem key={page.title} onClick={handleCloseNavMenu}>
    //             <Link to={page.url}>  <Typography textAlign="center">  {page.title}  </Typography> </Link>
    //           </MenuItem>

    //           {/* {pages.map((page) => (
    //             <MenuItem key={page.title} onClick={handleCloseNavMenu}    >

    //               <Link to={page.url}>  <Typography textAlign="center">  {page.title}  </Typography> </Link>
    //             </MenuItem>
    //           ))} */}
    //         </Menu>
    //       </Box>
    //       <Typography
    //         variant="h6"
    //         noWrap
    //         component="div"
    //         sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
    //       >
    //         PBM
    //       </Typography>
    //       <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
    //         {pages.map((page) => (
    //           <Button
    //             key={page.title}
    //             onClick={handleCloseNavMenu}
    //             sx={{ my: 2, color: 'white', display: 'block' }}
    //           >
    //             <Link to={page.url}>  <Typography textAlign="center">  {page.title}  </Typography> </Link>
    //           </Button>
    //         ))}
    //       </Box>

    //       <Box sx={{ flexGrow: 0 }}>
    //         <Tooltip title="Open settings">
    //           <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
    //             <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />

    //           </IconButton>
    //         </Tooltip>
    //         <Menu
    //           sx={{ mt: '45px' }}
    //           id="menu-appbar"
    //           anchorEl={anchorElUser}
    //           anchorOrigin={{
    //             vertical: 'top',
    //             horizontal: 'right',
    //           }}
    //           keepMounted
    //           transformOrigin={{
    //             vertical: 'top',
    //             horizontal: 'right',
    //           }}
    //           open={Boolean(anchorElUser)}
    //           onClose={handleCloseUserMenu}
    //         >
    //           {settings.map((setting) => (
    //             <MenuItem key={setting} onClick={handleCloseNavMenu}>
    //               <Typography textAlign="center">{setting}</Typography>
    //             </MenuItem>
    //           ))}
    //         </Menu>
    //       </Box>
    //     </Toolbar>
    //   </Container>
    // </AppBar>
  );

};

