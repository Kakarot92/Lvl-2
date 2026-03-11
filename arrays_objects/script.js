// HOMEWORK — SIMPLE CONTACT CARD
// -----------------------------------------------

// STEP 1: Create an array called contacts.
//         It should contain at least 2 objects.

// STEP 2: Each contact object needs:
//         name (string)
//         phone (string or number)
//         isFavorite (boolean)

// STEP 3: Log the total number of contacts.

// STEP 4: Log the name of the first contact.

// STEP 5: Update one contact’s isFavorite value.

// STEP 6: Add (push) a new contact object.

// STEP 7: Log the updated contacts array.

let contacts = [
    {
        name: "John Doe",
        phone: "123-456-7890",
        isFavorite: true
    },
    {
        name: "Jane Smith",
        phone: "098-765-4321",
        isFavorite: false
    }
];

console.log(`Total contacts: ${contacts.length}`);
console.log(`First contact's name: ${contacts[0].name}`);

contacts[1].isFavorite = true;
contacts.push({
    name: "Alice Johnson",
    phone: "555-555-5555",
    isFavorite: false
});
console.log("Updated contacts array:");
console.log(contacts);