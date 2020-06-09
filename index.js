//  function namePrinter(firstName, lastName) {
//      return firstName + ' ' + lastName;
//  }

//  function addParam(param1, param2, param3) {
//      return param1 + param2 + param3
//  }

//  const result = addParam(1, 2, 3);

//  console.log('result ' + result)

function nameGame(firstname, lastname) {
  if (lastname === "grimmer") {
    return "seth";
  } else if (firstname === "leroy") {
    return "grimmer"
  }
}

const name = nameGame("leroy", "grimmer");

console.log(name);