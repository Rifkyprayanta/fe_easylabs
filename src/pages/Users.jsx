import { useState, useEffect } from "react"
import Content from "../layouts/Content"
import Footer from "../layouts/Footer"
import Navbar from "../layouts/Navbar"
import NavbarSetting from "../layouts/NavbarSetting"
import SidebarBody from "../layouts/SidebarBody"
import SidebarHeader from "../layouts/SidebarHeader"
import axios from 'axios';

const Registrasi = () => {
  const breadcrumbs = 'Data Users';
  const tableName = 'Data Table Users'

  const [users, getUsers] = useState([]);

  const token = localStorage.getItem("token");

  const getUsersData = async () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
    const response = await axios.get('http://103.196.153.28/api/pegawai');
    getUsers(response.data);
  }

  

  useEffect(() => {

    getUsersData();

}, []);
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
// axios.get('http://103.196.153.28/api/pegawai')
// .then((response) => 
// console.log(response.data))
// .catch((err) => console.log(err))

// console.log(getUsers);

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
                <Content data={breadcrumbs}></Content>
                <div className="col-md-12 grid-margin stretch-card">
                    <div className="card">
                    <div className="card-body">
                        <h6 className="card-title">{ tableName }</h6>
                        <table className="table table-bordered">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        
                                        <th scope="col">Nip Pegawai</th>
                                        <th scope="col">Nama Pegawai</th>
                                        <th scope="col">Jabatan</th>
                                        <th scope="col">Role Akses</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.length > 0
                                            ?   users.map((user, index) => (
                                                    <tr key={ index }>
                                                        <td>{ user.nip_pegawai }</td>
                                                        <td>{ user.nama_pegawai }</td>
                                                        <td>{ user.jabatan }</td>
                                                        <td>{ user.role_akses }</td>
                                                    </tr>
                                                ))

                                            :   <tr>
                                                    <td colSpan="4" className="text-center">
                                                        <div className="alert alert-danger mb-0">
                                                            Data Belum Tersedia!
                                                        </div>
                                                    </td>
                                                </tr>
                                    }
                                </tbody>
                            </table>
                    </div>
                    </div>
		        </div>
            </div>
            <Footer></Footer>
        </div>
        </div>
    </div>
  )
}

export default Registrasi