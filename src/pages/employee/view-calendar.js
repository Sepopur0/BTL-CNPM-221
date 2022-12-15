import React from 'react';
import { useNavigate,useLocation } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './style.css';
function CCalendar() {
    const locale=useLocation();
    const id=locale.state.id;
    const type=locale.state.type;
    //dummy value, change when db have
    let date_value=[ ...Array(20).keys() ].map( i => i+1);
    const date_list=date_value.map(x=>x+'-12-2022');//yet to hightlights
    const curday=new Date();
    let curday_str=curday.getDate()+'-'+(curday.getMonth()+1).toString()+'-'+curday.getFullYear();
    //
    let navigate = useNavigate();
    const ToViewTask = (e) =>{ 
      let date=e.getDate()+'-'+(e.getMonth()+1).toString()+'-'+e.getFullYear();
      if(type==='C')
      {navigate('/c/view-task',{state:{id:id,date:date,type:type}});}
      else if(type==='J'){
        navigate('/j/view-task',{state:{id:id,date:date,type:type}})
      }
    }
    return (
      <div className='d-flex flex-column align-items-center justify-content-start'>
        <h2>Lịch hoạt động</h2>
        <div>
        <Calendar onClickDay={e=>ToViewTask(e)}
        tileClassName={({ date}) => {
          let realday=date.getDate()+'-'+(date.getMonth()+1).toString()+'-'+date.getFullYear();
          if(date_list.find(val=>val===realday && val!==curday_str)){
            return 'highlight';
          }
        }}
         value={curday} />
        </div>
      </div>
    );
}
export default CCalendar;
