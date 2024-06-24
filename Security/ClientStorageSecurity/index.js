//Always store sensitive info on server
//Set encryption always for storing at client side
//If setting tokens, always set expiration

const token = generateToken();
localStorage.setItem("token", token);
//Remove token when expired
setTimeout(() => {
  localStorage.removeItem("token");
}, tokenExpirationTime);

//Use checksum or digital signature to validate data integrity

const dataToStore = "myData";
const checkSum = calculateCheckSum(dataToStore);

localStorage.setItem("data", dataToStore);
localStorage.setItem("checkSum", checkSum);

const storedData = localStorage.getItem("data");
const storedCheckSum = localStorage.getItem("checkSum");

if (calculateCheckSum(storedData) === storedCheckSum) {
  // Data Integrity is intact
} else {
  // Datat Integrity is tampered
}
