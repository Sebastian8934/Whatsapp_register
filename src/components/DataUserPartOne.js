import React from "react";
import "./style/style_components.css";
import img from '../media/image.png';

const DataUserPartOne = props => {
    return (
      <div className="App">
        <div className='user-form-container'>
          <div className='container container-form-onboarding'>
            <p style={{textAlign:"center", marginTop:"2%"}}>
              <img src={`${img}`} className="rounded mx-auto d-block image_logo" alt="image_logo"></img>
            </p>

            <div className="form-group-2 mb-4" style={{marginTop:"2%"}}>
              <select className="custom-select" name="typeDocument" onChange={ props.onChange } value= { props.valores.typeDocument }>
                <option className="custom-select" value="" defaultValue>Tipo de documento...</option>
                <option value="Cédula de Ciudadanía">Cédula de Ciudadanía</option>
                <option value="Cédula de Extranjería">Cédula de Extranjería</option>
                <option value="Pasaporte">Pasaporte</option>
                <option value="Número de Identificación Tributario">Número de Identificación Tributario</option>
              </select>
            </div>

            <div style={{marginBottom:"25px",marginTop:"2%"}} className="form-group form-group-2">
              <input
              className='form-control label-input'
              onChange={ props.onChange }
              required
              id="numberDocument"
              onKeyPress={props.onKeyPressNumber}
              name="numberDocument"
              value= {props.valores.numberDocument}
              type="text"
              placeholder=" "
              />   
              <label className="form-control-placeholder label-register">Número de Documento*</label>  
            </div>

            <div style={{marginBottom:"25px", marginTop:"2%"}} className="form-group form-group-2">
              <input
              className='form-control label-input'
              onChange={ props.onChange }
              required
              id="nameUser"
              onKeyPress={props.onKeyPressWord}
              name="nameUser"
              value= {props.valores.nameUser}
              type="text"
              placeholder=" "
              />   
              <label className="form-control-placeholder label-register">Nombre(s)*</label>  
            </div>

            <div style={{marginBottom:"25px", marginTop:"2%"}} className="form-group form-group-2">
              <input
              className='form-control label-input'
              onChange={ props.onChange }
              required
              id="lastnameUser"
              onKeyPress={props.onKeyPressWord}
              name="lastnameUser"
              value= {props.valores.lastnameUser}
              type="text"
              placeholder=" "
              />   
              <label className="form-control-placeholder label-register">Apellidos*</label>  
            </div>

            <div style={{marginBottom:"3%", width:"80%"}} className="text-right">
              <button className="btn btn-primary" onClick={props.pasoSiguiente}>
                Siguiente
              </button>
            </div>

          </div>
        </div>
      </div>
        
    );
};

export default DataUserPartOne;