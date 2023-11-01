import React from "react";
import axios from "axios";

function Posts() {
  const [Posts, setPosts] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const getData = async (searchTerm) => {
    try {
      if (!searchTerm) {
        const res = axios
          .get("http://localhost:8088/PostSearch")
          .then((res) => {
            setPosts(res.data);
            console.log(res.data);
          });
      } else {
        const res = axios
          .get("http://localhost:8088/PostSearch?domain=" + searchTerm)
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
                      <button className="btn btn-sm iq-bg-success">
                        <i className="ri-add-fill">
                          <span className="pl-1">Add New</span>
                        </i>
                      </button>
                    </span>
                    <div className="search-input">
                      <input
                        type="text"
                        placeholder="Rechercher par titre Post"
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
                          <th>Nom User</th>
                          <th>Title</th>
                          <th>Contenu</th>
                          <th>Date</th>
                          <th>Remove</th>
                          <th>Sort</th>
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
                            <td></td>
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
