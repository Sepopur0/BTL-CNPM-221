import React, {useState} from 'react';
import taskData from './task.json'
import { useNavigate,useLocation } from "react-router-dom";
import Mcp from './mcp';

function Ctask(){
  const locale=useLocation();
  const id= locale.state.id;
  const date=locale.state.date;
  
  return (
    <div className="container App">     
      <br />
      <h2>Lịch trình ngày {date}</h2>
      <br />
      
      {taskData.map((mcp) => 
        {
          
          return mcp.id === id && mcp.date === date ?
          <Mcp key={mcp.taskID} mcp={mcp.mcp} time={mcp.time} vehicle={mcp.vehicle} location={mcp.location} status={mcp.status}/>
          :
          null
        }
      )}
      
    </div>
  );
}
export default Ctask;