import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import AdminHeader from "./layouts/AdminHeader";
import AdminSideBar from "./layouts/AdminSideBar";
import AdminFooter from "./layouts/AdminFooter";
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default function AddMedicine() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const categoriesCollectionReference = collection(db, "Categoria");
  const getCategories = async () => {
    const data = await getDocs(categoriesCollectionReference);
    setCategories(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const [medTypes, setMedTypes] = useState([]);
  const medTypesCollectionRef = collection(db, "Tipo");
  const getTypes = async () => {
    const data = await getDocs(medTypesCollectionRef);
    setMedTypes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getCategories();
    getTypes();
  }, []);
  const medicinesCollectionRef = collection(db, "Inventario");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [medicine, setMedicine] = useState({
    name: "",
    power: "",
    category: "",
    type: "",
    price: "",
    stock: "",
  });

  const handleAddMedicine = async () => {
    if (
      medicine.name &&
      medicine.power &&
      medicine.category &&
      medicine.type &&
      medicine.price &&
      medicine.stock
    ) {
      setErrorMsg("");
      await addDoc(medicinesCollectionRef, {
        name: medicine.name,
        power: medicine.power,
        category: medicine.category,
        type: medicine.type,
        price: medicine.price,
        stock: medicine.stock,
      });
      setSuccessMsg("¡Medicamento agregado exitosamente!");
      setTimeout(() => {
        setSuccessMsg("");
        navigate("/inventory");
      }, 1000);
    } else {
      setErrorMsg("¡Por favor complete todos los campos obligatorios!");
    }
  };

  return (
    <>
      <AdminHeader />
      <AdminSideBar />
      <div className="main-panel">
        <div className="content">
          <div className="container-fluid">
            <h4 className="page-title">Crear Medicamento</h4>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">
                      Detalles del Nuevo Medicamento
                      <Link to="/inventory" className="btn btn-danger btn-sm float-right">
                        VOLVER
                      </Link>{" "}
                    </div>
                  </div>
                  <div className="card-body px-4">
                    <div className="form-group">
                      <label htmlFor="name">Nombre del Medicamento</label>
                      <input
                        type="text"
                        className="form-control"
                        value={medicine.name}
                        id="name"
                        onChange={(event) =>
                          setMedicine((prev) => ({ ...prev, name: event.target.value }))
                        }
                        placeholder="Ingrese el nombre del medicamento"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="power">Potencia del Medicamento</label>
                      <input
                        type="text"
                        className="form-control"
                        value={medicine.power}
                        id="power"
                        onChange={(event) =>
                          setMedicine((prev) => ({ ...prev, power: event.target.value }))
                        }
                        placeholder="Ingrese la potencia del medicamento"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlSelect1">Categoría del Medicamento</label>
                      <select
                        className="form-control"
                        onChange={(event) =>
                          setMedicine((prev) => ({ ...prev, category: event.target.value }))
                        }
                      >
                        <option value="">Seleccione una categoría...</option>
                        {categories.map((category) => (
                          <option key={category.id} value={category.name}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlSelect2">Tipo de Medicamento</label>
                      <select
                        className="form-control"
                        onChange={(event) =>
                          setMedicine((prev) => ({ ...prev, type: event.target.value }))
                        }
                      >
                        <option value="">Seleccione un tipo...</option>
                        {medTypes.map((medType) => (
                          <option key={medType.id} value={medType.name}>
                            {medType.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="price">Precio del Medicamento (en ₹.)</label>
                      <input
                        type="text"
                        className="form-control"
                        value={medicine.price}
                        id="price"
                        onChange={(event) =>
                          setMedicine((prev) => ({ ...prev, price: event.target.value }))
                        }
                        placeholder="Ingrese el precio del medicamento"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="stock">Stock del Medicamento</label>
                      <input
                        type="text"
                        className="form-control"
                        value={medicine.stock}
                        id="stock"
                        onChange={(event) =>
                          setMedicine((prev) => ({ ...prev, stock: event.target.value }))
                        }
                        placeholder="Ingrese el stock del medicamento"
                      />
                    </div>
                  </div>

                  <div className="form-group px-4 mb-3">
                    <div className="text-center text-danger">{errorMsg}</div>
                    <div className="text-center text-success">{successMsg}</div>
                    <button className="btn btn-primary mx-3" onClick={handleAddMedicine}>
                      Agregar Medicamento
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
