import './App.css';
import Employee from './components/Employee';

function App() {
  const showEmployee = true;
  return (
    <div className="App">
      
      {showEmployee ? (
        <>
        <Employee name="Magentle" role="intern" />
        <Employee/>
        <Employee/>
        <Employee/>
       </>
      ) : (
        <p>you can not see employees</p>
      )}
      
       
        
       
    </div>
  );
}

export default App;
