import './App.css';
import TodoApp from './pages/todoApp/TodoApp';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);


function App() {
  return (
    <div className="App">
      <TodoApp/>
    </div>
  );
}

export default App;
