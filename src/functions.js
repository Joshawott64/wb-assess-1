// Return the quotient of x and y.
// Ex.:
//   divide(10, 2);
//   => 5
function divide(x, y) {
  return x / y
}

// Return the average of x and y.
// Here, the average of x and y is the *mean* of x and y. In other words, it's
// computed by dividing the sum of x and y by 2.
// Ex.:
//   average(10, 2);
//   => 6
function average(x, y) {
  return (x + y) / 2
}

// Return true if x and y are mostly equivalent up to a tolerance of 0.001.
// In other words, return true if the aboslute value of x - y is less than 0.001.
// Ex.:
//   approximatelyEqual(10.001, 10);
//   => true
function approximatelyEqual(x, y) {
  if (x - y < 0.001) {
    return true
  } else {
    return false
  }
}

// Given a first name and last name, return a full name in the format "FIRST LAST"
// Ex.:
//   fullName('John', 'Doe');
//   => 'John Doe'
function fullName(firstName, lastName) {
  return (`${firstName} ${lastName}`)
}

// Generate the sentence "PERSON was drinking BEVERAGE at LOCATION" using the
// person, beverage and location provided.
// Ex.:
//   generateSentence('Kay', 'coffee', 'the local cafe');
//   => 'Kay was drinking coffee at the local cafe.'
function generateSentence(person, beverage, location) {
  return (`${person} was drinking ${beverage} at ${location}.`)
}

// Return the given string with all vowels replced with '*' characters.
// Ex.:
//   censorVowels('javascript');
//   => 'j*v*scr*pt'
function censorVowels(string) {
  string = string.replaceAll('a' || 'A', '*')
  string = string.replaceAll('e' || 'E', '*')
  string = string.replaceAll('i' || 'I', '*')
  string = string.replaceAll('o' || 'O', '*')
  string = string.replaceAll('u' || 'O', '*')

  return string
}

// Return the given string in sticky case.
// Ex.:
//   stickyCase('hello world');
//   => 'hElLo wOrLd'
function stickyCase(string) {
  let stickyArray = []

  for (let i = 0; i < string.length; i++) {
    stickyArray.push(string[i])
  }

  for (let i = 1; i < stickyArray.length; i += 2) {
    stickyArray[i] = stickyArray[i].toUpperCase()
  }

  string = stickyArray.toString()

  for (let i = 0; i < string.length; i++) {
    string = string.replace(/,/, '')
  }
  
  return string
}

// Return the given string in leetspeak. Leetspeak is a modified version of
// English where characters are replaced by numbers or symbols. For this
// version of leetspeak, replace the following characters:
//   a => 4
//   e => 3
//   i => 1
//   o => 0
//   s => 5
//   t => 7
// Ex.:
//   leetspeak('javascript');
//   => 'j4v45cr1p7'
function leetspeak(string) {
  string = string.replaceAll('a' || 'A', '4')
  string = string.replaceAll('e' || 'E', '3')
  string = string.replaceAll('i' || 'I', '1')
  string = string.replaceAll('o' || 'O', '0')
  string = string.replaceAll('s' || 'S', '5')
  string = string.replaceAll('t' || 'T', '7')

  return string
}

export {
  approximatelyEqual,
  average,
  censorVowels,
  divide,
  fullName,
  generateSentence,
  leetspeak,
  stickyCase,
};
