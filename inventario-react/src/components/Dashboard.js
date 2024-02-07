import React from "react";
import AdminHeader from "./layouts/AdminHeader";
import AdminSideBar from "./layouts/AdminSideBar";
import AdminFooter from "./layouts/AdminFooter";

export default function Dashboard(props) {
  return (
    <>
      <AdminHeader />
      <AdminSideBar />
      <div className="main-panel">
        <div className="content">
          <div className="container-fluid">
            <h4 className="page-title">Dashboard</h4>
            <div className="row">
              <div className="col-md-3">
                <div className="card card-stats card-warning">
                  <div className="card-body ">
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center">
                          <i className="la la-users"></i>
                        </div>
                      </div>
                      <div className="col-7 d-flex align-items-center">
                        <div className="numbers">
                          <p className="card-category">Visitantes</p>
                          <h4 className="card-title">1,294</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card card-stats card-success">
                  <div className="card-body ">
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center">
                          <i className="la la-bar-chart"></i>
                        </div>
                      </div>
                      <div className="col-7 d-flex align-items-center">
                        <div className="numbers">
                          <p className="card-category">Ventas</p>
                          <h4 className="card-title">$ 1,345</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card card-stats card-danger">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center">
                          <i className="la la-newspaper-o"></i>
                        </div>
                      </div>
                      <div className="col-7 d-flex align-items-center">
                        <div className="numbers">
                          <p className="card-category">Subscriptores</p>
                          <h4 className="card-title">1303</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card card-stats card-primary">
                  <div className="card-body ">
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center">
                          <i className="la la-check-circle"></i>
                        </div>
                      </div>
                      <div className="col-7 d-flex align-items-center">
                        <div className="numbers">
                          <p className="card-category">Orden</p>
                          <h4 className="card-title">576</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row row-card-no-pd">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <p className="fw-bold mt-1">Mi Balance</p>
                    <h4>
                      <b>$ 3,018</b>
                    </h4>
                    <a href="#" className="btn btn-primary btn-full text-left mt-3 mb-3">
                      <i className="la la-plus"></i> Añadir Balance
                    </a>
                  </div>
                  <div className="card-footer">
                    <ul className="nav">
                      <li className="nav-item">
                        <a className="btn btn-default btn-link" href="#">
                          <i className="la la-history"></i> Historial
                        </a>
                      </li>
                      <li className="nav-item ml-auto">
                        <a className="btn btn-default btn-link" href="#">
                          <i className="la la-refresh"></i> Recargar
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="card">
                  <div className="card-body">
                    <div className="progress-card">
                      <div className="d-flex justify-content-between mb-1">
                        <span className="text-muted">Profit</span>
                        <span className="text-muted fw-bold"> $3K</span>
                      </div>
                      <div className="progress mb-2" style={{ height: "7px" }}>
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: "78%" }}
                          aria-valuenow="78"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="78%"></div>
                      </div>
                    </div>
                    <div className="progress-card">
                      <div className="d-flex justify-content-between mb-1">
                        <span className="text-muted">Ordenes</span>
                        <span className="text-muted fw-bold"> 576</span>
                      </div>
                      <div className="progress mb-2" style={{ height: "7px" }}>
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "65%" }}
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="65%"></div>
                      </div>
                    </div>
                    <div className="progress-card">
                      <div className="d-flex justify-content-between mb-1">
                        <span className="text-muted">Tareas Completadas</span>
                        <span className="text-muted fw-bold"> 70%</span>
                      </div>
                      <div className="progress mb-2" style={{ height: "7px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="70%"></div>
                      </div>
                    </div>
                    <div className="progress-card">
                      <div className="d-flex justify-content-between mb-1">
                        <span className="text-muted">Rango Progreso</span>
                        <span className="text-muted fw-bold"> 60%</span>
                      </div>
                      <div className="progress mb-2" style={{ height: "7px" }}>
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "60%" }}
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="60%"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card card-stats">
                  <div className="card-body">
                    <p className="fw-bold mt-1">Estadisticas</p>
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center icon-warning">
                          <i className="la la-pie-chart text-warning"></i>
                        </div>
                      </div>
                      <div className="col-7 d-flex align-items-center">
                        <div className="numbers">
                          <p className="card-category">Numeror</p>
                          <h4 className="card-title">150GB</h4>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center">
                          <i className="la la-heart-o text-primary"></i>
                        </div>
                      </div>
                      <div className="col-7 d-flex align-items-center">
                        <div className="numbers">
                          <p className="card-category">Seguidores</p>
                          <h4 className="card-title">+45K</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header ">
                    <h4 className="card-title">Table</h4>
                    <p className="card-category">Tabla Usuarios</p>
                  </div>
                  <div className="card-body">
                    <table className="table table-head-bg-success table-striped table-hover">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Nombre</th>
                          <th scope="col">Apellido</th>
                          <th scope="col">Handle</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td colSpan="2">Larry the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card card-tasks">
                  <div className="card-header ">
                    <h4 className="card-title">Tareas</h4>
                    <p className="card-category">Lista de tareas</p>
                  </div>
                  <div className="card-body ">
                    <div className="table-full-width">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    className="form-check-input  select-all-checkbox"
                                    type="checkbox"
                                    data-select="checkbox"
                                    data-target=".task-select"
                                  />
                                  <span className="form-check-sign"></span>
                                </label>
                              </div>
                            </th>
                            <th>Tarea</th>
                            <th>Accion</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input task-select" type="checkbox" />
                                  <span className="form-check-sign"></span>
                                </label>
                              </div>
                            </td>
                            <td>Planificación de la nueva estructura del proyecto.</td>
                            <td className="td-actions text-right">
                              <div className="form-button-action">
                                <button
                                  type="button"
                                  data-toggle="tooltip"
                                  title="Edit Task"
                                  className="btn btn-link <btn-simple-primary">
                                  <i className="la la-edit"></i>
                                </button>
                                <button
                                  type="button"
                                  data-toggle="tooltip"
                                  title="Remove"
                                  className="btn btn-link btn-simple-danger">
                                  <i className="la la-times"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input task-select" type="checkbox" />
                                  <span className="form-check-sign"></span>
                                </label>
                              </div>
                            </td>
                            <td>Actualizar Fuentes</td>
                            <td className="td-actions text-right">
                              <div className="form-button-action">
                                <button
                                  type="button"
                                  data-toggle="tooltip"
                                  title="Edit Task"
                                  className="btn btn-link <btn-simple-primary">
                                  <i className="la la-edit"></i>
                                </button>
                                <button
                                  type="button"
                                  data-toggle="tooltip"
                                  title="Remove"
                                  className="btn btn-link btn-simple-danger">
                                  <i className="la la-times"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input task-select" type="checkbox" />
                                  <span className="form-check-sign"></span>
                                </label>
                              </div>
                            </td>
                            <td>Agregar nueva publicacion</td>
                            <td className="td-actions text-right">
                              <div className="form-button-action">
                                <button
                                  type="button"
                                  data-toggle="tooltip"
                                  title="Edit Task"
                                  className="btn btn-link <btn-simple-primary">
                                  <i className="la la-edit"></i>
                                </button>
                                <button
                                  type="button"
                                  data-toggle="tooltip"
                                  title="Remove"
                                  className="btn btn-link btn-simple-danger">
                                  <i className="la la-times"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input task-select" type="checkbox" />
                                  <span className="form-check-sign"></span>
                                </label>
                              </div>
                            </td>
                            <td>Finalizar la propuesta de diseño.</td>
                            <td className="td-actions text-right">
                              <div className="form-button-action">
                                <button
                                  type="button"
                                  data-toggle="tooltip"
                                  title="Edit Task"
                                  className="btn btn-link <btn-simple-primary">
                                  <i className="la la-edit"></i>
                                </button>
                                <button
                                  type="button"
                                  data-toggle="tooltip"
                                  title="Remove"
                                  className="btn btn-link btn-simple-danger">
                                  <i className="la la-times"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="card-footer ">
                    <div className="stats">
                      <i className="now-ui-icons loader_refresh spin"></i> Actualizado hace 3 minutos
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
