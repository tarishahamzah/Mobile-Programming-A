//ARRAY

let people = ["Greg", "Mary", "Devon", "James"];
//1
for (let i=0 ; i<people.length; i++){
    console.log(people[i]);
}
//2
people.forEach(function(item){
    console.log(item);
});
//3
people.shift([0]);
console.log(people);
//4
people.pop([3]);
console.log(people);
//5
people.unshift("Matt");
console.log(people);
//6
people.push("Tarisha")
console.log(people);
//7
for (let i=0; i<people.length; i++){
    console.log(people[i])
    if(people[i] === "Mary"){
        break
    }
}
//8
console.log("\nSplice Array Not Including Mary or Matt");
    // let peopleCopy = people.slice(2)
    // console.log(peopleCopy)
console.log(people.slice(2))
//9
console.log("\nReset Value, Remove Devon, and add Elizabeth and Artie ");
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2,1, "Elizabeth", "Artie")
console.log(people);
//10
let withBob = people.concat("Bob")
console.log(withBob);

//OBJECT
let programming = {
    languages : ["JavaScript", "Python", "Ruby"],
    isChallenging : true,
    isRewarding : true,
    difficulty : 8,
    jokes : "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
}
//1
console.log("\n Nomor 1 : ")
programming.languages.push("Go")
console.log (programming)
//2
console.log("\n Nomor 2 : ")
programming["difficulty"]=7
console.log (programming)
//3
console.log("\n Nomor 3 : ")
delete programming.jokes
console.log (programming)
//4
console.log("\n Nomor 4 : ")
programming.isFun = true
console.log (programming)
//5
console.log("\n Nomor 5 : ")
programming.languages = programming.languages.map((el, idx) => `${idx} - ${el}`)
console.log (programming)