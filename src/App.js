import "./App.css";
import Employee from "./components/Employee";
import {useState} from 'react';
function App() {
  const [role, setRole] = useState('dev');
  const showEmployee = true;
  return (
    <div className="App">
      {showEmployee ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value)
            }}
          />
          <Employee name="Magentle" role="intern" />
          <Employee name="IMANIRAHARI" />
          <Employee name = 'Abby' role = {role} />
          <Employee />
        </>
      ) : (
        <p>you can not see employees</p>
      )}
    </div>
  );
}

export default App;
