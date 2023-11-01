import React from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
function Events() {
  const [Events,setEvents] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [regexParam, setRegexParam] = React.useState("");
  const [attribute, setAttribute] = React.useState("");
  const [order, setOrder] = React.useState("");
  const [orderBy, setOrderBy] = React.useState("");



  const getData =async (searchTerm)=>{
    try{
      if(searchTerm&& (attribute==="")){
        const res =axios.get('http://localhost:8088/EventSearch?domain='+searchTerm)
            .then((res)=>{
                  setEvents(res.data);
                  console.log(res.data);
                }

            )}
      else if (regexParam && (attribute!=="")){
        const res =axios.get('http://localhost:8088/EventSearch?regexParam='+regexParam+'&attribute='+attribute)
            .then((res)=>{
                  setEvents(res.data);
                  console.log(res.data);
                }

            )}
      else if (order && orderBy){
        const res =axios.get('http://localhost:8088/EventSearch?Type='+order+'&orderBy='+orderBy)
            .then((res)=>{
                  setEvents(res.data);
                  console.log(res.data);
                }

            )
      }
      else{
        const res=axios.get('http://localhost:8088/EventSearch')
            .then((res)=>{
              setEvents(res.data);
              console.log(res.data);
            } )
      }
    }
    catch (err) {
      console.log(err)}
  }
  const generatePDF = () => {
    // Créez une nouvelle instance de jsPDF
    const doc = new jsPDF();

    // Définissez le titre du document PDF
    doc.text("Liste Events :", 10, 10);

    // Créez le tableau au format PDF
    doc.autoTable({
      head: [["title", "date", "description", "type"]],
      body: Events.map((react) => [
        react.title,
        react.date,
        react.description,
        react.type,
      ]),
    });

    // Enregistrez ou affichez le document PDF
    doc.save("list_Events.pdf");
  };
  const deleteEvent = async (id) => {
    try {
      // Envoyer une requête de suppression au backend en fonction de l'ID
      const res= axios.delete('http://localhost:8088/deleteEvent?id='+id)
          .then((res)=>{
                setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));

                console.log(res.data);
              }
          )
      // Actualiser la liste des événements après suppression
      getData(searchTerm);

    } catch (err) {
      console.log(err);
    }
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
                    <h3 className="text-white">Events</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="iq-card">
                  <div className="iq-card-header d-flex justify-content-between">
                    <div className="iq-header-title">
                      <h4 className="card-title">List Events</h4>
                    </div>
                  </div>
                  <div className="iq-card-body">
                    <div id="table" className="table-editable">
              <span className="table-add float-right mb-3 mr-2">
               <Link to="/addNew" className="btn btn-sm iq-bg-success">
            <i className="ri-add-fill">
                <span className="pl-1">Add New</span>
            </i>
        </Link>
              </span>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by event title"
                                onKeyUp={(e) => {
                                  setSearchTerm(e.target.value);
                                  setRegexParam(e.target.value);
                                  getData(regexParam, searchTerm);
                                }}
                            />
                            <select className="form-select" onChange={(e) => {setAttribute(e.target.value)}}>
                              <option value="">Filter by</option>
                              <option value="id">Id</option>
                              <option value="title">Title</option>
                              <option value="description">Description</option>
                              <option value="date">Date</option>
                              <option value="type">Type</option>
                            </select>
                            <button className="btn btn-primary" onClick={() => getData()}>Search</button>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-group mb-3">
                            <span className="input-group-text">Sort by:</span>
                            <select className="form-select" onChange={async (e) => {await setOrder(e.target.value);}}>
                              <option value="">Choose</option>
                              <option value="asc">ASC</option>
                              <option value="desc">DESC</option>
                            </select>
                            <select className="form-select" onChange={(e) => {setOrderBy(e.target.value);}}>
                              <option value="">Attribute</option>
                              <option value="id">Id</option>
                              <option value="title">Title</option>
                              <option value="description">Description</option>
                              <option value="date">Date</option>
                              <option value="type">Type</option>
                            </select>
                            <button className="btn btn-primary" onClick={() => getData()}>Sort</button>
                          </div>
                        </div>
                      </div>

                      <table className="table table-bordered table-responsive-md table-striped text-center">
                        <thead>
                        <tr>
                          <th>Id</th>
                          <th>Title</th>
                          <th>Description</th>
                          <th>Date</th>
                          <th>Type</th>
                          <th>Remove</th>
                          <th>Update</th>

                        </tr>
                        </thead>
                        <tbody>
                        {Array.isArray(Events) ? (
                            Events.map((event, index) => (
                                <tr key={index}>
                                  <td>{event.id}</td>
                                  <td>{event.title}</td>
                                  <td>{event.description}</td>
                                  <td>{event.date}</td>
                                  <td>{event.type}</td>
                                  <td>
                                    <button
                                        className="btn btn-sm iq-bg-danger"
                                        onClick={() => deleteEvent(event.id)}
                                    >
                                      Remove
                                    </button>
                                  </td>
                                  <td>
                                    <Link to={"/updateEvent/"+event.id} className="btn btn-sm iq-bg-warning">
                                      Update
                                    </Link>
                                  </td>
                                  <td>
                                    <button
                                        className="btn btn-sm iq-bg-primary"
                                        onClick={generatePDF}
                                    >
                                      Imprimer PDF
                                    </button>
                                  </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                              <td colSpan="7">Aucun événement trouvé.</td>
                            </tr>
                        )}
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
