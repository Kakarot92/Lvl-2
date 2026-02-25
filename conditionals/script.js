let userAge = 20;
let hasTicket = true;
let isMember = false;



if (userAge >= 18 && (hasTicket || isMember)) {
  console.log("Access granted. Enjoy the event!");
} else {
  console.log("User is not allowed to enter.");
}

