import React from "react";
function Navbar() {
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
              <a className="nav-link" href="/c">
                Xem lịch biểu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Xem hồ sơ</a>
            </li>
          </ul>
          <form className="d-flex rightheader">
            <a className="bi bi-gear me-4" href="/"></a>
            <a className="bi bi-chat me-4" href="/"></a>
            <a className="bi bi-bell me-4" href="/"></a>
            <div className="dropdown">
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Xin chào,
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
export default Navbar;
