import React, { useState, useEffect } from "react";
import AdminHeader from "./layouts/AdminHeader";
import AdminSideBar from "./layouts/AdminSideBar";
import AdminFooter from "./layouts/AdminFooter";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";

export default function Inventario() {
  var counter = 1;
  const [medicamentos, setMedicamentos] = useState([]);
  const coleccionMedicamentosRef = collection(db, "Inventario");

  const obtenerMedicamentos = async () => {
    const datos = await getDocs(coleccionMedicamentosRef);
    setMedicamentos(datos.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const manejarBotonEliminar = async (id) => {
    const docMedicamento = doc(coleccionMedicamentosRef, id);
    await deleteDoc(docMedicamento);
    obtenerMedicamentos();
  };

  useEffect(() => {
    obtenerMedicamentos();
  }, []);

  return (
    <>
      <AdminHeader />
      <AdminSideBar />
      <div className="main-panel">
        <div className="content">
          <div className="container-fluid">
            <h4 className="page-title">Inventario de Medicamentos</h4>
            <div className="row">
              <div className="col-md-12">
                <div className="card card-tasks">
                  <div className="card-header ">
                    <h4 className="card-title">
                      Lista de Inventario{" "}
                      <Link to="/addmedicine" className="btn btn-primary btn-sm float-right">
                        Agregar nuevo Medicamento
                      </Link>{" "}
                    </h4>
                  </div>
                  <div className="card-body ">
                    <div className="table-full-width px-5 py-4 table-striped">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>
                              Nombre del Medicamento<sup>Potencia</sup>
                            </th>
                            <th>Categoría del Medicamento</th>
                            <th>Tipo de Medicamento</th>
                            <th>Precio del Medicamento</th>
                            <th>Stock</th>
                            <th>Acción</th>
                          </tr>
                        </thead>
                        <tbody>
                          {medicamentos.map((medicamento) => {
                            return (
                              <tr key={medicamento.id}>
                                <td>{counter++}</td>
                                <td>
                                  {medicamento.name} <sup>{medicamento.power}</sup>
                                </td>
                                <td>{medicamento.category}</td>
                                <td>{medicamento.type}</td>
                                <td>₹{medicamento.price}</td>
                                <td>{medicamento.stock}</td>
                                <td className="td-actions">
                                  <div className="form-button-action">
                                    <Link to="/updatemedicine">
                                      <button
                                        type="button"
                                        className="btn btn-link btn-success"
                                        onClick={() => {
                                          localStorage.setItem(
                                            "medicine_obj",
                                            JSON.stringify(medicamento)
                                          );
                                        }}>
                                        <i className="la la-edit"></i>
                                      </button>
                                    </Link>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        manejarBotonEliminar(medicamento.id);
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
