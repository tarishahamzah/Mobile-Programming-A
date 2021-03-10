// Dekstrukturisasi

//Array (Caranya, Ambil sebagian item, Deklarasi & Assignment terpisah, Default value, Rest Operator)
// let age;
const arrPerson = ["John", "Doe", 33, true, "Minahasa Utara"];

// const firstName = arrPerson[0];
// const lastName = arrPerson[1];
// const age = arrPerson[2];
// const isMarried = arrPerson[3];

// let [, , age, isMarried, address = "Manado"] = arrPerson;

// console.log(age, isMarried, address);

// let [firstName, lastName, ...rest] = arrPerson;

// console.log(firstName, lastName);
// console.log(rest);

//Object (Caranya, Ambil sebagian item, Deklarasi & Assignment terpisah, Default value, Rest Operator)
const objPerson = {
  firstName: "John",
  lastName: "Doe",
  age: 33,
  issMarried: true,
  address: "Minahasa Utara",
};

// const firstName = objPerson.firstName;
// const lastName = objPerson.lastName;
// const age = objPerson.age;
// const issMarried = objPerson.issMarried;

// const { age: umur } = objPerson;

// console.log(umur);

// let { firstName, lastName, ...rest }= objPerson;

// console.log(firstName, lastName, rest);

const display = ({firstName, lastName}) => `Hallo nama saya ${firstName} ${lastName}`;

console.log(display(objPerson));