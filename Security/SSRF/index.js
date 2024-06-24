//Server side request forgery
// A security vulnerability that allows attacker to make requests to unauthorises internal
// resources on behalf of the server
// This happens when user supplied URLs are not properly sanitized before accessing external or internal resources

//VALIDATE URLs
const userUrl = req.query.url; //Get the user provided url
if (!isValidUrl(userUrl)) {
  return res.status(400).send("Invalid URL");
}

//Implement a function to validate url
function isValidUrl(url) {
  //Use a library like url-parse or a regex pattern to validate URLs
  return true; //return true if the url is valid, otherwise false
}

//Hacker can give url like this if validation not done
// "url": "http://localhost:8000/admin"

_____________________________________________________________________________________________;

//Whitelisting should be given- allowed domains - Only allow requests to specific trusted domains.

const allowedDomains = ["api.example.com", "internal-service.local"];

function isAllowedDomain(url) {
  const parsedUrl = new URL(url);
  return allowedDomains.includes(parsedUrl.hostname);
}

//Before making the request, check if the url is valid
if (isAllowedDomain(url)) {
  //Make the request
} else {
  return res.status(403).send("Access to this domain is not allowed");
}

_________________________________________________________________________________________;
