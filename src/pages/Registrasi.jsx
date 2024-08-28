import { useState, useEffect } from "react"
import Content from "../layouts/Content"
import Footer from "../layouts/Footer"
import Navbar from "../layouts/Navbar"
import NavbarSetting from "../layouts/NavbarSetting"
import SidebarBody from "../layouts/SidebarBody"
import SidebarHeader from "../layouts/SidebarHeader"
import axios from 'axios';
import { Link } from "react-router-dom"

const Registrasi = () => {
  const breadcrumbs = 'Data Registrasi Pasien';
  const tableName = 'Data Pasien';

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
                    <div className="col-md-11">
                        <Content data={breadcrumbs}></Content>
                    </div>
                    <div className="col-md-1">
                    <Link to="/registrasiPasien" className="btn btn-md btn-success rounded border-0 mb-3">Tambah Pasien</Link>
                    </div>
                </div>
                

                <div className="col-md-12 grid-margin stretch-card">
                    
                    <div className="card">
                    <div className="card-body">
                        <h6 className="card-title">{ tableName }</h6>
                        <table className="table table-bordered">
                                <thead className="bg-white text-black">
                                    <tr>
                                        
                                        <th scope="col">NIK</th>
                                        <th scope="col">Nama Pasien</th>
                                        <th scope="col">Tempat Lahir</th>
                                        <th scope="col">Tanggal Lahir</th>
                                        <th scope="col">Jenis Kelamin</th>
                                        <th scope="col">Usia</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        pasien.length > 0
                                            ?   pasien.map((pas, index) => (
                                                    <tr key={ index }>
                                                        <td>{ pas.nik }</td>
                                                        <td>{ pas.nama }</td>
                                                        <td>{ pas.tempat_lahir }</td>
                                                        <td>{ pas.tanggal_lahir }</td>
                                                        <td>{ pas.jenis_kelamin }</td>
                                                        <td>{ pas.usia }</td>
                                                    </tr>
                                                ))

                                            :   <tr>
                                                    <td colSpan="6" className="text-center">
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