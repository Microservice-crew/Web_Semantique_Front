import React from 'react'

function Users() {
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
                    <th>Name</th>
                    <th>Age</th>
                    <th>Company Name</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Sort</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td contentEditable="true">Gio Metric</td>
                    <td contentEditable="true">25</td>
                    <td contentEditable="true">Deepends</td>
                    <td contentEditable="true">Spain</td>
                    <td contentEditable="true">Madrid</td>
                    <td>
                      <span className="table-up">
                        <a href="#!" className="indigo-text">
                          <i
                            className="fa fa-long-arrow-up"
                            aria-hidden="true"
                          />
                        </a>
                      </span>
                      <span className="table-down">
                        <a href="#!" className="indigo-text">
                          <i
                            className="fa fa-long-arrow-down"
                            aria-hidden="true"
                          />
                        </a>
                      </span>
                    </td>
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
                  <tr>
                    <td contentEditable="true">Manny Petty</td>
                    <td contentEditable="true">45</td>
                    <td contentEditable="true">Insectus</td>
                    <td contentEditable="true">France</td>
                    <td contentEditable="true">San Francisco</td>
                    <td>
                      <span className="table-up">
                        <a href="#!" className="indigo-text">
                          <i
                            className="fa fa-long-arrow-up"
                            aria-hidden="true"
                          />
                        </a>
                      </span>
                      <span className="table-down">
                        <a href="#!" className="indigo-text">
                          <i
                            className="fa fa-long-arrow-down"
                            aria-hidden="true"
                          />
                        </a>
                      </span>
                    </td>
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
                  <tr>
                    <td contentEditable="true">Lucy Tania</td>
                    <td contentEditable="true">26</td>
                    <td contentEditable="true">Isotronic</td>
                    <td contentEditable="true">Germany</td>
                    <td contentEditable="true">Frankfurt am Main</td>
                    <td>
                      <span className="table-up">
                        <a href="#!" className="indigo-text">
                          <i
                            className="fa fa-long-arrow-up"
                            aria-hidden="true"
                          />
                        </a>
                      </span>
                      <span className="table-down">
                        <a href="#!" className="indigo-text">
                          <i
                            className="fa fa-long-arrow-down"
                            aria-hidden="true"
                          />
                        </a>
                      </span>
                    </td>
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
                  <tr className="hide">
                    <td contentEditable="true">Anna Mull</td>
                    <td contentEditable="true">35</td>
                    <td contentEditable="true">Portica</td>
                    <td contentEditable="true">USA</td>
                    <td contentEditable="true">Oregon</td>
                    <td>
                      <span className="table-up">
                        <a href="#!" className="indigo-text">
                          <i
                            className="fa fa-long-arrow-up"
                            aria-hidden="true"
                          />
                        </a>
                      </span>
                      <span className="table-down">
                        <a href="#!" className="indigo-text">
                          <i
                            className="fa fa-long-arrow-down"
                            aria-hidden="true"
                          />
                        </a>
                      </span>
                    </td>
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

export default Users