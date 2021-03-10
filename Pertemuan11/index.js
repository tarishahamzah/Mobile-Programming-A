// Asyncronous Java Script

// console.log("satu"); // synchronous-jalan satu persatu
// console.log("dua"); // synchcronous
// console.log("tiga"); // synchcronous

// Callback
// function greetings(fullName) {
//     console.log (`Hi ${fullName}`);
// }

// function introduction(firstName, lastName, callBack){
//     const fullName = `${firstName} ${lastName}`;
//     callBack(fullName);
// }

// introduction("Tarisha", "Hamzah", (fullName) => {
//     console.log(`Hi ${fullName}`);
// } );

// console.log("Satu");
// setTimeout (() => {
//     console.log("Dua");
// }, 2000 );
// console.log("Tiga");

// function proses1(){
//     console.log("Proses 1 Selesai Dijalankan");
// }

// function proses2(callback){
//     //console.log(`Proses 2 Selesai Dijalankan`);
//     setTimeout (() => {
//         console.log("Proses 2 Selesai Dijalankan");
//         callback();
//     }, 2000);
// }

// function proses3(){
//     console.log("Proses 3 Selesai Dijalankan");
// }

// proses1();
// // proses2();
// // proses3();
// proses2(proses3);

//callbackHell ?
// setTimeout(()=> {
//     console.log("Proses1");
//     setTimeout(()=> {
//         console.log("Proses2");
//         setTimeout(()=>{
//             console.log("Proses3");
//             setTimeout(()=>{
//                 console.log("Proses4");
//             }, 2000);
//         }, 2000);
//     }, 2000);
// },2000);


// let condition = true;

// function newPromise () {
//     return new Promise((resolve, reject) => {
//         if (condition) {
//             resolve ("Berhasil");
//         } 
//         else {
//             reject("Error");
//         }
//     }); 
// }

// let newPromise= new Promise((resolve, reject) => {
//     if (condition) {
//         resolve ("1");
//     } 
//     else {
//         reject("Error");
//     }
// });

// newPromise
// .then((result)=> {
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// });


// newPromise()
// .then((result)=> {
//     console.log(result);
// })
// .then ((result2)=> {
//     console.log(`${result2} !!!`);
// })
// .catch((error)=>{
//     console.log(error);
// });

// function getIdStudent() {
//     return new Promise((resolve, reject)=>{
//         resolve("12345");
//     });
// }

function getNameById (id){
    return new Promise((resolve, reject)=>{
        if (id == "12345") {
            resolve("Tarisha Hamzah");
        }
        else {
            reject("Unknown ID Student");
        }
    });
}

// getIdStudent()
//.then((id)=> {
//     return getNameById(id);
// })
// .then((name)=> {
//     console.log(name);
// })

// .catch((error)=> {
//     console.log(error);
// });

// getIdStudent()
// .then((id)=> {
//     return getNameById(id);
// })
// .then((name)=>{
//     console.log(name);
// })
// .catch((error)=>{
//     console.log(error);
// });

const getNameByIdAsync = async () => {
    try{
    const id = await getNameById();
    const name = await getNameById(id);
    console.log(name);
    } catch (error) {
        console.log(error);
    }
    };

    getNameByIdAsync();