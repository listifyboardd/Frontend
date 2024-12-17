export function validateEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isMinLength(password: string, minLength: number = 8) {
  return password.length >= minLength;
}

export function hasNumbersAndLetters(password: string) {
  const hasLetters = /[a-zA-Z]/.test(password);
  const hasNumbers = /\d/.test(password);
  return hasLetters && hasNumbers;
}
