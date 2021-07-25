import { useState } from "react";
import Studentdetails from "./componentes/Studentdetails";
import Studentlist from "./componentes/Studentlist";
import "./styles.css";

export default function App() {
 const studentList = [
    {
      id:"1",
      name:"anu",
      age:"21",
      about:"done b tech biotech and working as react devloper"
    },
    {
      id:"2",
      name:"Dikshu",
      age:"21",
      about:"done b tech biotech and working as react devloper"
    },
    {
      id:"3",
      name:"nina",
      age:"21",
      about:"done b tech biotech and working as react devloper"
    },
    {
      id:"4",
      name:"clark",
      age:"21",
      about:"done b tech biotech and working as react devloper"
    },
    {
      id:"5",
      name:"belmey",
      age:"21",
      about:"done b tech biotech and working as react devloper"
    },
    {
      id:"6",
      name:"octivya",
      age:"21",
      about:"done b tech biotech and working as react devloper"
    }
  ];
  const[studentIndex, setStudentIndex] =useState(-1);
  const [students, setStudents] = useState(studentList)
  const handleClick = (index) => setStudentIndex(index)
  const handleChange =(event) =>{
    const filterValue = event.target.value;

  
    const filteredStudents = studentList.filter(student => student.name.toLowerCase().includes(filterValue.toLowerCase()));
     setStudentIndex(-1);
    setStudents(filteredStudents);
  
  }
  return (
    <div className="App">
     <Studentlist
      students={students} 
      onClick={handleClick}
      onChange={handleChange} />
    { studentIndex !== -1 && <Studentdetails student={students[studentIndex]}/>}
    </div>
  );
}
