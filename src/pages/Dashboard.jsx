import Chart from "../layouts/Chart"
import Content from "../layouts/Content"
import Footer from "../layouts/Footer"
import Navbar from "../layouts/Navbar"
import NavbarSetting from "../layouts/NavbarSetting"
import SidebarBody from "../layouts/SidebarBody"
import SidebarHeader from "../layouts/SidebarHeader"

const Dashboard = () => {
  return (
    <div>
    <div className='main-wrapper'>
        <nav className="sidebar">
          <SidebarHeader></SidebarHeader>
          <SidebarBody></SidebarBody>
        </nav>
        <nav className="settings-sidebar">
            <NavbarSetting></NavbarSetting>
        </nav>
        <div className="page-wrapper">
            <Navbar></Navbar>
            <div className="page-content">
                <Content></Content>
                <Chart></Chart>
                <Footer></Footer>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Dashboard