let userInput = process.argv.slice(2);
const request = require('request');
const fs = require('fs');

let pageToFetch = userInput[0];
let fileToCreate = userInput[1];


const pageFetcher = (pageToFetch) => {

  request(`${pageToFetch}`, (error, response, body) => {
    if (error) {
      console.log(error);
    }
    let status = response;
    
    const fileWriter = (fileToCreate) => {

      fs.writeFile(`${fileToCreate}`, body, err => {
      
        if (err) {
          console.error(err);
        }

        if(!err) {
          console.log(`Downloaded and saved ${body.length} bytes to ${fileToCreate}`);
        }

      });
      
    };

    fileWriter(fileToCreate);
  });
};

pageFetcher(pageToFetch);
