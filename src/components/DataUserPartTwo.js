import React from "react";
import "./style/style_components.css";
import img from '../media/image.png';

const DataUserPartTwo = props =>{
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
              id="emailUser"
              name="emailUser"
              value= {props.valores.emailUser}
              type="email"
              placeholder=" "
              />   
              <label className="form-control-placeholder label-register">Correo Electrónico*</label>  
            </div>

            <div style={{marginBottom:"25px", marginTop:"2%"}} className="form-group form-group-2">
              <input
              className='form-control label-input'
              onChange={ props.onChange }
              required
              id="numberPhone"
              onKeyPress={props.onKeyPressNumber}
              name="numberPhone"
              value= {props.valores.numberPhone}
              type="text"
              placeholder=" "
              />   
              <label className="form-control-placeholder label-register">Celular*</label>  
            </div>

            <div style={{marginBottom:"25px", marginTop:"2%"}} className="form-group form-group-2">
              <input
              className='form-control label-input'
              onChange={ props.onChange }
              required
              id="expeditionDate"
              name="expeditionDate"
              value= {props.valores.expeditionDate}
              type="date"
              placeholder=" "
              />   
              <label className="form-control-placeholder label-register">Expedición del documento*</label>  
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

export default DataUserPartTwo;