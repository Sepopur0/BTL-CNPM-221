import React, {useState} from 'react';
import './mcp.css'

const Mcp = (props) =>{
    const doST = (e) =>{
        console.log("ass");
    }
    return (
        <>
            <div className='container text-start mb-2 p-0 row'>
                <div className='col-1'></div>
                <div className='col-9 p-0 border border-primary rounded-start'>
                    <div className='bg-primary ps-1 fs-5 fw-semibold'>{props.mcp}</div>
                    <div className='ps-2 fs-6'>
                        <div className='m-1'>Thời gian : {props.time}</div>
                        <div className='m-1'>Phương tiện: {props.vehicle}</div>
                        <div className='m-1'>Địa chỉ: {props.location}</div>                    
                    </div>
                </div>
                <div className='bg-success col-2 p-0 rounded-end outer' onClick={doST}>
                    Check in
                </div>
            </div>
        </>
    )
};

export default Mcp;