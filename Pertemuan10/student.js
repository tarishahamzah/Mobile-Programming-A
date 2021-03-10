const student = {
  fullName: "John",
  address: "Manado",
  age: 25,
};

const displayStudentInformation = (props) => {
  console.log(`Student Name: ${props.fullName}, Address: ${props.address}`);
}

export { student as mahasiswa };
export default displayStudentInformation;