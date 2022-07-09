// humanAge = (dogAge - 2) * 4 + 21

let dogAge = prompt("How old is your dog?");

function humanAge() {
    dogAge = (dogAge - 2) * 4 + 21;
    return dogAge;
};

alert(` Your dog is ${humanAge(dogAge)} in human age.`);

do {
    humanAge();
} while (dogAge < 100);




// create a function that converts dog age to human time
// user inputs dogAge. 
// dogAge - 2 
