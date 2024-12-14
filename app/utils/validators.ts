function validateEmail(email: string) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function isMinLength(password: string, minLength: number = 8) {
  return password.length >= minLength;
}

function isNotUsername(password: string, name: string) {
  return password !== name;
}

function hasNumbersAndLetters(password: string) {
  const hasLetters = /[a-zA-Z]/.test(password);
  const hasNumbers = /\d/.test(password);
  return hasLetters && hasNumbers;
}

export default {
  validateEmail,
  isMinLength,
  isNotUsername,
  hasNumbersAndLetters,
};
