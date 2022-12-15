import React, { useState, useEffect } from "react";
import { ViewCalendar, AssignTask, AssignVehicle, AssignMCPs } from "./components";
import { useNavigate } from "react-router-dom";

export default function TaskAssignment () {
    const navigate = useNavigate();
    
    return(
        <div class="w-100 flex flex-column align-items-start">
            <button class="btn btn-outline-primary" 
            onClick={(e) => {
                e.preventDefault();
                window.location.assign("../task-assignment/view-calendar")
            }}>
            Xem lịch
            </button>
        </div>
    );
}