import React from "react";

export default function AdminFooter() {
  return (
    <>
      <footer className="footer">
        <div className="container-fluid">
          Proyecto con React // <i>&nbsp;Módulo de Farmacia</i>
          <div className="copyright ml-auto">
            {" "}
            {new Date().getFullYear()}, creado con <i className="la la-heart heart text-danger"></i>{" "}
          </div>
        </div>
      </footer>
    </>
  );
}
