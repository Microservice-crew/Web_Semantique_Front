import React from 'react'
import axios from 'axios';

function Events() {
  const [Events,setEvents] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
const getData =async (searchTerm)=>{
  try{
    if(!searchTerm){
      const res =axios.get('http://localhost:8088/EventSearch')
          .then((res)=>{
            setEvents(res.data);
            console.log(res.data);
              }

          )}
      else{
        const res=axios.get('http://localhost:8088/EventSearch?Event='+searchTerm)
        .then((res)=>{
          setEvents(res.data);
          console.log(res.data);
            } )
      }
    }
    catch (err) {
        console.log(err)}
  }
    React.useEffect(() => {
        getData();
        }, []);






  return (
    <div>
      

      <div id="content-page" className="content-page">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div
          className="iq-card position-relative inner-page-bg bg-primary"
          style={{ height: 150 }}
        >
          <div className="inner-page-title">
            <h3 className="text-white">Editable Table Page</h3>
            <p className="text-white">lorem ipsum</p>
          </div>
        </div>
      </div>
      <div className="col-sm-12">
        <div className="iq-card">
          <div className="iq-card-header d-flex justify-content-between">
            <div className="iq-header-title">
              <h4 className="card-title">Editable Table</h4>
            </div>
          </div>
          <div className="iq-card-body">
            <div id="table" className="table-editable">
              <span className="table-add float-right mb-3 mr-2">
                <button className="btn btn-sm iq-bg-success">
                  <i className="ri-add-fill">
                    <span className="pl-1">Add New</span>
                  </i>
                </button>
              </span>
              <table className="table table-bordered table-responsive-md table-striped text-center">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Sort</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                {Events.map((event, index) => (
                    <tr key={index}>
                      <td>{event.title}</td>
                      <td>{event.description}</td>
                      <td>{event.date}</td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>





    </div>
  )
}

export default Events
