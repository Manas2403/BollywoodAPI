const dialogues = require("./dialogues/dialogues");
//Function to generate a random dialogue from dialogues.js file
const randomDialogue = function () {
  return dialogues[Math.floor(Math.random() * dialogues.length)];
};

//Function to generate a number of dialogues which a user specifes in request like /random/<number>
const randomDialoguesLimit = function (n) {
  const data = [];
  const dialoguesCopy = dialogues.slice();
  //invalid request
  if (n > dialogues.length) {
    return {
      error: `The demand of value of number of dialogues exceeds the famous dialogues in the available data. Input a number between 1 and ${dialogues.length}`,
    };
    //invalid request
  } else if (n < 1 || !Number.isInteger(n)) {
    return {
      error: `The requested data is less than 1 or is not a number.Please enter a valid number between 1 and ${dialogues.length}`,
    };
    //valid request
  } else {
    for (let i = 0; i < n; i++) {
      let idx = Math.floor(Math.random() * dialogues.length);
      data.push(dialoguesCopy[idx]);
      dialoguesCopy.splice(idx, 1);
    }
    return data;
  }
};

//get all dialogues in the dialogues.js file
const getAllDialogues = function () {
  return dialogues;
};
const numOfDialogues = function () {
  return dialogues.length;
};
//exporting the functions to use in app.js
module.exports = {
  randomDialogue,
  randomDialoguesLimit,
  getAllDialogues,
  numOfDialogues,
};
