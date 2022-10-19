import './App.css';
import AssignmentMarks from './Components/AssignmentMarks/AssignmentMarks';
import Navbar from './Components/Navbar/Navbar';
import Pricing from './Components/Pricing/Pricing';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Pricing />
      <AssignmentMarks />
    </div>
  );
}

export default App;
