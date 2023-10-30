import React from 'react';
import axios from 'axios';

function Groups() {
  const [groups, setGroups] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");

  const getData = async (searchTerm) => {
    try {
      if (!searchTerm) {
        const res = await axios.get('http://localhost:8088/GroupSearch');
        setGroups(res.data);
        console.log(res.data);
      } else {
        const res = await axios.get('http://localhost:8088/GroupSearch?name='+searchTerm);
        setGroups(res.data);
        console.log(res.data);
      }
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
                  <h3 className="text-white">Groups</h3>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="iq-card">
                <div className="iq-card-header d-flex justify-content-between">
                  <div className="iq-header-title">
                    <h4 className="card-title">List Groups</h4>
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
                          <th>Sort</th>
                          <th>Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {groups.map((group, index) => (
                          <tr key={index}>
                            <td>{group.name}</td>
                            <td>{group.capacity}</td>
                            <td>{group.date}</td>
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
