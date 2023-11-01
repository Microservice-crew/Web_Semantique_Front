import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import {Link} from "react-router-dom";


function Reacts() {
  const [Reacts, setReacts] = useState([]);
  const [sortedReacts, setSortedReacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const getData = async (searchTerm) => {
    try {
      if (!searchTerm) {
        const res = await axios.get('http://localhost:8088/ReactSearch');
        setReacts(res.data);
      } else {
        const res = await axios.get(`http://localhost:8088/ReactSearch?domain=${searchTerm}`);
        setReacts(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };


  // const deleteReact = async (id) => {
  //   try {
  //     if (id === undefined || id === null) {
  //       console.error("ID non défini.");
  //       return;
  //     }
  
  //     // Envoyer une requête de suppression au backend en fonction de l'ID
  //     const res = await axios.delete(`http://localhost:8088/deleteReact?id=${id}`);
  //     setReacts((prevReacts) => prevReacts.filter((react) => react.id !== id));
  //     console.log(res.data);
  
  //     // Actualiser la liste des réactions après suppression
  //     getData(searchTerm);
  //   } catch (err) {
  //     console.error("Erreur lors de la suppression de la réaction :", err);
  //   }
  // };
  
  const deleteReact = async (title) => {
    try {
      // Envoyer une requête de suppression au backend en fonction de l'ID
      const res = axios
        .delete("http://localhost:8088/deleteReact?title=" + title)
        .then((res) => {
          setReacts((prevReacts) =>
          prevReacts.filter((react) => react.title !== title)
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
    doc.text('Liste des Réactions', 10, 10);
  
    // Créez le tableau au format PDF
    doc.autoTable({
      head: [['Avis', 'Nombre like', 'Nombre dislike', 'Date']],
      body: Reacts.map((react) => [react.title, react.nombrelike, react.nombredislike, react.date]),
    });
  
    // Enregistrez ou affichez le document PDF
    doc.save('list_reacts.pdf');
  };
  

  const sortReactsByLikes = () => {
    const sorted = [...Reacts];
    sorted.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.nombrelike - b.nombrelike;
      } else {
        return b.nombrelike - a.nombrelike;
      }
    });
    setSortedReacts(sorted);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  // function deleteReactByTitle(title) {
  //   axios.delete(`http://localhost:8088/React/${title}`)
  //     .then((response) => {
  //       if (response.status === 200) {
  //         // La réaction a été supprimée avec succès, vous pouvez mettre à jour l'état Reacts ou effectuer d'autres actions nécessaires.
  //         console.log(`Réaction "${title}" supprimée avec succès.`);
  //       } else {
  //         console.error('Erreur lors de la suppression de la réaction.');
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Erreur lors de la suppression de la réaction :', error);
  //     });
  // }
  


  useEffect(() => {
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
                  <h3 className="text-white">Reacts</h3>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="iq-card">
                <div className="iq-card-header d-flex justify-content-between">
                  <div className="iq-header-title">
                    <h4 className="card-title">List Reacts</h4>
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
                    <div className="search-input">
                      <input
                        type="text"
                        placeholder="Rechercher par Avis"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <button onClick={() => getData(searchTerm)}>Rechercher</button>
                    </div>
                    <table className="table table-bordered table-responsive-md table-striped text-center">
                      <thead>
                        <tr>
                        
                          <th>Avis</th>
                          <th>Nombre like</th>
                          <th>Nombre dislike</th>
                          <th>Date</th>
                          <th>Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sortedReacts.length > 0
                          ? sortedReacts.map((react, index) => (
                              <tr key={index}>
                              
                                <td>{react.title}</td>
                                <td>{react.nombrelike}</td>
                                <td>{react.nombredislike}</td>
                                <td>{react.date}</td>
                                <td>
                              <button
                                className="btn btn-sm iq-bg-danger"
                                onClick={() => deleteReact(react.title)}
                              >
                                Remove
                              </button>
                            </td>
                                {/* <td><button onClick={() => deleteReactByTitle(react.title)}>Supprimer</button>
</td> */}
                              </tr>
                            ))
                          : Reacts.map((react, index) => (
                              <tr key={index}>
                               
                                <td>{react.title}</td>
                                <td>{react.nombrelike}</td>
                                <td>{react.nombredislike}</td>
                                <td>{react.date}</td>
                                <td>
                              <button
                                className="btn btn-sm iq-bg-danger"
                                onClick={() => deleteReact(react.title)}
                              >
                                Remove
                              </button>
                            </td>
                                {/* <td><button onClick={() => deleteReactByTitle(react.title)}>Supprimer</button>
</td> */}
                              </tr>
                            ))}
                      </tbody>
                    </table>
                  </div>
                  <button onClick={sortReactsByLikes}>Trier par Likes</button>
                  <button onClick={generatePDF}>Imprimer PDF</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reacts;
