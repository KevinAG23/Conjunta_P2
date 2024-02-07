import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AdminHeader from "./layouts/AdminHeader";
import AdminSideBar from "./layouts/AdminSideBar";
import AdminFooter from "./layouts/AdminFooter";
import { db } from "../firebase";
import { collection, doc, updateDoc } from "firebase/firestore";

export default function UpdateType() {
  const navigate = useNavigate();
  const medTypesCollectionRef = collection(db, "Tipo");
  const [medType, setMedType] = useState(JSON.parse(localStorage.getItem("medtype_obj")));

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const handleUpdateMedType = async () => {
    if (medType.name) {
      const categoryDoc = doc(medTypesCollectionRef, medType.id);
      await updateDoc(categoryDoc, medType);
      setErrorMsg("");
      setSuccessMsg("Actualizado correctamente!");
      setTimeout(() => {
        setSuccessMsg("");
        navigate("/types");
      }, 1000);
    } else {
      setErrorMsg("No se pudo actualizar!");
    }
  };
  return (
    <>
      <AdminHeader />
      <AdminSideBar />
      <div className="main-panel">
        <div className="content">
          <div className="container-fluid">
            <h4 className="page-title">Cambiar Tipo de Medicamento</h4>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">
                      Editar Detalles del Tipo
                      <Link to="/types" className="btn btn-danger btn-sm float-right">
                        VOLVER
                      </Link>{" "}
                    </div>
                  </div>
                  <div className="card-body px-4">
                    <div className="form-group">
                      <label htmlFor="username">Nombre del Tipo</label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={medType.name}
                        onChange={(event) =>
                          setMedType((prev) => ({ ...prev, name: event.target.value }))
                        }
                        placeholder="Ingrese el Nombre del Tipo"
                      />
                    </div>
                  </div>
                  <div className="form-group px-4 mb-3">
                    <div className="text-center text-danger">{errorMsg}</div>
                    <div className="text-center text-success">{successMsg}</div>
                    <button className="btn btn-success mx-3" onClick={handleUpdateMedType}>
                      Actualizar Tipo de Medicamento
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
