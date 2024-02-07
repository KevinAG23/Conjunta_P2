import React, { useState, useEffect } from "react";
import AdminHeader from "./layouts/AdminHeader";
import AdminSideBar from "./layouts/AdminSideBar";
import AdminFooter from "./layouts/AdminFooter";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";

export default function TiposMedicamentos() {
  var counter = 1;
  const [tiposMedicamentos, setTiposMedicamentos] = useState([]);
  const coleccionTiposMedicamentosRef = collection(db, "Tipo");

  const obtenerTipos = async () => {
    const data = await getDocs(coleccionTiposMedicamentosRef);
    setTiposMedicamentos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const manejarBotonEliminar = async (id) => {
    const docTipoMedicamento = doc(coleccionTiposMedicamentosRef, id);
    await deleteDoc(docTipoMedicamento);
    obtenerTipos();
  };

  useEffect(() => {
    obtenerTipos();
  }, []);

  return (
    <>
      <AdminHeader />
      <AdminSideBar />
      <div className="main-panel">
        <div className="content">
          <div className="container-fluid">
            <h4 className="page-title">Tipos de Medicamentos</h4>
            <div className="row">
              <div className="col-md-12">
                <div className="card card-tasks">
                  <div className="card-header ">
                    <h4 className="card-title">
                      Lista de Tipos{" "}
                      <Link to="/addtype" className="btn btn-primary btn-sm float-right">
                        Agregar nuevo Tipo
                      </Link>{" "}
                    </h4>
                  </div>
                  <div className="card-body ">
                    <div className="table-full-width px-5 py-4 table-striped">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Nombre del Tipo</th>
                            <th>Acción</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tiposMedicamentos.map((tipoMedicamento) => {
                            return (
                              <tr key={tipoMedicamento.id}>
                                <td>{counter++}</td>
                                <td>{tipoMedicamento.name}</td>
                                <td className="td-actions">
                                  <div className="form-button-action">
                                    <Link to="/updatetype">
                                      <button
                                        type="button"
                                        className="btn btn-link btn-success"
                                        onClick={() => {
                                          localStorage.setItem(
                                            "medtype_obj",
                                            JSON.stringify(tipoMedicamento)
                                          );
                                        }}>
                                        <i className="la la-edit"></i>
                                      </button>
                                    </Link>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        manejarBotonEliminar(tipoMedicamento.id);
                                      }}
                                      className="btn btn-link btn-danger">
                                      <i className="la la-times"></i>
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AdminFooter />
      </div>
    </>
  );
}
