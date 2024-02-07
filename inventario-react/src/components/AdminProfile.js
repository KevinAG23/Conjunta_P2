import React, { useState } from "react";
import AdminHeader from "./layouts/AdminHeader";
import AdminSideBar from "./layouts/AdminSideBar";
import AdminFooter from "./layouts/AdminFooter";
import { auth } from "../firebase";
import {
  updateProfile,
  updateEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";

export default function AdminProfile() {
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const user = auth.currentUser;
  const [newValues, setNewValues] = useState({
    name: user !== null ? user.displayName : "",
    email: user !== null ? user.email : "",
    oldPassword: "",
    password: "",
  });

  const handleUpdateProfile = () => {
    if (newValues.name && newValues.email) {
      if (newValues.name !== auth.currentUser.displayName) {
        updateProfile(auth.currentUser, {
          displayName: newValues.name,
        })
          .then(async () => {
            setErrorMsg("");
            setSuccessMsg("Nombre de usuario actualizado exitosamente");
            await setTimeout(() => {
              setSuccessMsg("");
            }, 1000);
          })
          .catch((error) => {
            setErrorMsg(error.message);
          });
      }
      if (newValues.email !== auth.currentUser.email) {
        updateEmail(auth.currentUser, newValues.email)
          .then(async () => {
            setErrorMsg("");
            setSuccessMsg("Correo electrónico actualizado exitosamente");
            await setTimeout(() => {
              setSuccessMsg("");
            }, 1000);
          })
          .catch((error) => {
            setErrorMsg(error.message);
          });
      }
      if (newValues.password) {
        if (newValues.oldPassword) {
          const credential = EmailAuthProvider.credential(
            auth.currentUser.email,
            newValues.oldPassword
          );
          reauthenticateWithCredential(auth.currentUser, credential)
            .then(() => {
              updatePassword(auth.currentUser, newValues.password)
                .then(async () => {
                  setErrorMsg("");
                  setSuccessMsg("Contraseña actualizada exitosamente");
                  await setTimeout(() => {
                    setSuccessMsg("");
                  }, 1000);
                })
                .catch((error) => {
                  setErrorMsg(error.message);
                });
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
        } else {
          setErrorMsg("Se requiere la contraseña antigua para actualizarla");
        }
      }
    } else {
      setErrorMsg("Por favor complete todos los campos requeridos");
    }
  };

  return (
    <>
      <AdminHeader />
      <AdminSideBar />
      <div className="main-panel">
        <div className="content">
          <div className="container-fluid">
            <h4 className="page-title">Perfil</h4>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">Editar Perfil</div>
                  </div>
                  <div className="card-body px-4">
                    <div className="form-group">
                      <label htmlFor="username">Nombre de Usuario</label>
                      <input
                        type="text"
                        className="form-control input-pill"
                        id="username"
                        value={newValues.name}
                        onChange={(event) =>
                          setNewValues((prev) => ({ ...prev, name: event.target.value }))
                        }
                        placeholder="Ingrese el nuevo nombre de usuario"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Correo Electrónico</label>
                      <input
                        type="email"
                        className="form-control input-pill"
                        id="email"
                        value={newValues.email}
                        onChange={(event) =>
                          setNewValues((prev) => ({ ...prev, email: event.target.value }))
                        }
                        placeholder="Ingrese el nuevo correo electrónico"
                      />
                      <small id="emailHelp" className="form-text text-muted">
                        ¡Usarás esta dirección de correo electrónico para iniciar sesión la próxima vez!
                      </small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Contraseña Antigua</label>
                      <input
                        type="password"
                        className="form-control input-pill"
                        id="password"
                        onChange={(event) =>
                          setNewValues((prev) => ({ ...prev, oldPassword: event.target.value }))
                        }
                        placeholder="Contraseña Antigua"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Nueva Contraseña</label>
                      <input
                        type="password"
                        className="form-control input-pill"
                        id="password"
                        onChange={(event) =>
                          setNewValues((prev) => ({ ...prev, password: event.target.value }))
                        }
                        placeholder="Dejar en blanco para mantener la misma contraseña"
                      />
                    </div>
                  </div>

                  <div className="form-group px-4 mb-3">
                    <div className="text-center text-danger">{errorMsg}</div>
                    <div className="text-center text-success">{successMsg}</div>
                    <button className="btn btn-success mx-3" onClick={handleUpdateProfile}>
                      Actualizar Perfil
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
