let userInput = process.argv.slice(2);
const request = require('request');
const fs = require('fs');

let pageToFetch = userInput[0];
let fileToCreate = userInput[1];

console.log(pageToFetch);
console.log(fileToCreate);


const pageFetcher = (pageToFetch) => {
  console.log(pageToFetch);
  
  request(`${pageToFetch}`, (error, response, body) => {
    let requestError = error;
    let status = response;
    // console.log(body); 
    return body
  });
};

const fileWriter = (fileToCreate) => {
  console.log(fileToCreate);

  content = pageFetcher(pageToFetch);

  fs.writeFile(`${fileToCreate}`, content, err => {
  
  if (err) {
    console.error(err);
  }

  if(!err) {
    console.log(`File written successfully!`);
  }

  });
  
}

fileWriter(fileToCreate);