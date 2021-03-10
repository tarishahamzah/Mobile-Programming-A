//callBack
function mandi(){
    console.log("Mandi");
}
function sarapan(callback){
    setTimeout(() => {
        console.log("Sarapan");
        callback();
    },3000);
    }
function berangkatSekolah(){
    console.log("Berangkat Sekolah");
}
mandi();
sarapan(berangkatSekolah);

// Promise
function helloWorld() {
    return helloWorld = new Promise((resolve) => {
            resolve("Hello World");
    })
};
helloWorld();

// Fetch
function ambilDataUser() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
        return response.json();
      })
    .then(function (user) {
        console.log(user);
      });
}
ambilDataUser()