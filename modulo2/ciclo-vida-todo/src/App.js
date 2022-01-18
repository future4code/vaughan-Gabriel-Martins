import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [{
        id: 12, 
        texto: 'Texto da um',
        completa: true,
      },{
        id:Date.now(), // Explicação abaixo
        texto: 'Texto da dois',
        completa: true, // Indica se a tarefa está completa (true ou false)
      }
    
    ],
      inputValue: '',
      filtro: '', 
    }

  componentDidUpdate() {

    localStorage.setItem('listaTarefa',  JSON.stringify(this.state.tarefas) )
  };

  componentDidMount() {
   this.setState({
     tarefas: JSON.parse( localStorage.getItem('listaTarefa'))
   })

  };

  onChangeInput = (e) => {
    return(
      this.setState({
      inputValue: e.target.value 
      }))}

  criaTarefa = () => {
    const novaTarefa = {
      id:Date.now(), 
      texto: this.state.inputValue,
      completa: false, 
    }
    this.setState({
      tarefas: [...this.state.tarefas, novaTarefa ]
    })
  }

  selectTarefa = (id) => {
     
       const novaLista = this.state.tarefas.map(item => { 
         if(id === item.id){
           const novaTarefa = { 
             ...item, 
             completa:!item.completa
           }
           return novaTarefa
         }else { 
           return item
         }
        })
        this.setState({tarefas: novaLista})
        
     

  }

  onChangeFilter = (event) => {
    this.setState({
      filtro:(event.target.value)
    })
  
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })
    // console.log(listaFiltrada)
    console.log(this.state.filtro)
    
    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
         {/*!Input and button     */}
        <InputsContainer>
          <input value={this.state.inputValue} 
          onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

         {/*!Select     */}
        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>

          {/* List of text  */}
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
