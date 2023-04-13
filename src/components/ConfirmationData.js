import React from "react";

const ConfirmationData = props => {
    return(
        <div className="App">
            <div className='user-form-container'>
                <div className='container container-form-onboarding-confirmation'>
                    <div style={{width:"100%", marginTop:"15px"}}>
                        <table className="table">
                            <tbody>
                            <tr>
                                <th scope="row">Tipo de Documento</th>
                                <td>{props.valores.typeDocument}</td>
                                </tr>
                                <tr>
                                <th scope="row">Número de Documento</th>
                                <td>{props.valores.numberDocument}</td>
                                </tr>
                                <tr>
                                <th scope="row">Nombre(s)</th>
                                <td>{props.valores.nameUser}</td>
                                </tr>
                                <tr>
                                <th scope="row">Apellidos</th>
                                <td>{props.valores.lastnameUser}</td>
                                </tr>
                                <tr>
                                <th scope="row">Correo Electrónico</th>
                                <td>{props.valores.emailUser}</td>
                                </tr>
                                <tr>
                                <th scope="row">Número de Celular</th>
                                <td>{props.valores.numberPhone}</td>
                                </tr>
                                <tr>
                                <th scope="row">Fecha de expedición</th>
                                <td>{props.valores.expeditionDate}</td>
                                </tr>
                                <tr>
                                <th scope="row">Dirección</th>
                                <td>{props.valores.homeAddress}</td>
                                </tr>
                                <tr>
                                <th scope="row">Departamento</th>
                                <td>{props.valores.domicileDepartment}</td>
                                </tr>
                                <tr>
                                <th scope="row">Municipio</th>
                                <td>{props.valores.domicileMunicipality}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="container" style={{width:"60%", marginTop:"10px", marginLeft:"auto", marginRight:"auto"}}>
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <button className="btn btn-link m-2 px-4" onClick={props.pasoAnterior}>
                                    Atras
                                </button>
                            </div>
                            <div className="col-sm-12 col-md-6">
                            <button className="btn btn-primary m-2" onClick={props.pasoSiguiente}>
                                Siguiente
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default ConfirmationData;