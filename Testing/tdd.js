//isPalindrome function

const isPalindrome = (x) => {
  if (!x || x.length > 10) return null;

  if (typeof x === "number") {
    x = Math.abs(x).toString();
  }

  if (typeof x !== "string") return null;

  if (x.length === 1) return true;

  x = x.replace(/\s+/g, "").trim().toLowerCase();

  console.log("x-", x);
  const reversedStr = x.split("").reverse().join("");

  console.log("reversedStr-", reversedStr);

  if (x === reversedStr) {
    return true;
  } else {
    return false;
  }
};

const result = isPalindrome("  aba   ");
console.log(result);
module.exports = isPalindrome;
