import React from 'react'

const Nav = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <span className="non_collapse">
            <a class="navbar-brand" href="#">Dcrypt</a>
            <a class="navbar-brand" href="#"><strong>LOGO</strong></a>
          </span>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{
            flexBasis: "0%",
            flexGrow: "unset",
            marginRight: "7.7rem",
          }}>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Dashboard</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Upgrade</a>
              </li>

              <li className="nav-item" style={{ paddingBottom: "0px" }}><h6 className="profile_name " style={{
                marginBottom: '0px',
                lineHeight: '2.5',
              }} > Priyanshu</h6></li>
              <li className="nav-item"><span className="Avatar " style={{
                marginBottom: '0px',
                lineHeight: '2.5',
              }}>P </span></li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Settings</a></li>
                  <li><a class="dropdown-item" href="#">Logout</a></li>
                  <li><a class="dropdown-item" href="#"> View profile</a></li>
                  <li><a class="dropdown-item" href="#">Contact Us</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav >
    </div>
  )
}

export default Nav