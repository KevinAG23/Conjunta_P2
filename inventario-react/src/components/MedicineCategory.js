import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminHeader from "./layouts/AdminHeader";
import AdminSideBar from "./layouts/AdminSideBar";
import AdminFooter from "./layouts/AdminFooter";
import { db } from "../firebase";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";

export default function CategoriasMedicamentos(props) {
  var counter = 1;
  const [categorias, setCategorias] = useState([]);
  const coleccionCategoriasMedicamentosRef = collection(db, "Categoria");

  const obtenerCategorias = async () => {
    const datos = await getDocs(coleccionCategoriasMedicamentosRef);
    setCategorias(datos.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const manejarBotonEliminar = async (id) => {
    const docCategoria = doc(coleccionCategoriasMedicamentosRef, id);
    await deleteDoc(docCategoria);
    obtenerCategorias();
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  return (
    <>
      <AdminHeader />
      <AdminSideBar />
      <div className="main-panel">
        <div className="content">
          <div className="container-fluid">
            <h4 className="page-title">Categorías de Medicamentos</h4>
            <div className="row">
              <div className="col-md-12">
                <div className="card card-tasks">
                  <div className="card-header ">
                    <h4 className="card-title">
                      Lista de Categorías{" "}
                      <Link to="/addcategory" className="btn btn-primary btn-sm float-right">
                        Agregar nueva Categoría
                      </Link>{" "}
                    </h4>
                  </div>
                  <div className="card-body ">
                    <div className="table-full-width px-5 py-4 table-striped">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Nombre de la Categoría</th>
                            <th>Acción</th>
                          </tr>
                        </thead>
                        <tbody>
                          {categorias.map((categoria) => {
                            return (
                              <tr key={categoria.id}>
                                <td>{counter++}</td>
                                <td>{categoria.name}</td>
                                <td className="td-actions">
                                  <div className="form-button-action">
                                    <Link to="/updatecategory">
                                      <button
                                        type="button"
                                        className="btn btn-link btn-success"
                                        onClick={() => {
                                          localStorage.setItem(
                                            "category_obj",
                                            JSON.stringify(categoria)
                                          );
                                        }}>
                                        <i className="la la-edit"></i>
                                      </button>
                                    </Link>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        manejarBotonEliminar(categoria.id);
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
