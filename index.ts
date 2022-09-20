
interface City {
  cityName: string;
  country: string;
  population: number;
}

var cityList:City[] = [];

export const addCity = (cityName:string, country:string, population:number) => {
  var newCity:City = {cityName:cityName, country:country, population:population}
    localStorage.setItem(cityList.length.toString(), newCity.cityName);
    cityList.push(newCity)
    displayCities(cityList);
}

var cityFiltered:City[] = [];
function search(keyword: string){

    for(let index in cityList){
        if(cityList[index].cityName.includes(keyword)|| cityList[index].country.includes(keyword)){
          cityFiltered.push(cityList[index]);
        }
    }
    displayCities(cityFiltered);
    console.info(cityFiltered);
    
    cityFiltered = [];
}

export const searchCity = (searchKey: string) => {
var searchCity = cityList
.filter(c => (c.country.indexOf(searchKey) >= 0));
displayCities(searchCity);
}

export const displayCities = (checkList:City[]) => {

    let list = document.getElementById('cityList');

    if(list) {
        while(list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild)
        }
    }
    checkList.forEach((city) => {
        if(list) {
            let li = document.createElement("li");
            li.innerText = city.cityName + ", " + city.country + ", " + city.population
            list?.appendChild(li);
        }
    })
}






const array = ['a', '0', 'c', '0', 'Marvin',false, '0', 'ABC', '0', 'e','a', '0', '123', '0', 'e']
console.log("START ARRAY: " + array)

let newArray: any[] = [];

for(let i = array.length - 1; i >= 0; i--) {
    if(array[i] === '0'){
        newArray = moveItem(array, i, array.length - 1);
    }
}

function moveItem(arr: any[], fromIndex: number, toIndex: number){
  let itemRemoved = arr.splice(fromIndex, 1) 
  arr.splice(toIndex, 0, itemRemoved[0]) 
  return arr
}

console.log("END ARRAY: " + newArray)


function changer(s: string) { 
    s= s.toLowerCase()
  
    return s.split(' ').map(word=>
  
      word.split('').map(letter=>{
        if(letter === 'z' ) return 'A'
        if(letter === '0')  return '0'
        let x = parseInt(letter) ? letter : String.fromCharCode(letter.charCodeAt(letter.length - 1) + 1)
        if(/([aeiou])/g.test(x)) return x.toUpperCase()
        return x
      }).join('')
    ).join(' ')
  }

  console.log("FROM: " + "Hello World 123")
  console.log("TO: " + changer("Hello World 123"))



  function validISBN10(isbn: string | any[]) {
    let index = 0;
    let checkSum = 0;
    let xCount = 0;
    for (; index < isbn.length; index++) {
      if (isbn[index] === 'X') {
        xCount += 1;
      }
      checkSum += parseInt(isbn[index]) * (index+1);
    }
  
    if (isbn.length !== 10) {
      return false;
    }
  
    if (isbn[isbn.length-1] === 'X' && xCount === 1) {
      return true;
    }
  
    return checkSum % 11 === 0;
  }

  console.log("IS VALID: 23677828X: " + validISBN10("123677828X"))
  console.log("IS VALID: 236X77828: " + validISBN10("236X77828"))
  console.log("IS VALID: 2367828X: " + validISBN10("2367828X"))