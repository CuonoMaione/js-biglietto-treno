
const userAge = parseInt(prompt ('insert your Age') ) ;

const userKm = parseInt(prompt("Insert distance")) ;

let Price = (userKm * 0.21 );

console.log(Price)

let result;

if(userAge <= 17 ){
    result = parseFloat(Price - [(Price * 20) /100]).toFixed(2) ;
} else if (userAge > 65) {
    result = parseFloat(Price - [(Price * 40) /100]).toFixed(2) ;
} else {
    result = parseFloat(Price).toFixed(2) ;
};


document.getElementById("price").innerHTML += result + "£";
document.getElementById("distance").innerHTML += userKm + " Km";
document.getElementById("Age").innerHTML += userAge + " anni"