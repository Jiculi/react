import React from "react";
import ReactDOM from "react-dom";

const estiloE = {
  margin: '20px 0',
  padding: '10px',
  border: '1px solid #c8c8c8',
  fontsize: '14px'
}

const presuntos = [{"nombre":"Fuentes Burgos Pedro","cont":"5691"},
                  {"nombre":"Gomez Campos Jorge","cont":"5692"},
                  {"nombre":"Ahued Ortega Jose Armando","cont":"5693"},
                  {"nombre":"Sanchez Salguero Ramon","cont":"5694"}];

const elements = presuntos.map(task => task.nombre);

function Titulo(props){
  return (              
    <div>
      <h1>{props.title}</h1>
      <h2>{props.sbtitle}</h2>
    </div>
    )
}
                  
function Item(props){
  return (
    <div>
      <td style = {estiloE}> {presuntos[props.indice].nombre}</td>
    </div>
  )
}

function Lista(props){
  return (
    <div>
        <Titulo title = "Presuntos Responsables" sbtitle = "Acumulados" />
        
        <ul>
          {elements.map((value, index) => {
              return <li key={index}>{value}</li>
          })}
        </ul>
                 

        <App/>
    </div>
  ) 
}



class Details extends React.Component{
  render(){
    return <h1>{this.props.details}</h1>
  }
}

class Button extends React.Component{
  render(){
    return (
      <button style = {{color: this.props.active? 'red': 'blue'}} onClick={() => {this.props.clickHandler(this.props.id,this.props.name)}}>
        {this.props.name}
      </button>
    )
  }
}

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {activeArray:[0,0,0,0], details:""}
    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler(id,details){
    var arr = [0,0,0,0]
    arr[id] = 1
    this.setState({activeArray:arr,details:details})
    console.log(id,details)
  }
  render(){
    return (
      <div>
        <Button id = {0} active = {this.state.activeArray[0]} clickHandler = {this.clickHandler} name="bob"/>
        <Button id = {1} active = {this.state.activeArray[1]} clickHandler = {this.clickHandler} name="joe"/>
        <Button id = {2} active = {this.state.activeArray[2]} clickHandler = {this.clickHandler} name="tree"/>
        <Button id = {3} active = {this.state.activeArray[3]} clickHandler = {this.clickHandler} name="paco"/>
        <Details details = {this.state.details}/>
      </div>
    )
  }
}



ReactDOM.render(
  <Lista/>,
  document.getElementById("root")
)