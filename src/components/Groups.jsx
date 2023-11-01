import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

function Groups() {
  const [groups, setGroups] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getData = async (searchTerm) => {
    try {
      if (!searchTerm) {
        const res = await axios.get('http://localhost:8088/GroupSearch');
        setGroups(res.data);
        console.log(res.data);
      } else {
        const res = await axios.get('http://localhost:8088/GroupSearch?name=' + searchTerm);
        setGroups(res.data);
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteGroup = async (id) => {
    try {
      // Envoyer une requête de suppression au backend en fonction de l'ID
      const res= axios.delete('http://localhost:8088/deleteGroup?id='+id)
    .then((res)=>{
      setGroups((prevGroups) => prevGroups.filter((group) => group.id !== id));

      console.log(res.data);
      }
    )
      // Actualiser la liste des groupes après suppression
      getData(searchTerm);

    } catch (err) {
      console.log(err);
    }
  }
    

  useEffect(() => {
    getData();
  }, []);

  return (
      <div>
        <div id="content-page" className="content-page">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="iq-card position-relative inner-page-bg bg-primary" style={{ height: 150 }}>
                  <div className="inner-page-title">
                    <h3 className="text-white">Groups</h3>
                  </div>
                </div>
              </div>

            </div>
            
            <div className="col-sm-12">
              <div className="iq-card">
                <div className="iq-card-header d-flex justify-content-between">
                  <div className="iq-header-title">
                    <h4 className="card-title">List Groups</h4>

                  </div>
                  <div className="iq-card-body">
                    <div id="table" className="table-editable">
                    <span className="table-add float-right mb-3 mr-2">

                    
  <button
    className="btn btn-sm iq-bg-success"
    onClick={() => {
      window.location.href = "/addGroup";
    }}
  >
    <i className="ri-add-fill"></i>
    <span className="pl-1">Add New</span>
  </button>
</span>
             
                    <div className="search-input">
                      <input
                        type="text"
                        placeholder="Search by group name"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <button onClick={() => getData(searchTerm)}>Search</button>
                    </div>
                    <table className="table table-bordered table-responsive-md table-striped text-center">
                      <thead>

                        <tr>
                          <th>Name</th>
                          <th>Capacity</th>
                          <th>Date</th>
                          <th>Update</th>
                          <th>Remove</th>
                        </tr>

                      </thead>
                      <tbody>
   {groups.map((group, index) => (
    <tr key={index}>
        <td>{group.name}</td>
        <td>{group.capacity}</td>
        <td>{group.date}</td>
        <td>
                            <Link to={"/updateGroup/"+group.id} className="btn btn-sm iq-bg-warning">
                            Update
                            </Link>
                        </td>
        <td>
                        <button
                            className="btn btn-sm iq-bg-danger"
                            onClick={() => deleteGroup(group.id)}
                        >
                          Remove
                        </button>
                      </td>
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
  );
}

export default Groups;
