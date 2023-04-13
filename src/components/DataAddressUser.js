import React from "react";
import "./style/style_components.css";
import img from '../media/image.png';

const DataAddressUser = props =>{

    return (
        <div className="App">
        <div className='user-form-container'>
          <div className='container container-form-onboarding'>
            <p style={{textAlign:"center", marginTop:"2%"}}>
              <img src={`${img}`} className="rounded mx-auto d-block image_logo" alt="image_logo"></img>
            </p>

            <div style={{marginBottom:"25px", marginTop:"2%"}} className="form-group form-group-2">
              <input
              className='form-control label-input'
              onChange={ props.onChange }
              required
              id="homeAddress"
              name="homeAddress"
              value= {props.valores.homeAddress}
              type="text"
              placeholder=" "
              />   
              <label className="form-control-placeholder label-register">Dirección del domicilio*</label>  
            </div>

            <div className="form-group-2 mb-4" style={{marginTop:"2%"}}>
              <select className="custom-select" name="domicileDepartment" onChange={ props.onChangeDepartment } value= { props.valores.domicileDepartment }>
              <option value="" disabled defaultValue>Departamento Domicilio...</option>
                {props.departments.map((dpto) => {
                  return <option key={dpto.nameDepartment} value={dpto.nameDepartment}>{dpto.nameDepartment}</option>
                })}
              </select>
            </div>


            <div className="form-group-2 mb-4" style={{marginTop:"2%"}}>
              <select className="custom-select" name="domicileMunicipality" onChange={ props.onChange } value= { props.valores.domicileMunicipality }>
              <option value="" defaultValue>Municipio Domicilio...</option>
                {
                    props.departments[props.valores.numberDepartment].municipalities.map((municipality) => {
                      
                     return <option key={municipality.value} value={municipality.value}>{municipality.value}</option>
                    })
                }
              </select>
            </div>


           

            <div className="container" style={{width:"60%", marginTop:"10px", marginBottom:"3%", marginLeft:"auto", marginRight:"auto"}}>
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

export default DataAddressUser;