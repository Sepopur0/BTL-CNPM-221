import React, { useState } from 'react'
import './assignRoute.css'

function Modal({ setOpenModal }) {
    return (
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title">
            <h2>Tuyến đường đã được tạo</h2>
          </div>
          <div className="body">
          <iframe src="https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d23035.51670228966!2d106.78058359143407!3d10.863804964980853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e0!4m5!1s0x3175276398969f7b%3A0x9672b7efd0893fc4!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBOw7RuZyBMw6JtIFRwLiBI4buTIENow60gTWluaA!3m2!1d10.8712764!2d106.7917617!4m5!1s0x3174d89aad780e49%3A0x54542761d4c22175!2zS8O9IHTDumMgeMOhIEtodSBCIMSQ4bqhaSBo4buNYyBRdeG7kWMgZ2lhIFRQLkhDTQ!3m2!1d10.882043099999999!2d106.78257889999999!4m5!1s0x3174d8a5f4e477e9%3A0x29d5aeb365cee20b!2zS8O9IHTDumMgeMOhIEtodSBBIMSQSCBRdeG7kWMgZ2lhIFRQLiBI4buTIENow60gTWluaA!3m2!1d10.8782483!2d106.806276!4m5!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!3m2!1d10.8700089!2d106.8030541!4m5!1s0x31752763f23816ab%3A0x282f711441b6916f!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgcGjhuqFtIEvhu7kgdGh14bqtdCBUcC4gSOG7kyBDaMOtIE1pbmg!3m2!1d10.8507214!2d106.7719223!4m5!1s0x3175276398969f7b%3A0x9672b7efd0893fc4!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBOw7RuZyBMw6JtIFRwLiBI4buTIENow60gTWluaA!3m2!1d10.8712764!2d106.7917617!5e0!3m2!1svi!2s!4v1671088118028!5m2!1svi!2s" width="550" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="footer">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button
                 onClick={() => {
                    setOpenModal(false);
                  }}
            >
                Xác nhận</button>
          </div>
        </div>
      </div>
    );
}

function AssignRoute() {
    const collectorRoute = [
        {
            name: "Đoàn Hoàng",
            msnv: "2532365",
            route: ""
        },
    
        {
            name: "Chử Kim Khánh",
            msnv: "2043765",
            route: ""
        },

        {
            name: "Kiều Mỹ Lang",
            msnv: "2324214",
            route: ""
        },

        {
            name: "Gia Thế Mạnh",
            msnv: "4323776",
            route: ""
        },
        
      ];
    const [modalOpen, setModalOpen] = useState(false);
  return (
    <div class="container-fluid mainside">
        <div class="row mainside">
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
            <div class="col-1 sidebar">
                <hr/>
                <nav class="nav flex-column">
                <a class="nav-link" href="#">Quản lý công việc</a>
                </nav>
            </div>
            <div className="col-11">
                <div className="row">
                <div className="col-1 dateshift">
                    <p>1 Tháng 11 2022</p>
                    <p>Ca sáng</p>
                </div>
                <div className="col-1">
                    <a className="bi bi-arrow-left-square nextprev" href="#"></a>
                    <a className="bi bi-arrow-right-square nextprev" href="#"></a>
                </div>
                <div className="col-10 pt-4">
                    <ul className="nav nav-tabs justify-content-center tasktab">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Phân công nhân viên</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Phân công nhân viên</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Phân công nhân viên</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active">Phân công tuyến đường</a>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="row mx-auto routetable">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <table>
                        <tbody>
                        <tr>
                            <th>Họ và tên</th>
                            <th>MSNV</th>
                            <th>Công việc</th>
                            <th>Tuyến đường</th>
                        </tr>
                            {
                            collectorRoute.map((post) => (
                                <tr>
                                    <td>{post.name}</td>
                                    <td>{post.msnv}</td>
                                    <td>Thu gom</td>
                                    <td><button className="bi bi-geo-alt-fill btn btn-outline-success" onClick={() => {setModalOpen(true);}}></button></td>
                                </tr>
                            ))
                            }
                        </tbody>
                        </table>
                    </div>
                    <div className="col-3"></div>
                </div>
                <div class="d-flex justify-content-center">
                    <button class="btn btn-secondary">Xác nhận</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AssignRoute