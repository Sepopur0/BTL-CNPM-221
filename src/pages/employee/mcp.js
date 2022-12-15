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
        button = <div className='bg-primary col-2 p-0 rounded-end outer text-wrap text-center' onClick={In}>
                    {'Check \n in'}
                </div>
    }
    else if (Checkvalue === "completing"){
        button = <div className='bg-warning col-2 p-0 rounded-end outer text-wrap text-center' onClick={Out}>
                    Check out
                </div>
    }
    else{
        button = <div className='bg-success col-2 p-0 rounded-end outer text-wrap text-center'>
                    Xong
                </div>
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