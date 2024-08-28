
const NavbarSetting = () => {
  return (
    <div>
          <div className="sidebar-body">
        <a href="#" className="settings-sidebar-toggler">
          <i data-feather="settings"></i>
        </a>
        <h6 className="text-muted mb-2">Sidebar:</h6>
        <div className="mb-3 pb-3 border-bottom">
          <div className="form-check form-check-inline">
            <input type="radio" className="form-check-input" name="sidebarThemeSettings" id="sidebarLight" value="sidebar-light" checked/>
            <label className="form-check-label" htmlFor="sidebarLight">
              Light
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" className="form-check-input" name="sidebarThemeSettings" id="sidebarDark" value="sidebar-dark"/>
            <label className="form-check-label" htmlFor="sidebarDark">
              Dark
            </label>
          </div>
        </div>
        <div className="theme-wrapper">
          <h6 className="text-muted mb-2">Light Theme:</h6>
          <a className="theme-item active" href="../demo1/dashboard.html">
            <img src="../assets/images/screenshots/light.jpg" alt="light theme"/>
          </a>
          <h6 className="text-muted mb-2">Dark Theme:</h6>
          <a className="theme-item" href="../demo2/dashboard.html">
            <img src="../assets/images/screenshots/dark.jpg" alt="light theme"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavbarSetting