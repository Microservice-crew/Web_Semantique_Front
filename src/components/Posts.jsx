import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";

function Posts() {
  const [Posts, setPosts] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [regexParam, setRegexParam] = React.useState("");
  const [attribute, setAttribute] = React.useState("");
  const [order, setOrder] = React.useState("");
  const [orderBy, setOrderBy] = React.useState("");
  const getData = async (searchTerm) => {
    try {
      if (searchTerm && attribute === "") {
        const res = axios
          .get("http://localhost:8088/PostSearch?domain=" + searchTerm)
          .then((res) => {
            setPosts(res.data);
            console.log(res.data);
          });
      } else if (regexParam && attribute !== "") {
        const res = axios
          .get(
            "http://localhost:8088/PostSearch?regexParam=" +
              regexParam +
              "&attribute=" +
              attribute
          )
          .then((res) => {
            setPosts(res.data);
            console.log(res.data);
          });
      } else if (order && orderBy) {
        const res = axios
          .get(
            "http://localhost:8088/PostSearch?Type=" +
              order +
              "&orderBy=" +
              orderBy
          )
          .then((res) => {
            setPosts(res.data);
            console.log(res.data);
          });
      } else {
        const res = axios
          .get("http://localhost:8088/PostSearch")
          .then((res) => {
            setPosts(res.data);
            console.log(res.data);
          });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deletePost = async (title) => {
    try {
      // Envoyer une requête de suppression au backend en fonction de l'ID
      const res = axios
        .delete("http://localhost:8088/deletePost?title=" + title)
        .then((res) => {
          setPosts((prevPosts) =>
            prevPosts.filter((post) => post.title !== title)
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
    doc.text("Liste Posts :", 10, 10);

    // Créez le tableau au format PDF
    doc.autoTable({
      head: [["nomUser", "title", "contenu", "date"]],
      body: Posts.map((react) => [
        react.nomUser,
        react.title,
        react.contenu,
        react.date,
      ]),
    });

    // Enregistrez ou affichez le document PDF
    doc.save("list_Posts.pdf");
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
                  <h3 className="text-white">Posts</h3>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="iq-card">
                <div className="iq-card-header d-flex justify-content-between">
                  <div className="iq-header-title">
                    <h4 className="card-title">List Posts</h4>
                  </div>
                </div>
                <div className="iq-card-body">
                  <div id="table" className="table-editable">
                    <span className="table-add float-right mb-3 mr-2">
                      <Link
                        to="/addNewPost"
                        className="btn btn-sm iq-bg-success"
                      >
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
                            placeholder="Search by post title"
                            onKeyUp={(e) => {
                              setSearchTerm(e.target.value);
                              setRegexParam(e.target.value);
                              getData(regexParam, searchTerm);
                            }}
                          />
                          <select
                            className="form-select"
                            onChange={(e) => {
                              setAttribute(e.target.value);
                            }}
                          >
                            <option value="">Filter by</option>
                            <option value="nomUser">NomUser</option>
                            <option value="title">Title</option>
                            <option value="contenu">Contenu</option>
                            <option value="date">Date</option>
                          </select>
                          <button
                            className="btn btn-primary"
                            onClick={() => getData()}
                          >
                            Search
                          </button>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group mb-3">
                          <span className="input-group-text">Sort by:</span>
                          <select
                            className="form-select"
                            onChange={async (e) => {
                              await setOrder(e.target.value);
                            }}
                          >
                            <option value="">Choose</option>
                            <option value="asc">ASC</option>
                            <option value="desc">DESC</option>
                          </select>
                          <select
                            className="form-select"
                            onChange={(e) => {
                              setOrderBy(e.target.value);
                            }}
                          >
                            <option value="">Attribute</option>
                            <option value="nomUser">NomUser</option>
                            <option value="title">Title</option>
                            <option value="contenu">Contenu</option>
                            <option value="date">Date</option>
                          </select>
                          <button
                            className="btn btn-primary"
                            onClick={() => getData()}
                          >
                            Sort
                          </button>
                        </div>
                      </div>
                    </div>

                    <table className="table table-bordered table-responsive-md table-striped text-center">
                      <thead>
                        <tr>
                          <th>Nom User</th>
                          <th>Title</th>
                          <th>Contenu</th>
                          <th>Date</th>
                          <th>Remove</th>
                          <th>Update</th>
                          <th>PDF</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Posts.map((post, index) => (
                          <tr key={index}>
                            <td>{post.nomUser}</td>
                            <td>{post.title}</td>
                            <td>{post.contenu}</td>
                            <td>{post.date}</td>

                            <td>
                              <button
                                className="btn btn-sm iq-bg-danger"
                                onClick={() => deletePost(post.title)}
                              >
                                Remove
                              </button>
                            </td>
                            <td>
                              <Link
                                to={"/updatePost/" + post.id}
                                className="btn btn-sm iq-bg-warning"
                              >
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

export default Posts;
