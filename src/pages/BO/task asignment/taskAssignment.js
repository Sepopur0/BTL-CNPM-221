import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TaskAssignment () {
    const navigate = useNavigate();
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [WIds, setWId] = useState([0]);
    const [VId, setVId] = useState(0);
    const [MCPs, setMCPs] = useState([0]);
    return(
        <div class="w-100 flex flex-row align-items-start">
            <button class="btn-outline-primary" 
            onClick={(e) => {
                e.preventDefault();
                window.location.assign("../task-assignment/view-calendar")
            }}>
            Xem lịch
            </button>
            <button class="btn-outline-primary" 
            onClick={(e) => {
                e.preventDefault();
                window.location.assign("../task-assignment/assign-task")
            }}>
            Gán công việc
            </button>
            <button class="btn-outline-primary" 
            onClick={(e) => {
                e.preventDefault();
                window.location.assign("../task-assignment/assign-vehicle")
            }}>
            Gán phương tiện
            </button>
            <button class="btn-outline-primary" 
            onClick={(e) => {
                e.preventDefault();
                window.location.assign("../task-assignment/assign-mcps")
            }}>
            Gán MCPs
            </button>
        </div>
    );
}