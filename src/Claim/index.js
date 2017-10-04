module.exports = class Claim {

  constructor(email, hash, repositoryURL) {
    this.hash = hash;
    this.email = email;
    this.repositoryURL = repositoryURL;
  }

  verifyClaim() {
    /**
     * TODO
     * Visit github and check the secret file of the repository to see if the hash in that matches
     * with the hash for this claim.
     *
     * Return true if it matches. Return false if it doesn't match.
     *
     * Steps
     * -----
     * 1) Visit Github repository and check the "secret" file.
     * 2) If the secret file does not exist, return false. If it does exist, proceed to step 3.
     * 3) Compare the contents of this.hash and the contents of the "secret" file. If they match, return true.
     *    Else, return false.
     *
     */
    return false;
  }

  getClaim() {
    return {
      email: this.email,
      hash: this.hash,
      repositoryURL: this.repositoryURL
    }
  }

};
