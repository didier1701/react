import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState(
    [
      {
        id: 1,
        name: "MaGentle",
        role: "devicePixelRatio",
        image: "https://render.fineartamerica.com/images/rendered/default/framed-print/images/artworkimages/medium/2/1-elvis-presley-on-milton-berle-michael-ochs-archives.jpg?imgWI=7.5&imgHI=8&sku=CRQ13&mat1=PM918&mat2=&t=2&b=2&l=2&r=2&off=0.5&frameW=0.875"
      },
      {
        id:2,
        name: "MaGentle",
        role: "devicePixelRatio",
        image: "https://render.fineartamerica.com/images/rendered/default/framed-print/images/artworkimages/medium/2/1-elvis-presley-on-milton-berle-michael-ochs-archives.jpg?imgWI=7.5&imgHI=8&sku=CRQ13&mat1=PM918&mat2=&t=2&b=2&l=2&r=2&off=0.5&frameW=0.875"
      },
      {
        id:3,
        name: "MaGentle",
        role: "devicePixelRatio",
        image: "https://render.fineartamerica.com/images/rendered/default/framed-print/images/artworkimages/medium/2/1-elvis-presley-on-milton-berle-michael-ochs-archives.jpg?imgWI=7.5&imgHI=8&sku=CRQ13&mat1=PM918&mat2=&t=2&b=2&l=2&r=2&off=0.5&frameW=0.875"
      },
      {
        id:4,
        name: "MaGentle",
        role: "devicePixelRatio",
        image: "https://render.fineartamerica.com/images/rendered/default/framed-print/images/artworkimages/medium/2/1-elvis-presley-on-milton-berle-michael-ochs-archives.jpg?imgWI=7.5&imgHI=8&sku=CRQ13&mat1=PM918&mat2=&t=2&b=2&l=2&r=2&off=0.5&frameW=0.875"
      },
      {
        id: 5,
        name: "MaGentle",
        role: "devicePixelRatio",
        image: "https://render.fineartamerica.com/images/rendered/default/framed-print/images/artworkimages/medium/2/1-elvis-presley-on-milton-berle-michael-ochs-archives.jpg?imgWI=7.5&imgHI=8&sku=CRQ13&mat1=PM918&mat2=&t=2&b=2&l=2&r=2&off=0.5&frameW=0.875"
      },
      {
        id: 6,
        name: "MaGentle",
        role: "devicePixelRatio",
        image: "https://render.fineartamerica.com/images/rendered/default/framed-print/images/artworkimages/medium/2/1-elvis-presley-on-milton-berle-michael-ochs-archives.jpg?imgWI=7.5&imgHI=8&sku=CRQ13&mat1=PM918&mat2=&t=2&b=2&l=2&r=2&off=0.5&frameW=0.875"
      }
    ]
  );
  function updateEmployee(id, newName, NewRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id = employee.id) {
        return {...employee, name: newName, role: newName };
      }
      return employee;
    })
  }
  const showEmployee = true;
  return (
    <div className="App">
      {showEmployee ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map( (employee) => {
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  image={employee.image}
                  updateEmployee={updateEmployee}
                />
            );
            })}
          </div>
        </>
      ) : (
        <p>you can not see employees</p>
      )}
    </div>
  );
}

export default App;
