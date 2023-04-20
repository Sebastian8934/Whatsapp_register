import React, { Component } from 'react';
import Swal from 'sweetalert2';
import axios from "axios";
import './App.css';
import departamentos from "./utilities/data.json";
import DataUserPartOne from './components/DataUserPartOne';
import DataUserPartTwo from './components/DataUserPartTwo';
import DataAddressUser from './components/DataAddressUser';
import ConfirmationData from './components/ConfirmationData';
import messageResponse from './utilities/messageResponse.json';

class App extends Component {

  state = {
    paso: 1,
    typeDocument: "",
    numberDocument : "",
    nameUser: "",
    lastnameUser: "",
    emailUser: "",
    numberPhone: "",
    expeditionDate: "",
    homeAddress: "",
    domicileDepartment: "",
    domicileMunicipality: "",
    numberDepartment: 0
  }

  async sendData(){
    Swal.fire({
      title:'Registrando Usuario',
      timerProgressBar:true,
      didOpen: () => {
        Swal.showLoading()
      }
    });
    await axios.post("https://firm-service.onrender.com/registers/",{
    //await axios.post("http://localhost:4000/",{
      typeDocument: this.state.typeDocument,
      dni: parseInt(this.state.numberDocument),
      name: this.state.nameUser,
      lastname: this.state.lastnameUser,
      email: this.state.emailUser,
      phone:parseInt(this.state.numberPhone),
      expeditionDate:new Date(this.state.expeditionDate),
      homeAddress:this.state.homeAddress,
      domicileDepartment: this.state.domicileDepartment,
      domicileMunicipality:this.state.domicileMunicipality
    }).then((response) => {
      console.log(response);
      if (response.data.statusCode === 200) {
      //if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Exito',
          text: 'Usuario registrado exitosamente.',
          confirmButtonColor:'#1D71B8',
          confirmButtonText:'Aceptar'
        });
        this.setState({
          paso: 1,
          typeDocument: "",
          numberDocument : "",
          nameUser: "",
          lastnameUser: "",
          emailUser: "",
          numberPhone: "",
          expeditionDate: "",
          homeAddress: "",
          domicileDepartment: "",
          domicileMunicipality: "",
          numberDepartment: 0
        });
      }else {
        Swal.fire({
          icon: 'error',
          title: 'Ocurrio un error',
          text: 'No se ha podido registrar el usuario.',
          confirmButtonText:'Aceptar'
        })
      }
      
    }).catch((err)=>{
      Swal.fire({
        icon: 'error',
        title: 'Ocurrio un error',
        text: 'Error al conectarse con el servidor.',
        confirmButtonText:'Aceptar'
      })
    })
  }

  validateLong(text){
    if (text.length >= 3) {
      return true;
    }
    else{
      return false;
    }
  }

  validateForm3Params(input1, input2, input3, msjErr1, msjErr2, msjErr3){
    if (input1 !== "" && input2 !== "" && input3 !== "") {
      if (this.validateLong(input1) && this.validateLong(input2) && this.validateLong(input3)) {
        const { paso } = this.state;
        this.setState({
          paso: paso + 1
        });
      }else{
        if (!this.validateLong(input1)) {
          Swal.fire({icon:"error",confirmButtonColor:'#1D71B8', text:msjErr1, confirmButtonText: messageResponse.CONFIRM_BUTTON_TITLE});
        }else if(!this.validateLong(input2)){
          Swal.fire({icon:"error",confirmButtonColor:'#1D71B8', text:msjErr2, confirmButtonText: messageResponse.CONFIRM_BUTTON_TITLE});
        }else{
          Swal.fire({icon:"error",confirmButtonColor:'#1D71B8', text:msjErr3, confirmButtonText:messageResponse.CONFIRM_BUTTON_TITLE});
        }
      }
    }else{
      Swal.fire({icon:"info",confirmButtonColor:'#1D71B8', text: messageResponse.INPUTS_REQUIRED, confirmButtonText:messageResponse.CONFIRM_BUTTON_TITLE});
    }
  }

  pasoSiguiente = () => {
    
    switch (this.state.paso) {
      case 1:
        if (this.state.typeDocument !== "") {
          this.validateForm3Params(this.state.numberDocument, this.state.nameUser, this.state.lastnameUser,
             messageResponse.LONG_DOC_ERR, messageResponse.LONG_NAME_ERR, messageResponse.LONG_LASTNAME_ERR);
        }else{
          Swal.fire({icon:"info",confirmButtonColor:'#1D71B8', text: messageResponse.LOG_TYPE_DOCUMENT_ERR, confirmButtonText:messageResponse.CONFIRM_BUTTON_TITLE});
        }
        break;
      case 2:
        this.validateForm3Params(this.state.emailUser, this.state.numberPhone, this.state.expeditionDate,
          messageResponse.LONG_EMAIL_ERR, messageResponse.LONG_PHONE_ERR, messageResponse.LONG_EXPEDITIONDATE_ERR);
        break;
      case 3:
        this.validateForm3Params(this.state.homeAddress, this.state.domicileDepartment, this.state.domicileMunicipality,
          messageResponse.LONG_HOMEADRESS_ERR, messageResponse.LONG_DEPARTMENT_ERR, messageResponse.LONG_MUNICIPALY_ERR);
        break;

      case 4:
        this.sendData();
        break;
    
      default:
        break;
    }
    
  };

  pasoAnterior = () => {
    const { paso } = this.state;
    this.setState({
      paso: paso - 1
    });
  };

  onChange = (event) => {
    event.preventDefault();
    this.setState({
        [event.target.name]: event.target.value
    });
    
  }

  onChangeDepartment = (event) => {
    event.preventDefault();
    this.setState({
        [event.target.name]: event.target.value
    });
    this.setState({
      domicileMunicipality:""
    });

    setTimeout(() => {
      if (this.state.domicileDepartment !== "") {
        for (let index = 0; index < departamentos.length; index++) {
          const element = departamentos[index];
          if (element.nameDepartment === this.state.domicileDepartment) {
            this.setState({
              numberDepartment:element.numberDepartment
            });
          }
        }
      }
      else {
        this.setState({
          numberDepartment:0
        });
      }
    }, 100);
    
  }

  onKeyPressNumber= e => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  }

  onKeyPressWord = e => {
      if (!/[A-Za-z\u00f1\u00d1\s]/.test(e.key)) {
        e.preventDefault();
      }
  }
  

  render() {
    
    switch (this.state.paso) {
      
      case 1:
        return (
          <DataUserPartOne
            onChange={this.onChange}
            pasoSiguiente={this.pasoSiguiente}
            onKeyPressWord={this.onKeyPressWord}
            onKeyPressNumber={this.onKeyPressNumber}
            valores={this.state}
          />
        );
      case 2:
        return(
          <DataUserPartTwo
          onChange={this.onChange}
          pasoSiguiente={this.pasoSiguiente}
          onKeyPressWord={this.onKeyPressWord}
          onKeyPressNumber={this.onKeyPressNumber}
          pasoAnterior={this.pasoAnterior}
          valores={this.state}
        />
        );
        case 3:
          
        return(
          <DataAddressUser
          onChange={this.onChange}
          onChangeDepartment = {this.onChangeDepartment}
          pasoSiguiente={this.pasoSiguiente}
          onKeyPressWord={this.onKeyPressWord}
          onKeyPressNumber={this.onKeyPressNumber}
          pasoAnterior={this.pasoAnterior}
          valores={this.state}
          departments = {departamentos}
        />
        );
      case 4:
        return (
          <ConfirmationData
          pasoSiguiente={this.pasoSiguiente}
          pasoAnterior={this.pasoAnterior}
          valores={this.state}
        />
        );
      default:
        return <div>Error</div>;
    }
  }
}

export default App;
