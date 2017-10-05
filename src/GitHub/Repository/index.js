module.exports = class Repository {

  constructor(repositoryURL) {
    this.repositoryURL = repositoryURL;

    this.author = "";
    this.repositoryName = "";
    this.branchName = "master";
    this.fileName = "secret";

    this.parseRepositoryURL();
  }

  parseRepositoryURL() {

    if (this.repositoryURL.includes("@") > 0) {
      // Getting the repository details from the SSH link
      let parts = this.repositoryURL.split(":");
      parts = parts[1].split("/");
      this.author = parts[0];
      // Using substr to remove the trailing ".git".
      this.repositoryName = parts[1].substr(0, parts[1].length - 4);
    } else {
      // Getting the repository details from the https link.
      let parts = this.repositoryURL.split("/");
      this.author = parts[3];
      this.repositoryName = parts[4];
    }
  }

  getSecretFileAPIContentsURL() {
    // URL format: "https://raw.githubusercontent.com/USER/REPOSITORY/BRANCH/FILE"
    const baseURL = "https://raw.githubusercontent.com";
    return`${baseURL}/${this.author}/${this.repositoryName}/${this.branchName}/${this.fileName}`;
  }

};