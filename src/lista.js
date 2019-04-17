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

const nombres = presuntos.map(task => task.nombre);

const ceros = [0,0,0,0]
const manejo = [0,0,0,0]

class Titulo extends React.Component{
  render(){
  return (              
    <div>
      <h1>{this.props.title}</h1>
      <h2>{this.props.sbtitle}</h2>
    </div>
    )
  }
}

class Details extends React.Component{
  render(){
    return <h1>{this.props.details}</h1>
  }
}

class Button extends React.Component{
  render(){
    return (
      
      <tr><td>
      <button style = {{color: this.props.active? 'red': 'blue'}} onClick={() => {this.props.clickHandler(this.props.id, this.props.name)}}>
        {this.props.name}
      </button>
      </td></tr>
    )
  }
}



class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {activeArray:ceros, details:""}
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(id,details){
        var arr = [0,0,0,0]
        arr[id] = 1
        this.setState({activeArray:arr, details:details})
        console.log(id,details)
    }

    render(){
        const items = []
        for (const [index, value] of nombres.entries()) {
            items.push(<Button key={index}  id = {index} active = {this.state.activeArray[index]} clickHandler = {this.clickHandler} name={value}/>)
            console.log("active:"+this.state.activeArray[index]+ " - index: " + index + " - value " + value)
        }
        return (
          <div>
            <table><tbody>
              {items}
            </tbody></table>
            <Details details = {this.state.details}/>
          </div>
        )
    }
}

class Lista extends React.Component{
  render(){
    return (
      <div>
          <Titulo title = "Presuntos Responsables" sbtitle = "Acumulados" />
          <App/>
      </div>
    )
  } 
}


ReactDOM.render(
  <Lista/>,
  document.getElementById("root")
)