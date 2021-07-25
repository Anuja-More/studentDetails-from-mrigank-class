import React from "react";
const Studentdetails = ({ student = {} }) => {
  return (
    <>
      <div>{student.name}</div>
      <div>{student.age}</div>
      <div>{student.about}</div>
    </>
  );
};
export default Studentdetails;
