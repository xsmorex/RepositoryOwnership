let { Repository, FileContentsFetcher } = require("./../GitHub");

module.exports = class Claim {

  constructor(email, hash, repositoryURL) {
    this.hash = hash;
    this.email = email;
    this.repositoryURL = repositoryURL;

    // Verification status. This will turn into true after the hash has been added to the repo and verified.
    this.verified = false;
    this.verificationAttempted = false;
  }

  verifyClaim() {
    this.verificationAttempted = true;

    let repository = new Repository(this.repositoryURL);
    return FileContentsFetcher.getSecretFileContents(repository).then(secretFileContent => {
      // If the secretFile's data matches the hash then set the verified status to true.
      this.verified = (secretFileContent.includes(this.hash));
      return this.getClaim();
    });
  }

  getClaim() {
    return this;
  }

};