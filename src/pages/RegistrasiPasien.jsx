import { useState, useEffect } from "react"
import Content from "../layouts/Content"
import Footer from "../layouts/Footer"
import Navbar from "../layouts/Navbar"
import NavbarSetting from "../layouts/NavbarSetting"
import SidebarBody from "../layouts/SidebarBody"
import SidebarHeader from "../layouts/SidebarHeader"
import axios from 'axios';
import FormRegistrasi from "../components/FormRegistrasi"

const RegistrasiPasien = () => {
  const breadcrumbs = 'Data Registrasi Pasien';
  const tableName = 'Data Regis Pasien';

  const [pasien, getPasien] = useState([]);

  const token = localStorage.getItem("token");

  const getPasienData = async () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
    const response = await axios.get('http://103.196.153.28/api/pasien');
    getPasien(response.data);
  }

  useEffect(() => {

    getPasienData();

    }, []);

  return (
    <div>
        <div className="main-wrapper">
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
                <div className="row">
                    <div className="col-md-12">
                        <Content data={breadcrumbs}></Content>
                        <FormRegistrasi data1={tableName}></FormRegistrasi>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
        </div>
    </div>
  )
}

export default RegistrasiPasien