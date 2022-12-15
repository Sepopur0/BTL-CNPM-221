import React from "react";
import { useNavigate } from "react-router-dom";


function AssignTask() {
    const navigate = useNavigate();
    return(
    <section class="d-flex flex-row w-100">
        <div class="w-75 border-end border-top border-2 rounded-top">
            <script src="https://unpkg.com/bootstrap-table@1.21.2/dist/bootstrap-table.min.js"></script>
            <table class="table col-md-7 col-12" id="table"
            url='mock/worker.json'
            toggle='table'
            pagination='true'
            search='true'>
                <thead>
                    <tr>
                        <th>
                            <input class="form-check-input" type="checkbox" value="" id="check" />
                        </th>
                        <th data-field='fullname'>Họ và tên</th>
                        <th data-field='id'>MSVN</th>
                        <th data-field='type'>Chức vụ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            <input class="form-check-input" type="checkbox" value="" id="check" />
                        </th>
                        <td>Nguyễn Văn A</td>
                        <td>20112120</td>
                        <td>lái xe</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <input class="form-check-input" type="checkbox" value="" id="check" />
                        </th>
                        <td>Trần Hoàng B</td>
                        <td>20112126</td>
                        <td>lái xe</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <input class="form-check-input" type="checkbox" value="" id="check" />
                        </th>
                        <td>Lương Mạnh Ninh</td>
                        <td>20113220</td>
                        <td>thu gom</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <input class="form-check-input" type="checkbox" value="" id="check" />
                        </th>
                        <td>Lương Gia Bảo</td>
                        <td>20113260</td>
                        <td>thu gom</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="flex-column justify-content-center">
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="exampleModal">
            Xác nhận
          </button>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  Xác nhận lựa chọn này?
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Quay lại</button>
                  <button type="button" class="btn btn-primary">Đồng ý</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
        
        
    );
}; export default AssignTask;
    
