import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

export default function AdminSideBar(props) {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="sidebar">
        <div className="scrollbar-inner sidebar-wrapper">
          <div className="user">
            <div className="photo">
              <img src={`assets/img/profile4.jpg`} alt="user-profile" />
            </div>
            <div className="info">
              <a>
                <span>
                  {userName !== "" ? userName : "Nombre de usuario"}
                  <span className="user-level">Administrador</span>
                </span>
              </a>
            </div>
          </div>
          <ul className="nav">
            <li className="nav-item">
              <Link to="/">
                <i className="la la-dashboard"></i>
                <p>Tablero</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/inventory">
                <i className="la la-ambulance"></i>
                <p>Inventario</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/categories">
                <i className="la la-align-justify"></i>
                <p>Categorías </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/types">
                <i className="la la-sticky-note"></i>
                <p>Tipos</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile">
                <i className="la la-user"></i>
                <p>Perfil</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={handleLogout}>
                <i className="la la-power-off"></i>
                <p>Cerrar sesión</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
