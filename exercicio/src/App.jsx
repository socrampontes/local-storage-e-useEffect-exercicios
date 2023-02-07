import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './styles.css';

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

function App() {
  const [tarefas, setTarefa] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filtro, setFiltro] = useState('');

  console.log(tarefas)
  console.log(inputValue)
  console.log(filtro)

  useEffect(() => {
    if(tarefas.length > 0){
      localStorage.setItem("tarefa", JSON.stringify(tarefas));
    }
  },[tarefas]);

  useEffect(() => {
    const tarefaStorage = JSON.parse(localStorage.getItem("tarefa"))
    if(tarefaStorage){
      setTarefa(tarefaStorage)
    }
  },[]);

  const onChangeInput = (event) => {
    setInputValue(event.target.value)
  };


  const criaTarefa = () => {
    const novaTarefa = [...tarefas,{id: Date.now(), texto: inputValue, completa:false}]
    const listaString = JSON.stringify(novaTarefa);
    localStorage.setItem("lista", listaString);
    setTarefa(novaTarefa)
    // recebeObjeto.texto = inputValue

  };

  const selectTarefa = (id) => {
    const novatarefa = tarefas.map((tarefa) =>{
      if(tarefa.id === id){
        tarefa.completa = !tarefa.completa
        // !tarefa.completa
      }
      else{
        tarefa.completa === tarefa.completa;
      }
    })
    setTarefa(novatarefa)
  };

  const onChangeFilter = (event) => {
    setFiltro(event.target.value)
  };

  const listaFiltrada = tarefas.filter((tarefa) => {
    switch (filtro) {
      case 'pendentes':
        return !tarefa.completa;
      case 'completas':
        return tarefa.completa;
      default:
        return true;
    }
  });

  return (
    <div className="App">
      <h1>Lista de tarefas</h1>
      <InputsContainer>
        <input value={inputValue} onChange={onChangeInput} />
        <button onClick={criaTarefa}>Adicionar</button>
      </InputsContainer>
      <br />

      <InputsContainer>
        <label>Filtro</label>
        <select value={filtro} onChange={onChangeFilter}>
          <option value="">Nenhum</option>
          <option value="pendentes">Pendentes</option>
          <option value="completas">Completas</option>
        </select>
      </InputsContainer>
      <TarefaList>
        {listaFiltrada.map((tarefa) => {
          return (
            <Tarefa
              completa={tarefa.completa}
              onClick={() => selectTarefa(tarefa.id)}
            >
              {tarefa.texto}
            </Tarefa>
          );
        })}
      </TarefaList>
    </div>
  );
}

export default App;
