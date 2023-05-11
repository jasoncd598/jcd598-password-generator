# Password Generator

A simple npm package for generating passwords.

## Installation

To install the Password Generator package, use the following command:

`npm i @jaycd598/password-generator`

## Usage

```jsx
const generatePassword = require('@jaycd598/password-generator');

// Generate a simple password of length 8
const simplePassword = generatePassword(8, true);
console.log("Simple Password:", simplePassword);

// Generate a strong password of length 12
const strongPassword = generatePassword(12, false);
console.log("Strong Password:", strongPassword);c
```

## Parameters

- `length`: The length of the generated password (number).
- `isHard`: Determines the complexity of the password (boolean).
  - If `true`, the password includes alphanumeric characters and special characters.
  - If `false`, the password includes only alphanumeric characters.
