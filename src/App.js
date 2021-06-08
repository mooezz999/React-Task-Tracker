import Header from './components/Header'
import Tasks from './components/Tasks';

function App() {
  const name='ezz';
  return (
    <div className="container">
<Header title='Task Tracker' />
<Tasks />
    </div>
   
  );
}

export default App;
