// Quiz: Facebook Friends (7-5)

// Directions:
// Create an object called facebookProfile. The object should have 3 properties:

// your name
// the number of friends you have, and
// an array of messages you've posted (as strings)
// The object should also have 4 methods:

// postMessage(message) - adds a new message string to the array
// deleteMessage(index) - removes the message corresponding to the index provided
// addFriend() - increases the friend count by 1
// removeFriend() - decreases the friend count by 1

// Your Code:

var facebookProfile = {
    friends: 0,
    messages: ["The spirit of the Lord is enriched in me",
        "In all thy gettings get wisdom",
        "For God so love the world that he gave his only begotten son",
        "Halleluyah to the most high",
        "In my weakness, his strenght is made perfect",
        "He was bruised for my sake"
    ],
    postMessage: function addMessage(message) {
        return this.messages.push(message);
    },
    deleteMessage: function removeMessage(index) {
        return this.messages.splice(index, 1);
    },
    addFriend: function increaseFriendCount() {
        return this.friends += 1;
    },
    removeFriend: function decreaseFriendCount() {
        return this.friends -= 1;
    },
}

console.log(facebookProfile.messages)