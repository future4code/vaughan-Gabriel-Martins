import React from 'react'
import styled from 'styled-components'
import './styles.css'

import edit from './img/edit.svg';

const TarefaList = styled.ul`
  padding: 0;
  width: 300px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`


const DivisoriaDiv1 = styled.div`
 margin: 10px; 
 border:1px solid black;
 `

const DivisoriaDiv2 = styled.div`
 margin: 10px; 
 border:1px solid black;
 `


class App extends React.Component {
  state = {
    tarefas: [{
      id: 12,
      texto: 'Texto da um',
      completa: true,
    }, {
      id: Date.now(), // Explicação abaixo
      texto: 'Texto da dois',
      completa: true, // Indica se a tarefa está completa (true ou false)
    }

    ],
    inputValue: '',
    filtro: '',
  }

  componentDidUpdate() {

    localStorage.setItem('listaTarefa', JSON.stringify(this.state.tarefas))
  };

  componentDidMount() {
    this.setState({
      tarefas: JSON.parse(localStorage.getItem('listaTarefa'))
    })

  };

  onChangeInput = (e) => {
    return (
      this.setState({
        inputValue: e.target.value
      }))
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    }
    this.setState({
      tarefas: [...this.state.tarefas, novaTarefa],
      inputValue: ''
    })
  }

  selectTarefa = (id, e) => {

    const novaLista = this.state.tarefas.map(item => {
      if (id === item.id) {
        const novaTarefa = {
          ...item,
          completa: !item.completa
        }
        return novaTarefa
      } else {
        return item
      }
    })
    this.setState({ tarefas: novaLista })

    // if(e.detail >=2 ){ 

    //   console.log(id)
    //   if(window.confirm('Deseja pagar a tarefa ?')){

    //      this.setState({tarefas: this.state.tarefas.filter(item => item.id !==id)  })
    //       console.log(this.state.tarefas)
    //   }     
    // }
  }
  apagarTodasMessagens = () => {
    console.log('apagartudo')
    this.setState({ tarefas: [] })

  }

  apagaMessagem = (id) => {
    console.log(id)
    if (window.confirm('Deseja pagar a tarefa ?')) {

      this.setState({ tarefas: this.state.tarefas.filter(item => item.id !== id) })
      console.log(this.state.tarefas)
    }

  }


  onChangeFilter = (event) => {
    this.setState({
      filtro: (event.target.value)
    })
    console.log(this.state.filtro)

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
            onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        {/*!Select     */}
        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>

          <button onClick={this.apagarTodasMessagens}>Apagar Todas</button>
        <TarefaList>

          {(this.state.filtro === 'completas') || <h3>Pendentes</h3>}
          <DivisoriaDiv1>
            {listaFiltrada.filter(item => item.completa !== true).map(tarefa => {
              return (
                <div className="box">
                  <button onClick={() => this.apagaMessagem(tarefa.id)}>X</button>
                  <button>edit</button>
                  <Tarefa
                    completa={tarefa.completa}
                    onClick={(e) => this.selectTarefa(tarefa.id, e)}
                  >
                    {tarefa.texto}
                  </Tarefa>
                </div>
              )
            })}
          </DivisoriaDiv1>
          {(this.state.filtro === 'pendentes') || <h3>Completas</h3>}
          <DivisoriaDiv2>
            {listaFiltrada.filter(item => item.completa === true).map(tarefa => {
              return (
                <div className="box">
                  <button onClick={() => this.apagaMessagem(tarefa.id)}>X</button>
                  <button>edit</button>
                  <Tarefa
                    completa={tarefa.completa}
                    onClick={(e) => this.selectTarefa(tarefa.id, e)}
                  >
                    {tarefa.texto}
                  </Tarefa>
                </div>
              )
            })}
          </DivisoriaDiv2>


        </TarefaList>
      </div>
    )
  }
}

export default App
