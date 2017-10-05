// module.exports.Repository = require("./Repository");
// module.exports.FileContentsFetcher = require("./FileContentsFetcher");
let Repository = require("./Repository");
let FileContentsFetcher = require("./FileContentsFetcher");
module.exports = {
  Repository: Repository,
  FileContentsFetcher: FileContentsFetcher
};