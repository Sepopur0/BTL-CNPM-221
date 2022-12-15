import React, {useState} from 'react';
import './mcp.css'

const Mcp = (props) =>{
    const [Checkvalue, setValue] = useState(props.status);
    let button;
    const In = (e) =>{
        setValue("completing");
    }

    const Out = (e) =>{
        setValue("completed");
    }
    
    if (Checkvalue === "incomplete") {
        button = <button className='btn btn-primary col-2 p-0 rounded-0 rounded-end outer text-wrap text-center' onClick={In}>
                    Check in
                </button>
    }
    else if (Checkvalue === "completing"){
        button = <button className='btn btn-warning col-2 p-0 rounded-0 rounded-end outer text-wrap text-center' onClick={Out}>
                    Check out
                </button>
    }
    else{
        button = <button className='btn btn-success col-2 p-0 rounded-0 rounded-end outer text-wrap text-center'>
                    Xong
                </button>
    }

    return (
        <>
            <div className='container text-start mb-2 p-0 row'>
                <div className='col-1'></div>
                <div className='col-9 p-0 border border-primary rounded-start'>
                    <div className='bg-primary ps-1 fontbig fw-semibold'>{props.mcp}</div>
                    <div className='ps-2 fontsmall'>
                        <div className='m-1'>Thời gian : {props.time}</div>
                        <div className='m-1'>Phương tiện: {props.vehicle}</div>
                        <div className='m-1'>Địa chỉ: {props.location}</div>                    
                    </div>
                </div>
                {button}
            </div>
        </>
    )
};

export default Mcp;