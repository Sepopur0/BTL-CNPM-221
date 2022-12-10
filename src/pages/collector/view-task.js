import React, {useState} from 'react';
import { useNavigate,useLocation } from "react-router-dom";

function Ctask(){
  const locale=useLocation();
  const id= locale.state.id;
  const date=locale.state.date;
    //get from db
  const temp_data=[
    {id:5,date: '10-12-2022', MCP:1,time: '8:00',vehicles:0, location: '239 Đường A, Quận B, Thành phố Y',status:false},
    {id:5,date: '10-12-2022', MCP:2,time: '9:00',vehicles:0, location: '123 Đường C, Quận B, Thành phố Y',status:false},
    {id:5,date: '10-12-2022', MCP:3,time: '10:00',vehicles:0, location: '9 Đường D, Quận B, Thành phố Y',status:false},
    {id:5,date: '11-12-2022', MCP:1,time: '13:00',vehicles:0, location: '239 Đường A, Quận B, Thành phố Y',status:false},
    {id:5,date: '11-12-2022', MCP:2,time: '14:00',vehicles:0, location: '123 Đường C, Quận B, Thành phố Y',status:false},
    {id:5,date: '11-12-2022', MCP:4,time: '15:00',vehicles:0, location: '211 Đường F, Quận B, Thành phố Y',status:false},
    {id:5,date: '12-12-2022', MCP:1,time: '5:00',vehicles:0, location: '239 Đường A, Quận B, Thành phố Y',status:false},
    {id:5,date: '12-12-2022', MCP:2,time: '6:00',vehicles:0, location: '123 Đường C, Quận B, Thành phố Y',status:false},
    {id:5,date: '12-12-2022', MCP:3,time: '7:00',vehicles:0, location: '9 Đường D, Quận B, Thành phố Y',status:false},
    {id:6,date: '13-12-2022', MCP:1,time: '8:00',vehicles:0, location: '239 Đường A, Quận B, Thành phố Y',status:false},
    {id:6,date: '13-12-2022', MCP:2,time: '9:00',vehicles:0, location: '123 Đường C, Quận B, Thành phố Y',status:false},
    {id:6,date: '13-12-2022', MCP:3,time: '10:00',vehicles:0, location: '9 Đường D, Quận B, Thành phố Y',status:false},
  ];
  const data=temp_data;
    // Tasks (ToDo List) State
  const [toDo, setToDo] = useState([]);

  // Temp State
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  // mark task as done or completed
  ////////////////////////////////////////// 
  const markDone = (id) => {
    const newTasks = toDo.map((task) => {
      if (task.id === id){
        return ({ ...task, status: !task.status })
      }
      return task;
    });
    setToDo(newTasks);
  }

  // cancel update
  ////////////////////////////////////////// 
  const cancelUpdate = () => {
    setUpdateData('');
  }

  // Change task for update
  ////////////////////////////////////////// 
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  }

  // update task 
  ////////////////////////////////////////// 
  const updateTask = () => {
    let filterRecords = [...toDo].filter( task=>task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setToDo(updatedObject);
    setUpdateData('');
  }

  
  return (
    <div className="container App">     
      <br />
      <h2>Lịch trình ngày {date}</h2>
      <br />
      

      {updateData && updateData ? (
        <>
          <div className="row">
            <div className="col">
              <input 
                value={updateData && updateData.title} 
                onChange={ (e) => changeTask(e) } 
                className="form-control form-control-lg" 
              />
            </div>
            <div className="col-auto">
              <button 
                className="btn btn-lg btn-success mr-20" 
                onClick={updateTask}
              >Update</button>
              <button 
                className="btn btn-lg btn-warning" 
                onClick={cancelUpdate}
              >Cancel</button>
            </div>
          </div>
          <br />
        </>
      ) : (
        <>
          <div className="row">
            <div className="col">
              <input 
                value={newTask} 
                onChange={e => setNewTask(e.target.value)} 
                className="form-control form-control-lg" 
              />
            </div>
          </div>
          <br />
        </>
      )}


      {/* If there are no to dos in state, display a message   */}
      {toDo && toDo.length ? '' : 'No tasks...'}
      
      {/* Show to dos   */}
      {toDo && toDo
        .sort((a, b) => a.id > b.id ? 1 : -1)
        .map( (task, index) => {
        return(
          <React.Fragment key={task.id}>
          
            <div className="col taskBg">
              
              <div 
                // if task status is true, add class to this div named as done
                className={ task.status ? 'done' : '' }
              >
                {/* Show number of task */}
                <span className="taskNumber">{index + 1}</span> 
                <span className="taskText">{task.title}</span>
              </div>

              <div className="iconsWrap">
                <span 
                  onClick={(e) => markDone(task.id)}
                  title="Completed / Not Completed"
                >
                  Check in
                </span>
              </div>

            </div>
                     
        </React.Fragment>
        );
      })}
    </div>
  );
}
export default Ctask;