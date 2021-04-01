import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'; 

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [voto, setVotar] = useState(props.anecdotes)

  const aleatoria = () =>{
    var tamañoAnecdota = props.anecdotes.length -1
    var elejida = Math.floor(Math.random()*(tamañoAnecdota))+1
    setSelected(elejida)
  }

  const votacion = () => {
    let votar_anect = [...voto]
    votar_anect[selected].votar += 1
    setVotar(votar_anect)
  }

  var almacen = [...voto]
  let mayor = almacen.sort((a,b) => b.votar - a.votar)

  return (
    <div className="container d-flex justify-content-center alig-items-center">
    <div class="card" style={{width:"18em"}}>
      <div class="card-body">
        <h2 className="card-title">Anecdota del Dia</h2>
        <p className="card-text">{voto[selected].anecdota}</p>
        <h6 className="card-subtitle mb-2 text-muted">has {voto[selected].votar}</h6>
        <button className="btn btn-danger" onClick={votacion}>Votar</button>
        <button className="btn btn-primary" onClick={aleatoria}>Siguiente</button>
        <h1 className="card-title">Anecdota mas Votada</h1>
        <p className="card-text">{mayor[0].anecdota} <b>con votos</b> {mayor[0].votar}</p>
      </div>
    </div>
    </div>
  )
}

const anecdotes = [
  {
    anecdota:'If it hurts, do it more often',
    votar:0,
  },
  {
    anecdota:'Adding manpower to a late software project makes it later!',
    votar:0,
  },
  {
    anecdota:'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    votar:0,
  },
  {
    anecdota:'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    votar:0,
  },
  {
    anecdota:'Premature optimization is the root of all evil.',
    votar:0,
  },
  {
    anecdota:'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    votar:0,
  }
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)