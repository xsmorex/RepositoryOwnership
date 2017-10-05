const fetch = require("node-fetch");

module.exports = class FileContentsFetcher {

  static getSecretFileContents(repository) {
    // Using an arrow function. Can be rewritten as
    // return new Promise( function(resolve, reject) {
    return new Promise((resolve, reject) => {
      if (repository === undefined) {
        reject("Repository cannot be undefined.");
      } else {
        let apiURL = repository.getSecretFileAPIContentsURL();
        fetch(apiURL).then(function(res) {
          return res.text();
        }).then(function(body) {
          resolve(body);
        });
      }
    });
  }

};