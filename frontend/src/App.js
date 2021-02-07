//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import VehicleList from './components/vehicle-list';

function App() {
  return (
    <div className="container">
      <h1>Vehicles</h1>
      <VehicleList />
    </div>
  );
}

export default App;
