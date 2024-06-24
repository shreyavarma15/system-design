function calculateChecksum(data) {
  // Use a hashing algorithm to calculate the checksum (e.g., SHA-256)
  return CryptoJS.SHA256(data).toString();
}

function storeData(key, value) {
  const jsonData = JSON.stringify(value);
  const checksum = calculateChecksum(jsonData);
  localStorage.setItem(key, jsonData);
  localStorage.setItem(`${key}_checksum`, checksum);
}

const data = { name: "Alice", age: 30 };
storeData("userData", data);

// Retrieving and Validating Data:
function retrieveData(key) {
  const jsonData = localStorage.getItem(key);
  const storedChecksum = localStorage.getItem(`${key}_checksum`);

  if (jsonData && storedChecksum) {
    const currentChecksum = calculateChecksum(jsonData);
    if (currentChecksum === storedChecksum) {
      return JSON.parse(jsonData);
    } else {
      throw new Error("Data integrity check failed.");
    }
  } else {
    return null;
  }
}

try {
  const userData = retrieveData("userData");
  console.log(userData);
} catch (error) {
  console.error(error.message);
}

// CryptoJS.SHA256(data) is a function from the CryptoJS library,
// a widely used JavaScript library for performing cryptographic operations,
//including hashing. SHA256 refers to the Secure Hash Algorithm 256-bit, which is
//cryptographic hash function that produces a fixed-size (256-bit) hash value (or checksum) from input data of any size.
