// Class

class orang {
    constructor(nama, umur)
    {
        this.nama = nama; 
        this.umur = umur;
    }
    bekerja() 
    {
        console.log (`${this.nama} sedang bekerja seperti biasa`);
    }
}

const user1 = new orang("Tarisha Hamzah", 20);
user1.bekerja();

// Inheritance

class Orang {
    constructor(nama, umur) {this.nama = nama; this.umur = umur;}
    tidur() {return `${this.nama} sedang tidur`;}
    makan() {return `${this.nama} sedang makan`;}
}

class Pelajar extends Orang {
    constructor(nama, umur, namaSekolah) {
        super(nama, umur); 
        this.namaSekolah=namaSekolah;
    }

    belajar() {return `${this.nama} belajar di ${this.namaSekolah}`;}
}

let user = new Pelajar("John", 17, "Unklab");
console.log(user)