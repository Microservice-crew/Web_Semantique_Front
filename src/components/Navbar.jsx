import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  return (
    <>
      {/* Required meta tags */}
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>SocialV - Responsive Bootstrap 4 Admin Dashboard Template</title>
      {/* loader Start */}
      <div id="loading">
        <div id="loading-center"></div>
      </div>
      {/* loader END */}
      {/* Wrapper Start */}
      <div className="wrapper">
        {/* Sidebar  */}
        <div className="iq-sidebar">
          <div id="sidebar-scrollbar">
            <nav className="iq-sidebar-menu">
              <ul id="iq-sidebar-toggle" className="iq-menu">
                <li className="active">
                  <i className="las la-newspaper">
                    <NavLink to="/Posts">Posts</NavLink>
                  </i>
                </li>
                <li>
                  <i className="las la-user">
                    <NavLink to="/Events">Events</NavLink>
                  </i>
                </li>

                <li>
                  <i className="las la-users">
                    <NavLink to="/Groups">Groups</NavLink>
                  </i>
                </li>
                <li>
                  <i className="las la-image">
                    <NavLink to="/Reacts">Reacts</NavLink>
                  </i>
                </li>
                <li>
                  <i className="las la-video">
                    <NavLink to="/Reclamations">Reclamations</NavLink>
                  </i>
                </li>
                <li>
                  <i className="las la-film">
                    <NavLink to="/Users">Users</NavLink>
                  </i>
                </li>
                <li>
                  <i className="las la-film">
                    <NavLink to="/VerifUsers">Users Verifié</NavLink>
                  </i>
                </li>
                <li>
                  <i className="las la-film">
                    <NavLink to="/Chat">Chat</NavLink>
                  </i>
                </li>
              </ul>
            </nav>
            <div className="p-3" />
          </div>
        </div>
        {/* TOP Nav Bar */}
        <div className="iq-top-navbar">
          <div className="iq-navbar-custom">
            <nav className="navbar navbar-expand-lg navbar-light p-0">
              <div className="iq-navbar-logo d-flex justify-content-between">
                <a href="index.html">
                  <img src="images/logo.png" className="img-fluid" alt="" />
                  <span>OneZero</span>
                </a>
                <div className="iq-menu-bt align-self-center">
                  <div className="wrapper-menu">
                    <div className="main-circle">
                      <i className="ri-menu-line" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="iq-search-bar">
                <form action="#" className="searchbox">
                  <input
                    type="text"
                    className="text search-input"
                    placeholder="Type here to search..."
                  />
                  <a className="search-link" href="#">
                    <i className="ri-search-line" />
                  </a>
                </form>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-label="Toggle navigation"
              >
                <i className="ri-menu-3-line" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto navbar-list">
                  <li>
                    <a
                      href="profile.html"
                      className="  d-flex align-items-center"
                    >
                      <img
                        src="images/user/1.jpg"
                        className="img-fluid rounded-circle mr-3"
                        alt="user"
                      />
                      <div className="caption">
                        <h6 className="mb-0 line-height">One Zero</h6>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="index.html"
                      className="  d-flex align-items-center"
                    >
                      <i className="ri-home-line" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="search-toggle  " href="#">
                      <i className="ri-group-line" />
                    </a>
                    <div className="iq-sub-dropdown iq-sub-dropdown-large">
                      <div className="iq-card shadow-none m-0">
                        <div className="iq-card-body p-0 ">
                          <div className="bg-primary p-3">
                            <h5 className="mb-0 text-white">
                              Friend Request
                              <small className="badge  badge-light float-right pt-1">
                                4
                              </small>
                            </h5>
                          </div>
                          <div className="iq-friend-request">
                            <div className="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between">
                              <div className="d-flex align-items-center">
                                <div className="">
                                  <img
                                    className="avatar-40 rounded"
                                    src="images/user/01.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="media-body ml-3">
                                  <h6 className="mb-0 ">Jaques Amole</h6>
                                  <p className="mb-0">40 friends</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center">
                                <a
                                  href="javascript:void();"
                                  className="mr-3 btn btn-primary rounded"
                                >
                                  Confirm
                                </a>
                                <a
                                  href="javascript:void();"
                                  className="mr-3 btn btn-secondary rounded"
                                >
                                  Delete Request
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="iq-friend-request">
                            <div className="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between">
                              <div className="d-flex align-items-center">
                                <div className="">
                                  <img
                                    className="avatar-40 rounded"
                                    src="images/user/02.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="media-body ml-3">
                                  <h6 className="mb-0 ">Lucy Tania</h6>
                                  <p className="mb-0">12 friends</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center">
                                <a
                                  href="javascript:void();"
                                  className="mr-3 btn btn-primary rounded"
                                >
                                  Confirm
                                </a>
                                <a
                                  href="javascript:void();"
                                  className="mr-3 btn btn-secondary rounded"
                                >
                                  Delete Request
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="iq-friend-request">
                            <div className="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between">
                              <div className="d-flex align-items-center">
                                <div className="">
                                  <img
                                    className="avatar-40 rounded"
                                    src="images/user/03.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="media-body ml-3">
                                  <h6 className="mb-0 ">Manny Petty</h6>
                                  <p className="mb-0">3 friends</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center">
                                <a
                                  href="javascript:void();"
                                  className="mr-3 btn btn-primary rounded"
                                >
                                  Confirm
                                </a>
                                <a
                                  href="javascript:void();"
                                  className="mr-3 btn btn-secondary rounded"
                                >
                                  Delete Request
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="iq-friend-request">
                            <div className="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between">
                              <div className="d-flex align-items-center">
                                <div className="">
                                  <img
                                    className="avatar-40 rounded"
                                    src="images/user/04.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="media-body ml-3">
                                  <h6 className="mb-0 ">Marsha Mello</h6>
                                  <p className="mb-0">15 friends</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center">
                                <a
                                  href="javascript:void();"
                                  className="mr-3 btn btn-primary rounded"
                                >
                                  Confirm
                                </a>
                                <a
                                  href="javascript:void();"
                                  className="mr-3 btn btn-secondary rounded"
                                >
                                  Delete Request
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="text-center">
                            <a href="#" className="mr-3 btn text-primary">
                              View More Request
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="search-toggle  ">
                      <div id="lottie-beil" />
                      <span className="bg-danger dots" />
                    </a>
                    <div className="iq-sub-dropdown">
                      <div className="iq-card shadow-none m-0">
                        <div className="iq-card-body p-0 ">
                          <div className="bg-primary p-3">
                            <h5 className="mb-0 text-white">
                              All Notifications
                              <small className="badge  badge-light float-right pt-1">
                                4
                              </small>
                            </h5>
                          </div>
                          <a href="#" className="iq-sub-card">
                            <div className="media align-items-center">
                              <div className="">
                                <img
                                  className="avatar-40 rounded"
                                  src="images/user/01.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="media-body ml-3">
                                <h6 className="mb-0 ">Emma Watson Bni</h6>
                                <small className="float-right font-size-12">
                                  Just Now
                                </small>
                                <p className="mb-0">95 MB</p>
                              </div>
                            </div>
                          </a>
                          <a href="#" className="iq-sub-card">
                            <div className="media align-items-center">
                              <div className="">
                                <img
                                  className="avatar-40 rounded"
                                  src="images/user/02.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="media-body ml-3">
                                <h6 className="mb-0 ">New customer is join</h6>
                                <small className="float-right font-size-12">
                                  5 days ago
                                </small>
                                <p className="mb-0">One Zero</p>
                              </div>
                            </div>
                          </a>
                          <a href="#" className="iq-sub-card">
                            <div className="media align-items-center">
                              <div className="">
                                <img
                                  className="avatar-40 rounded"
                                  src="images/user/03.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="media-body ml-3">
                                <h6 className="mb-0 ">Two customer is left</h6>
                                <small className="float-right font-size-12">
                                  2 days ago
                                </small>
                                <p className="mb-0">One Zero</p>
                              </div>
                            </div>
                          </a>
                          <a href="#" className="iq-sub-card">
                            <div className="media align-items-center">
                              <div className="">
                                <img
                                  className="avatar-40 rounded"
                                  src="images/user/04.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="media-body ml-3">
                                <h6 className="mb-0 ">New Mail from Fenny</h6>
                                <small className="float-right font-size-12">
                                  3 days ago
                                </small>
                                <p className="mb-0">One Zero</p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a href="#" className="search-toggle  ">
                      <div id="lottie-mail" />
                      <span className="bg-primary count-mail" />
                    </a>
                    <div className="iq-sub-dropdown">
                      <div className="iq-card shadow-none m-0">
                        <div className="iq-card-body p-0 ">
                          <div className="bg-primary p-3">
                            <h5 className="mb-0 text-white">
                              All Messages
                              <small className="badge  badge-light float-right pt-1">
                                5
                              </small>
                            </h5>
                          </div>
                          <a href="#" className="iq-sub-card">
                            <div className="media align-items-center">
                              <div className="">
                                <img
                                  className="avatar-40 rounded"
                                  src="images/user/01.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="media-body ml-3">
                                <h6 className="mb-0 ">Bni Emma Watson</h6>
                                <small className="float-left font-size-12">
                                  13 Jun
                                </small>
                              </div>
                            </div>
                          </a>
                          <a href="#" className="iq-sub-card">
                            <div className="media align-items-center">
                              <div className="">
                                <img
                                  className="avatar-40 rounded"
                                  src="images/user/02.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="media-body ml-3">
                                <h6 className="mb-0 ">Lorem Ipsum Watson</h6>
                                <small className="float-left font-size-12">
                                  20 Apr
                                </small>
                              </div>
                            </div>
                          </a>
                          <a href="#" className="iq-sub-card">
                            <div className="media align-items-center">
                              <div className="">
                                <img
                                  className="avatar-40 rounded"
                                  src="images/user/03.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="media-body ml-3">
                                <h6 className="mb-0 ">Why do we use it?</h6>
                                <small className="float-left font-size-12">
                                  30 Jun
                                </small>
                              </div>
                            </div>
                          </a>
                          <a href="#" className="iq-sub-card">
                            <div className="media align-items-center">
                              <div className="">
                                <img
                                  className="avatar-40 rounded"
                                  src="images/user/04.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="media-body ml-3">
                                <h6 className="mb-0 ">Variations Passages</h6>
                                <small className="float-left font-size-12">
                                  12 Sep
                                </small>
                              </div>
                            </div>
                          </a>
                          <a href="#" className="iq-sub-card">
                            <div className="media align-items-center">
                              <div className="">
                                <img
                                  className="avatar-40 rounded"
                                  src="images/user/05.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="media-body ml-3">
                                <h6 className="mb-0 ">
                                  Lorem Ipsum generators
                                </h6>
                                <small className="float-left font-size-12">
                                  5 Dec
                                </small>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="navbar-list">
                  <li>
                    <a
                      href="#"
                      className="search-toggle   d-flex align-items-center"
                    >
                      <i className="ri-arrow-down-s-fill" />
                    </a>
                    <div className="iq-sub-dropdown iq-user-dropdown">
                      <div className="iq-card shadow-none m-0">
                        <div className="iq-card-body p-0 ">
                          <div className="bg-primary p-3 line-height">
                            <h5 className="mb-0 text-white line-height">
                              Hello One Zero
                            </h5>
                            <span className="text-white font-size-12">
                              Available
                            </span>
                          </div>
                          <a
                            href="profile.html"
                            className="iq-sub-card iq-bg-primary-hover"
                          >
                            <div className="media align-items-center">
                              <div className="rounded iq-card-icon iq-bg-primary">
                                <i className="ri-file-user-line" />
                              </div>
                              <div className="media-body ml-3">
                                <h6 className="mb-0 ">My Profile</h6>
                                <p className="mb-0 font-size-12">
                                  View personal profile details.
                                </p>
                              </div>
                            </div>
                          </a>
                          <a
                            href="profile-edit.html"
                            className="iq-sub-card iq-bg-warning-hover"
                          >
                            <div className="media align-items-center">
                              <div className="rounded iq-card-icon iq-bg-warning">
                                <i className="ri-profile-line" />
                              </div>
                              <div className="media-body ml-3">
                                <h6 className="mb-0 ">Edit Profile</h6>
                                <p className="mb-0 font-size-12">
                                  Modify your personal details.
                                </p>
                              </div>
                            </div>
                          </a>
                          <a
                            href="account-setting.html"
                            className="iq-sub-card iq-bg-info-hover"
                          >
                            <div className="media align-items-center">
                              <div className="rounded iq-card-icon iq-bg-info">
                                <i className="ri-account-box-line" />
                              </div>
                              <div className="media-body ml-3">
                                <h6 className="mb-0 ">Account settings</h6>
                                <p className="mb-0 font-size-12">
                                  Manage your account parameters.
                                </p>
                              </div>
                            </div>
                          </a>
                          <a
                            href="privacy-setting.html"
                            className="iq-sub-card iq-bg-danger-hover"
                          >
                            <div className="media align-items-center">
                              <div className="rounded iq-card-icon iq-bg-danger">
                                <i className="ri-lock-line" />
                              </div>
                              <div className="media-body ml-3">
                                <h6 className="mb-0 ">Privacy Settings</h6>
                                <p className="mb-0 font-size-12">
                                  Control your privacy parameters.
                                </p>
                              </div>
                            </div>
                          </a>
                          <div className="d-inline-block w-100 text-center p-3">
                            <a
                              className="bg-primary iq-sign-btn"
                              href="sign-in.html"
                              role="button"
                            >
                              Sign out
                              <i className="ri-login-box-line ml-2" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Wrapper END */}
      {/* Footer */}

      <footer className="bg-white iq-footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a href="privacy-policy.html">Privacy Policy</a>
                </li>
                <li className="list-inline-item">
                  <a href="terms-of-service.html">Terms of Use</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 text-right">
              Copyright 2020 <a href="#">SocialV</a> All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
      {/* Footer END */}
      {/* Optional JavaScript */}
      {/* jQuery first, then Popper.js, then Bootstrap JS */}
    </>
  );
}

export default Navbar;
