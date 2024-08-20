// components
import NavBar from './components/NavBar';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

// styles
import './App.css';



function App() {
  return (
    <div className="App">
      <NavBar />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
