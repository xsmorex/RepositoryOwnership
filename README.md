# IndorseDemo

# Installation
1) Clone the repository. 
2) Install all dependencies by running `npm install`.
3) Run the server by `node index`.

# Make a new claim
Send a post request to `/newclaim` with JSON data containing your email address and the URL of the repository you claim to be yours. An example is given below:

```json
{
    "email": "your.email@example.com",
    "repositoryUrl": "https://github.com/yourname/yourrepository.git"
}
```
If the claim has been added successfully, then the hash value is returned.

# Retrieving a claim
Send a get request to `/getclaim` with the query string's hash value being the hash of the claim you want to get.
For example, if the hash of a claim is **abcd**, then the query string should look like `localhost:3000/getclaim?hash=abcd`.

The claim is returned in JSON format: 
```json
{
    "hash": "2kic1wangj8c5tr46",
    "email": "myemail",
    "repositoryURL": "someUrl"
}
```

## View all claims
It is possible to view all claims by visiting `/allclaims` URL. A **JSON** object containing the key value pairs of the hash and the claims should be returned. 

## Environment file
Make a copy of `.env.exampple` and call it `.env`.
 
### Setting up the email account
In the `.env` file, fill in the following details:
- emailservice: Email service provider like Gmail
- email: Your email username
- password: Your email password

If you are stuck, view `.env.example` for an example.

