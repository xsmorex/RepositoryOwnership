const uniqid = require("uniqid");
const Emailer = require("../Emailer");
const Claim = require("../Claim");

/**
 * - This class will hold an array of claims.
 * - It'll add a new claim to the array.
 * - It'll be able to look up claims by the hash.
 *
 * @type {module.ClaimHandler}
 */
module.exports = class ClaimHandler {

  constructor() {
    this.claims = { };
  }

  addNewClaim(email, repositoryURL) {

    let hash = uniqid();
    let claim = new Claim(email, hash, repositoryURL);
    this.claims[hash] = claim;

    let emailer = new Emailer(email, hash, repositoryURL);
    emailer.sendEmail(() => {});

    return claim.getClaim();
  }

  getClaim(hash) {
    if (this.claims[hash] !== undefined) {
      return this.claims[hash];
    }
    return null;
  }

  getAllClaims() {
    return JSON.stringify(this.claims);
  }

};