import React from "react";
import axios from "axios";

function Chat() {
  const [Chat, setChat] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const getData = async (searchTerm) => {
    try {
      if (!searchTerm) {
        const res = axios
          .get("http://localhost:8088/msgsSearch")
          .then((res) => {
            setChat(res.data);
            console.log(res.data);
          });
      } else {
        const res = axios
          .get("http://localhost:8088/msgsSearch?domain=" + searchTerm)
          .then((res) => {
            setChat(res.data);
            console.log(res.data);
          });
      }
    } catch (err) {
      console.log(err);
    }
  };
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
                  <h3 className="text-white">Messages</h3>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="iq-card">
                <div className="iq-card-header d-flex justify-content-between">
                  <div className="iq-header-title">
                    <h4 className="card-title">List Messages</h4>
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
                        placeholder="Rechercher par Nom Users"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <button onClick={() => getData(searchTerm)}>
                        Rechercher
                      </button>
                    </div>
                    <table className="table table-bordered table-responsive-md table-striped text-center">
                      <thead>
                        <tr>
                          <th>UserName</th>
                          <th>UserName Destination</th>
                          <th>Msg Chat</th>
                          <th>Date</th>
                          <th>Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Chat.map((verif, index) => (
                          <tr key={index}>
                            <td>{verif.nomUser}</td>
                            <td>{verif.nomUserDes}</td>
                            <td>{verif.msgChat}</td>
                            <td>{verif.date}</td>
                            <td>
                              <span className="table-remove">
                                <button
                                  type="button"
                                  className="btn iq-bg-danger btn-rounded btn-sm my-0"
                                >
                                  Remove
                                </button>
                              </span>
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

export default Chat;
