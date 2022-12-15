import React, {useState} from "react";
import Calendar from 'react-calendar';
import styled from "styled-components";
// import 'react-calendar/dist/Calendar.css';

const Day = () => {
    return(
        <div class="flex flex-column">
            {"Example"}
        </div>
    );
}

function ViewCalendar(setDate, setTime) {
    const [value, onChange] = useState(new Date());
    const onClickDate = (e) => {
      let date = e.target.value;
      setDate(date);
    }
    return(
      <div class="w-100 d-flex flex-column">
        <div class="w-100 d-flex flex-row"> 
          <div class="w-75">
              <CalendarContainer>
                  <Calendar onChange={onChange} value={value} onClickDay={onClickDate}/>
              </CalendarContainer>
          </div>
          <div class="mt-5 ms-2">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="time" id="8:00" checked />
              <label class="form-check-label" for="8:00">
                Sáng
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="time" id="16:00" />
              <label class="form-check-label" for="16:00">
                Chiều
              </label>
            </div>
          </div>
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
      </div>
    );
}; export default ViewCalendar;

const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */
  width: full;
  height: full;
  margin: auto;
  margin-top: 20px;
  background-color: #fff;
  padding: 10px;
  border-radius: 3px;
  /* ~~~ navigation styles ~~~ */
  .react-calendar__navigation {
    display: flex;
    .react-calendar__navigation__label {
      font-weight: bold;
    }
    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }
  }
  /* ~~~ label styles ~~~ */
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-decoration: none;
    margin: 5px 0;
  }
  /* ~~~ button styles ~~~ */
  button {
    background-color: #fff;
    border-width: 1px;
    color: black;
    padding: 5px 1px;
    &:hover {
      background-color: #556b55;
    }
    &:active {
      background-color: #a5c1a5;
    }
  }
  /* ~~~ day grid styles ~~~ */
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    
    .react-calendar__tile {
      max-width: initial !important;
    }
    .react-calendar__tile--range {
        color: #556b55;
        font-weight: bold;
        &:hover {
            color: black;
        }
    }
  }
  /* ~~~ neighboring month & weekend styles ~~~ */
  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.7;
  }
//   .react-calendar__month-view__days__day--weekend {
//     color: #dfdfdf;
//   }
  /* ~~~ other view styles ~~~ */
  .react-calendar__year-view__months, .react-calendar__decade-view__years, .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: 20% 20% 20% 20% 20%;
    &.react-calendar__year-view__months {
      grid-template-columns: 33.3% 33.3% 33.3%;
    }
    
    .react-calendar__tile {
      max-width: initial !important;
    }
  }
`;