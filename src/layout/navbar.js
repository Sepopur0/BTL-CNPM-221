import React from "react";
function Navbar() {
    return(
        <nav className="navbar navbar-expand-md px-4 headBar">
         <div className="container-fluid">
             <a className="navbar-brand fw-bolder" href="#">
                 <img src="https://i.postimg.cc/c4s956LB/uwc-high-resolution-logo-color-on-transparent-background.png" alt="logo" width="52" height="48"/>
                 UWC 2.0
             </a> 
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarCollapse">
                 <ul className="navbar-nav me-auto mb-2 mb-md-0">
                     <li className="nav-item">
                     <a className="nav-link active" aria-current="page" href="/">Trang chủ</a>
                     </li>
                     <li className="nav-item">
                     <a className="nav-link" href="/c">Xem lịch biểu</a>
                     </li>
                     <li className="nav-item">
                     <a className="nav-link disabled">Xem hồ sơ</a>
                     </li>
                 </ul>
                 <form className="d-flex rightheader">
                     <a className="bi bi-gear me-4" href=""></a>
                     <a className="bi bi-chat me-4" href=""></a>
                     <a className="bi bi-bell me-4" href=""></a>
                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                     <button className="btn btn-outline-success" type="submit">Search</button>
                 </form>
             </div>
         </div>
     </nav>
    );
}; export default Navbar;