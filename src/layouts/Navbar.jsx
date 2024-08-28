import { useNavigate } from 'react-router-dom';
const Navbar = () => {

  const navigateTo = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigateTo('/');
  };
  return (
    <div>
      <nav className="navbar">
				<a href="#" className="sidebar-toggler">
					<i data-feather="menu"></i>
				</a>
				<div className="navbar-content">
					<form className="search-form">
						<div className="input-group">
              <div className="input-group-text">
                <i data-feather="search"></i>
              </div>
							<input type="text" className="form-control" id="navbarForm" placeholder="Search here..."/>
						</div>
					</form>
					<ul className="navbar-nav">
						
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="notificationDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<i data-feather="bell"></i>
								<div className="indicator">
									<div className="circle"></div>
								</div>
							</a>
							<div className="dropdown-menu p-0" aria-labelledby="notificationDropdown">
								<div className="px-3 py-2 d-flex align-items-center justify-content-between border-bottom">
									<p>6 New Notifications</p>
									<a href="javascript:;" className="text-muted">Clear all</a>
								</div>
                <div className="p-1">
                  <a href="javascript:;" className="dropdown-item d-flex align-items-center py-2">
                    <div className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
											<i className="icon-sm text-white" data-feather="gift"></i>
                    </div>
                    <div className="flex-grow-1 me-2">
											<p>New Order Recieved</p>
											<p className="tx-12 text-muted">30 min ago</p>
                    </div>	
                  </a>
                  <a href="javascript:;" className="dropdown-item d-flex align-items-center py-2">
                    <div className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
											<i className="icon-sm text-white" data-feather="alert-circle"></i>
                    </div>
                    <div className="flex-grow-1 me-2">
											<p>Server Limit Reached!</p>
											<p className="tx-12 text-muted">1 hrs ago</p>
                    </div>	
                  </a>
                  <a href="javascript:;" className="dropdown-item d-flex align-items-center py-2">
                    <div className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                      <img className="wd-30 ht-30 rounded-circle" src="https://via.placeholder.com/30x30" alt="userr"/>
                    </div>
                    <div className="flex-grow-1 me-2">
											<p>New customer registered</p>
											<p className="tx-12 text-muted">2 sec ago</p>
                    </div>	
                  </a>
                  <a href="javascript:;" className="dropdown-item d-flex align-items-center py-2">
                    <div className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
											<i className="icon-sm text-white" data-feather="layers"></i>
                    </div>
                    <div className="flex-grow-1 me-2">
											<p>Apps are ready for update</p>
											<p className="tx-12 text-muted">5 hrs ago</p>
                    </div>	
                  </a>
                  <a href="javascript:;" className="dropdown-item d-flex align-items-center py-2">
                    <div className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
											<i className="icon-sm text-white" data-feather="download"></i>
                    </div>
                    <div className="flex-grow-1 me-2">
											<p>Download completed</p>
											<p className="tx-12 text-muted">6 hrs ago</p>
                    </div>	
                  </a>
                </div>
								<div className="px-3 py-2 d-flex align-items-center justify-content-center border-top">
									<a href="javascript:;">View all</a>
								</div>
							</div>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="profileDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<img className="wd-30 ht-30 rounded-circle" src="https://via.placeholder.com/30x30" alt="profile"/>
							</a>
							<div className="dropdown-menu p-0" aria-labelledby="profileDropdown">
								<div className="d-flex flex-column align-items-center border-bottom px-5 py-3">
									<div className="mb-3">
										<img className="wd-80 ht-80 rounded-circle" src="https://via.placeholder.com/80x80" alt=""/>
									</div>
									<div className="text-center">
										<p className="tx-16 fw-bolder"></p>
										<p className="tx-12 text-muted">amiahburton@gmail.com</p>
									</div>
								</div>
                <ul className="list-unstyled p-1">
                  <li className="dropdown-item py-2">
                    <a href="pages/general/profile.html" className="text-body ms-0">
                      <i className="me-2 icon-md" data-feather="user"></i>
                      <span>Profile</span>
                    </a>
                  </li>
                  <li className="dropdown-item py-2">
                    <a href="javascript:;" className="text-body ms-0">
                      <i className="me-2 icon-md" data-feather="edit"></i>
                      <span>Edit Profile</span>
                    </a>
                  </li>
                  <li className="dropdown-item py-2">
                    <a href="javascript:;" className="text-body ms-0">
                      <i className="me-2 icon-md" data-feather="repeat"></i>
                      <span>Switch User</span>
                    </a>
                  </li>
                  <li className="dropdown-item py-2">
                    <a type="button" onClick={handleLogout} className="text-body ms-0">
                      <i className="me-2 icon-md" data-feather="log-out"></i>
                      <span>Log Out</span>
                    </a>
                  </li>
                </ul>
							</div>
						</li>
					</ul>
				</div>
		</nav>
    </div>
  )
}

export default Navbar