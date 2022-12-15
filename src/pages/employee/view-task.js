import React, {useEffect, useState} from 'react';
import taskData from './task.json'
import { useNavigate,useLocation } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import Mcp from './mcp';

function Ctask(){
  const locale=useLocation();
  const id= locale.state.id;
  const date=locale.state.date;
  let data =[];
  let i = 0;
  taskData.map(mcp => {
    if (mcp.id === id && mcp.date === date){
      data[i] = mcp;
      i++;
    };
  }

  )  
  
  let navigate = useNavigate()

  function ViewRoute(){
    navigate('/c/view-route',{state:{id:5,date:date}});
  }

  function Task({currentMCP}){
    return(
      <>
        {currentMCP && currentMCP.map((mcp) => (
          <Mcp key={mcp.taskID} mcp={mcp.mcp} time={mcp.time} vehicle={mcp.vehicle} location={mcp.location} status={mcp.status}/>
        ))}
      </>
    )
  }

  function PaginatedItems({ itemsPerPage }) {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
  
    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(data.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);
  
    const handlePageClick = (event) => {
      const newOffset = event.selected * itemsPerPage % data.length;
      console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
      setItemOffset(newOffset);
    };
  
    return (
      <>
        <Task currentMCP={currentItems}/>
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </>
    );
  }

  return (
    <div className="container App">     
      <br />
      <h2>Lịch trình ngày {date}</h2>
      <br />
      
      <PaginatedItems itemsPerPage={3} />
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button class="btn btn-primary" type="button" onClick={ViewRoute}>Tuyến đường</button>
      </div>
    </div>
  );
}
export default Ctask;