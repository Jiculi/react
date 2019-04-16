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
        

                 

        <App/>
    </div>
  ) 
}

/*

        <ul>
          {elements.map((value, index) => {
              return <li key={index}>{value}</li>
          })}
        </ul>  

*/


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

//     this.state = {activeArray:[0,0,0,0], details:""}
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

    const items = []

    for (const [index, value] of elements.entries()) {
      items.push(<Button key={index}  id = {index} active = {this.state.activeArray[index]} clickHandler = {this.clickHandler} name={value}/>)
      console.log("active:"+this.state.activeArray[index])
      console.log({index})
    }

    return (
      <div>
        {items}
        <Details details = {this.state.details}/>
      </div>
    )
  }
}

ReactDOM.render(
  <Lista/>,
  document.getElementById("root")
)