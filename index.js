const inquire = require("inquirer");
const fetch = require("node-fetch");
inquire
  .prompt([{
    name: "name",
    type: "input",
    message: "What is your GitHub username?",
  },
    {
          name:'age',
          type: 'number',
          message: 'How old are you?'
    },
    {
          name: 'food',
          type:'list',
          message: `Choose your favorite food?`,
          choices: ['Pizza', 'Meatloaf', 'Chicken', 'Pasta']
  }])
  .then((answers) => {
    // console.log(`\nHello ${answers.name}!`);
    // console.log(`Wow, you're only ${answers.age} years old!`);
    // console.log(`I heard your favorite food was ${answers.food}`)

    return answers;
  })
  .then((answers) => {
    fetch(`https://api.github.com/users/${answers.name}/repos`)
      .then((response) => response.json())
      .then((data) => data.forEach((repo) => console.log(repo.name)));
  });
  
