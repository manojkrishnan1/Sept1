let data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  data.forEach((element)=>{
    if(element.profession === 'developer'){
      console.log(element);
    }
  })
}

// 2. Add Data
function addData() {
  //Create a temporary object 'person' to store the input from user
  let person = {name: "", age: "", profession:""};

  //keyValues is a variable used to iterate through the keys of the 'person' object
  let keyValues = Object.keys(person);

  //Get input for the 3 keys (name, age and profession) from the user and store the values under respective keys
  for(let i in keyValues){
    let str = prompt('Enter your '+ keyValues[i]);

    if(keyValues[i] === 'age'){
      person[keyValues[i]] = Number(str);
    }
    else{
      person[keyValues[i]] = str;
    }
  }

  //Push the 'person' to the 'data' array
  data.push(person);
  console.log(data);
}

// 3. Remove Admins
function removeAdmin() {
  for(let i=0; i<data.length; i++){
    if(data[i].profession.toUpperCase().trim()==='ADMIN'){
      data.splice(i,1);
      i--;
    }
  }
  
  console.log(data);

}

// 4. Concatenate Array
function concatenateArray() {
  //'arr' is created with new data which will be concatenated with 'data' array
  let arr = [
    {name: 'Jim', age: 28, profession: 'Manager'},
    {name: 'Dwight', age: 32, profession: 'Developer'}
  ];

  
  data = data.concat(arr);
  console.log(data);
}

// 5. Average Age
function averageAge() {
  let sum = 0;
  data.forEach((element) => {
    sum += element.age;
  })
  console.log('Average age of all the employees is '+sum/data.length);
}

// 6. Age Check
function checkAgeAbove25() {
  for(let i in data){
    if(data[i]['age']>25){
      console.log('Yes, there is atleast 1 person in the array who is older than 25');
      return;
    }
  }
  console.log('No person in the array is older than 25');
}

// 7. Unique Professions
function uniqueProfessions() {
  //Create a map 'mp' with profession as keys and increment the values when we find duplicates
  let mp = {};

  //Finding the no.of Duplicate profession using map
  for(let i in data){
    //Create a temporary string 'str' to store the profession of each employee
    let str = data[i]['profession'].toUpperCase().trim();

    //Check if we already have the profession in map 'mp', if yes then increment by 1, else create it
    if(mp[str] == undefined){
      mp[str] = 1;
    }
    else{
      mp[str]++;
    }
  }
  // console.log(mp);

  //Printing the unique professions
  for(let i in data){
    let str = data[i]['profession'].toUpperCase().trim();

    if(mp[str] === 1){
      console.log(data[i]);
    }
  }
}

// 8. Sort by Age
function sortByAge() {
  let sorted = data.sort( ({age:a}, {age:b}) => a-b );
  console.log(sorted);
}

// 9. Update Profession
function updateJohnsProfession() {
  for(let i in data){
    let str = data[i]['name'].toUpperCase().trim()

    if(str === 'JOHN'){
      data[i]['profession'] = 'Manager';
    }
  }
  console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {
  let devs = 0, admins = 0;

  data.forEach((element) => {
    if(element['profession'].toUpperCase().trim() === 'DEVELOPER'){
      devs++;
      console.log(element);
    }
    else if(element['profession'].toUpperCase().trim() === 'ADMIN'){
      admins++;
      console.log(element);
    }
  })

  console.log('Total Developers - ' + devs + " , Total Admins - " + admins);
}
