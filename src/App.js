import { Component } from 'react';
import { Select } from 'antd';
import api from './api'
import './App.css';

class App extends Component{

  state = {
    units: [],
    selectedUnit: [],
  }

  async componentDidMount() {
    const response = await api.get('/api/test')

    await this.setState({units: response.data})
  }


  render(){
    const { Option } = Select;
    const {units} = this.state;
    const {selectedUnit} = this.state;
    // console.log(units.units)

    function handleChange(value) {
      console.log(`selected ${value}`)

      if(value === "Unidade 1"){
        var i = 0
      } else if(value === "Unidade 2") {
        var i = 1
      } else {
        console.log("erro")
      }

      //console.log(i)

      var unit = units.units[i]

      console.log(unit)
    }
    if (!units.units) return <></>;
    return(
      <div className="App">
        <header>
          <div className="Select">
            <Select defaultValue="Selecione" style={{ width: 120 }} onChange={handleChange}>
              {units.units.map(unit => (
                <Option value={unit.name} key={unit.name}>{unit.name}</Option>
              ))
              }
            </Select>
          </div>
          <h1>Tractian</h1>
        </header>
      </div>
    )
  }
}

export default App;