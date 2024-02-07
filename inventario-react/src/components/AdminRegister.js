import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";

export default function AdminRegister() {
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/");
      }
    });
  }, []);
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmission = () => {
    if (values.name && values.email && values.password && values.confirmPassword) {
      setErrorMsg("");
      if (values.password === values.confirmPassword) {
        createUserWithEmailAndPassword(auth, values.email, values.password)
          .then(async (response) => {
            const user = response.user;
            await updateProfile(user, {
              displayName: values.name,
            });
            setSuccessMsg("Registro realizado con éxito");
            setTimeout(() => {
              setSuccessMsg("");
              navigate("/");
            }, 3000);
          })
          .catch((err) => {
            setErrorMsg("Error en el registro. Verifica tus credenciales.");
          });
      } else {
        setErrorMsg("Las contraseñas no coinciden");
      }
    } else {
      setErrorMsg("Por favor, completa todos los campos obligatorios");
    }
  };

  return (
    <>
      <div className="d-flex h-100">
        <div className="card container col-10 col-sm-10 col-md-9 col-lg-8 mt-2 p-0 align-self-center border-success">
          <div className="card-header border-dark">
            <div className="mt-2 text-center">
              <h3>MediCare</h3>
              <h4>Registro</h4>
            </div>
          </div>
          <div className="card-body">
            <div className="container align-self-center">
              <div className="form-group">
                <label htmlFor="name">Nombre Completo</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Nombre Completo"
                  onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Correo Electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Correo Electrónico"
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, email: event.target.value }))
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Contraseña"
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, password: event.target.value }))
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword2">Confirmar Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword2"
                  placeholder="Confirmar Contraseña"
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, confirmPassword: event.target.value }))
                  }
                />
              </div>
              <div className="text-center text-danger">{errorMsg}</div>
              <div className="text-center text-success">{successMsg}</div>
              <div className="form-group mt-4">
                <button
                  type="submit"
                  onClick={handleSubmission}
                  className="btn btn-success btn-block">
                  Registrarse
                </button>
              </div>
              <div className="form-group text-center">
                ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
