import { Bookmark, BookOpen, Box, CreditCard, Grid, Home, List, MessageSquare, Tv, Users } from "react-feather"
import { Link } from "react-router-dom"

const SidebarBody = () => {
  return (
    <div>
    <div className="sidebar-body">
    <ul className="nav">
      <li className="nav-item nav-category">Main</li>
      <li className="nav-item">
        <Link to="/dashboard" className="nav-link">
          <Box className="link-icon"></Box>
          <span className="link-title">Dashboard</span>
        </Link>
      </li>
      <li className="nav-item nav-category">Pages</li>
      <li className="nav-item">
        <Link to="/registrasi" className="nav-link">
          <Users className="link-icon"/>
          <span className="link-title">Registrasi</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/tasklisk-order" className="nav-link">
          <List className="link-icon"/>
          <span className="link-title">TaskList Order</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/pembayaran" className="nav-link">
          <CreditCard className="link-icon"/>
          <span className="link-title">Pembayaran</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/plebotomy" className="nav-link">
          <Tv className="link-icon"/>
          <span className="link-title">Plebotomy</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/verifikasi-sample" className="nav-link">
          <Grid className="link-icon"/>
          <span className="link-title">Verifikasi Sample</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/verifikasi-hasil" className="nav-link">
          <MessageSquare className="link-icon"/>
          <span className="link-title">Verifikasi Hasil</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/monitoring-hasil" className="nav-link">
          <Home className="link-icon"/>
          <span className="link-title">Monitoring Hasil</span>
        </Link>
      </li>
      <li className="nav-item nav-category">Laporan</li>
      <li className="nav-item">
        <Link to="/laporan" className="nav-link">
          <BookOpen className="link-icon"/>
          <span className="link-title">Laporan</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/qc" className="nav-link">
          <Bookmark className="link-icon"/>
          <span className="link-title">QC</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/users" className="nav-link">
          <Users className="link-icon"/>
          <span className="link-title">Users Management</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/master" className="nav-link">
          <CreditCard className="link-icon"/>
          <span className="link-title">Data Master</span>
        </Link>
      </li>
      <div className="sidebar-cta">
        <div className="sidebar-cta-content">
            <div className="mb-3 text-sm">
                
            </div>
            <div className="d-grid">
                <a href="upgrade-to-pro.html" className="btn btn-primary">EasyLabs v.1.0</a>
            </div>
        </div>
    </div>
    </ul>
  </div>
    </div>
  )
}

export default SidebarBody