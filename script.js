function getObject(arr){
    for(let i =0; i <= arr.length; i++){
       console.log(arr[i]);
    }
    return arr;
}

let Car = {
    "color": "red",
    "tires": 4,
    "seats": 5,
    "speed": "120km/hr",
    "brands": ["Honda", "Nissan", "Ford"]
}

let Airplane = {
    "color": "White",
    "seats": 500,
    "speed": "300km/hr",
    "Airlines": ["American Airlines", "Delta", "Spirit"]
}

let Train = {
    "color": "brown",
    "Cabinets": 38,
    "speed": "60km/hr",
    "Sizes": ["Small", "Medium", "Large"]
}

console.log(Car.brands);
console.log(Train["speed"]);

console.log(getObject(Car));
console.log(getObject(Airplane));
console.log(getObject(Train));
