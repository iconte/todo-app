import './App.css'
import Todo from './components/todo/Todo'

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$2500' },
    { nome: 'Geladeira', preco: 'R$3000' },
    { nome: 'Smartphone', preco: 'R$1500' },
    { nome: 'Guitarra', preco: 'R$3500' },
  ],
  ativa: false
}

const App = () => {
  <>
    <Todo/>
  </>
  
}

export default App
