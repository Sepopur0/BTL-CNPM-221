/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { useNavigate } from "react-router";
import userdata from '../pages/data/user.json';
function Navbar() {
  var state=false;
  const navigate=useNavigate();
  if(localStorage.getItem('user')!==null) state=true;
  if(!state){
  return (
    <nav className="navbar navbar-expand-md px-4 headBar">
      <div className="container-fluid">
        <a className="navbar-brand fw-bolder" href="/">
          <img
            src="https://i.postimg.cc/c4s956LB/uwc-high-resolution-logo-color-on-transparent-background.png"
            alt="logo"
            width="52"
            height="48"
          />
          UWC 2.0
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Trang chủ
              </a>
            </li>
          </ul>
              <a
                className="btn btn-success"
                type="button"
                aria-expanded="false"
                href='/login'
              >
                Đăng nhập
              </a>
        </div>
      </div>
    </nav>
  );
}
  else{
    const userid=parseInt(localStorage.getItem('user'));
    let type='';
    let username='';
    userdata.map((user)=>{if(user['emp_id']===userid){username= user['username']; type=user['type']}});
    if(type==='B'){
      return (
        <nav className="navbar navbar-expand-md px-4 headBar">
          <div className="container-fluid">
            <a className="navbar-brand fw-bolder" href="/">
              <img
                src="https://i.postimg.cc/c4s956LB/uwc-high-resolution-logo-color-on-transparent-background.png"
                alt="logo"
                width="52"
                height="48"
              />
              UWC 2.0
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Trang chủ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/b/calendar">
                    Xem lịch biểu
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Xem hồ sơ</a>
                </li>
              </ul>
              <form className="d-flex rightheader align-items-center">
                <a className="bi bi-gear " href="/"></a>
                <a className="bi bi-chat " href="/"></a>
                <a className="bi bi-bell " href="/"></a>
                <div className="dropdown">
                  <button
                    className="btn btn-success dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {"Xin chào, " +username}
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                    <li>
                      <button className="dropdown-item" onClick={()=>{window.localStorage.clear();navigate('/');}}>
                        Đăng xuất
                      </button>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </nav>
      );
    }
    else if(type==='J'){
      return (
        <nav className="navbar navbar-expand-md px-4 headBar">
          <div className="container-fluid">
            <a className="navbar-brand fw-bolder" href="/">
              <img
                src="https://i.postimg.cc/c4s956LB/uwc-high-resolution-logo-color-on-transparent-background.png"
                alt="logo"
                width="52"
                height="48"
              />
              UWC 2.0
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Trang chủ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/j">
                    Xem lịch biểu
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Xem hồ sơ</a>
                </li>
              </ul>
              <form className="d-flex rightheader align-items-center">
                <a className="bi bi-gear " href="/"></a>
                <a className="bi bi-chat " href="/"></a>
                <a className="bi bi-bell " href="/"></a>
                <div className="dropdown">
                  <button
                    className="btn btn-success dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {"Xin chào, " +username}
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                    <li>
                      <a className="dropdown-item" href="#">
                        Đăng xuất
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </nav>
      );
    }
    else{
      return (
        <nav className="navbar navbar-expand-md px-4 headBar">
          <div className="container-fluid">
            <a className="navbar-brand fw-bolder" href="/">
              <img
                src="https://i.postimg.cc/c4s956LB/uwc-high-resolution-logo-color-on-transparent-background.png"
                alt="logo"
                width="52"
                height="48"
              />
              UWC 2.0
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Trang chủ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/c/calendar">
                    Xem lịch biểu
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Xem hồ sơ</a>
                </li>
              </ul>
              <form className="d-flex rightheader align-items-center">
                <a className="bi bi-gear " href="/"></a>
                <a className="bi bi-chat " href="/"></a>
                <a className="bi bi-bell " href="/"></a>
                <div className="dropdown">
                  <button
                    className="btn btn-success dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {"Xin chào, " +username}
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                    <li>
                      <a className="dropdown-item" href="#">
                        Đăng xuất
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </nav>
      );
    }
  }
}
export default Navbar;
