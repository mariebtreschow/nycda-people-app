var fs = require('fs');

fs.readFile('people1.json', (error, data) => {
  if (error) { throw err; }

  var peopleOne = JSON.parse(data);

  fs.readFile('people2.json', (error, data) => {
    if (error) { throw err; }

    var peopleTwo = JSON.parse(data);

    var people = peopleOne.concat(peopleTwo).sort();


    fs.writeFile('peopleComplete.txt', people, (error) => {
      if (error) { throw err; }

      console.log('writing operation finished!');
      
    });
  });
});
