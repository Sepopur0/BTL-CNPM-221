import React from "react";

function Footer(){
  return (
    <>
    <div className="footer pt-3 bg-danger" >
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>UWC 2.0</h4>
            <h5 className="list-unstyled">
              <li>Dĩ An, Bình Dương</li>
            </h5>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Liên hệ</h4>
            <ul className="list-unstyled">
              <li>0123 456 789</li>
            </ul>
          </div>
        </div>
        <hr className="p-0 mt-0"/>
        <div className="row">
          <p className="col-sm">
            &copy;2022 UWC 2.0 | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Footer;