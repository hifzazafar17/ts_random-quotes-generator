// example:1

// import inquirer from "inquirer";

// // Sample quotes
// const quotes: string[] = [
//     "The only way to do great work is to love what you do. - Steve Jobs",
//     "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
//     "Believe you can and you're halfway there. - Theodore Roosevelt",
//     "It always seems impossible until it's done. - Nelson Mandela",
//     "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
//   ];
  
//   function getRandomQuote(): string {
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     return quotes[randomIndex];
//   }
  
//   async function main() {
//     const answer = await inquirer.prompt([
//       {
//         type: 'input',
//         name: 'generate',
//         message: 'Press Enter to generate a random quote:',
//       },
//     ]);
  
//     if (answer.generate === '') {
//       console.log('\nRandom Quote:');
//       console.log(getRandomQuote());
//     } else {
//       console.log('Invalid input. Please press Enter to generate a quote.');
//     }
//   }
  
//   main();


// example:2


// import axios from 'axios';
// import chalk from 'chalk';

// const getRandomQuote = async (): Promise<string> => {
//   try {
//     const response = await axios.get('https://api.quotable.io/random');
//     const quote = response.data.content;
//     const author = response.data.author;
//     return `${chalk.bold('Quote:')} ${chalk.green(quote)}\n${chalk.bold('Author:')} ${chalk.blue(author)}`;
//   } catch (error) {
//     return chalk.red('Error fetching the quote.');
//   }
// };

// const main = async () => {
//   const quote = await getRandomQuote();
//   console.log(quote);
// };

// main();
