import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AdminHeader from "./layouts/AdminHeader";
import AdminSideBar from "./layouts/AdminSideBar";
import AdminFooter from "./layouts/AdminFooter";
import { db } from "../firebase";
import { collection, doc, updateDoc } from "firebase/firestore";

export default function ActualizarCategoria() {
  const navigate = useNavigate();
  const categoriaRef = collection(db, "Categoria");
  const [categoria, setCategoria] = useState(JSON.parse(localStorage.getItem("category_obj")));

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const manejarActualizarCategoria = async () => {
    if (categoria.name) {
      const docCategoria = doc(categoriaRef, categoria.id);
      await updateDoc(docCategoria, categoria);
      setErrorMsg("");
      setSuccessMsg("Categoría actualizada exitosamente!");
      setTimeout(() => {
        setSuccessMsg("");
        navigate("/categories");
      }, 1000);
    } else {
      setErrorMsg("El nombre de la categoría no puede estar vacío.");
    }
  };
  
  return (
    <>
      <AdminHeader />
      <AdminSideBar />
      <div className="main-panel">
        <div className="content">
          <div className="container-fluid">
            <h4 className="page-title">Cambiar Categoría</h4>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">
                      Editar Detalles de la Categoría
                      <Link to="/categories" className="btn btn-danger btn-sm float-right">
                        Volver
                      </Link>{" "}
                    </div>
                  </div>
                  <div className="card-body px-4">
                    <div className="form-group">
                      <label htmlFor="username">Nombre de la Categoría</label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={categoria.name}
                        onChange={(event) =>
                          setCategoria((prev) => ({ ...prev, name: event.target.value }))
                        }
                        placeholder="Ingrese el nombre de la categoría"
                      />
                    </div>
                  </div>
                  <div className="form-group px-4 mb-3">
                    <div className="text-center text-danger">{errorMsg}</div>
                    <div className="text-center text-success">{successMsg}</div>
                    <button className="btn btn-success mx-3" onClick={manejarActualizarCategoria}>
                      Actualizar Categoría
                    </button>
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
