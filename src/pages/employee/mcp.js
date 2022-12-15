import React, { useState } from "react";
import "./mcp.css";

const Mcp = (props) => {
  const [curstate, doST] = useState(0);
  return (
    <>
      <div className="container text-start mb-2 p-0 row">
        <div className="col-1"></div>
        <div className="col-9 p-0 border border-primary rounded-start">
          <div className="bg-primary p-1 fs-5 fw-semibold">{props.mcp}</div>
          <div className="p-2 fs-6">
            <div className="m-1">Thời gian : {props.time}</div>
            <div className="m-1">Phương tiện: {props.vehicle}</div>
            <div className="m-1">Địa chỉ: {props.location}</div>
          </div>
        </div>
        {curstate===0&&<button
          className="btn btn-success col-1 p-0 rounded-0 rounded-end text-wrap"
          onClick={()=>doST(1)}
        >
          Check in
        </button>}
        {curstate===1&&<button
          className="btn btn-warning col-1 p-0 rounded-0 rounded-end text-wrap"
          onClick={()=>doST(2)}
        >
          Current in work. Checkout?
        </button>}
        {curstate===2&&<button
          className="btn btn-danger col-1 p-0 rounded-0 rounded-end text-wrap" disabled
        >
          Work done
        </button>}
      </div>
    </>
  );
};

export default Mcp;
