carBrands = [ "Toyota", "Ford", "BMW", "Mercedes-Benz", "Honda", "Audi", "Tata", "Tesla", "Mahindra", "Volkswagen" ];
function displayCarBrands(carBrands){
    carBrands.forEach((car) => {
        console.log(car);
    });
}
displayCarBrands(carBrands);
carBrands.push('Hyundai');
carBrands.pop();
let Tata=carBrands.includes('Tata');
console.log(Tata);
carBrands.sort();
console.log(carBrands);
let shallowcar=carBrands;
console.log(shallowcar);
let scar=['Kia','Range Rover',...carBrands];
console.log(scar);