import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";

function Users() {
  const [Users, setUsers] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const getData = async (searchTerm) => {
    try {
      if (!searchTerm) {
        const res = axios
          .get("http://localhost:8088/utilisateurSearch")
          .then((res) => {
            setUsers(res.data);
            console.log(res.data);
          });
      } else {
        const res = axios
          .get("http://localhost:8088/utilisateurSearch?domain=" + searchTerm)
          .then((res) => {
            setUsers(res.data);
            console.log(res.data);
          });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser = async (title) => {
    try {
      // Envoyer une requête de suppression au backend en fonction de l'ID
      const res = axios
        .delete("http://localhost:8088/deleteUser?title=" + title)
        .then((res) => {
          setUsers((prevUsers) =>
            prevUsers.filter((user) => user.title !== title)
          );

          console.log(res.data);
        });
      // Actualiser la liste des événements après suppression
      getData(searchTerm);
    } catch (err) {
      console.log(err);
    }
  };

  const generatePDF = () => {
    // Créez une nouvelle instance de jsPDF
    const doc = new jsPDF();

    // Définissez le titre du document PDF
    doc.text("Liste Users :", 10, 10);

    // Créez le tableau au format PDF
    doc.autoTable({
      head: [["nomUser", "email", "title", "age"]],
      body: Users.map((react) => [
        react.nomUser,
        react.email,
        react.title,
        react.age,
      ]),
    });

    // Enregistrez ou affichez le document PDF
    doc.save("list_Users.pdf");
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
                  <h3 className="text-white">Users</h3>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="iq-card">
                <div className="iq-card-header d-flex justify-content-between">
                  <div className="iq-header-title">
                    <h4 className="card-title">List Users</h4>
                  </div>
                </div>
                <div className="iq-card-body">
                  <div id="table" className="table-editable">
                    <span className="table-add float-right mb-3 mr-2">
                      <Link
                        to="/addNewUser"
                        className="btn btn-sm iq-bg-success"
                      >
                        <i className="ri-add-fill">
                          <span className="pl-1">Add New</span>
                        </i>
                      </Link>
                    </span>
                    <div className="search-input">
                      <input
                        type="text"
                        placeholder="Rechercher par Nom Userx"
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
                          <th>Email</th>
                          <th>Title</th>
                          <th>Age</th>
                          <th>Remove</th>
                          <th>PDF</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Users.map((verif, index) => (
                          <tr key={index}>
                            <td>{verif.nomUser}</td>
                            <td>{verif.email}</td>
                            <td>{verif.title}</td>
                            <td>{verif.age}</td>
                            <td>
                              <button
                                className="btn btn-sm iq-bg-danger"
                                onClick={() => deleteUser(verif.title)}
                              >
                                Remove
                              </button>
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

export default Users;
