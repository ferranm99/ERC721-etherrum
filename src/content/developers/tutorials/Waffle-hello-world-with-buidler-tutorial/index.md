---
title: "Waffle say hello world tutorial with buidler and ethers"
description: Make your first Waffle project with buidler and ethers.js
author: "MiZiet"
tags:
  ["waffle", "smart contracts", "solidity", "testing", "buidler", "ethers.js"]
skill: basic
lang: en
sidebar: true
published: 2020-10-16
---

### In this [Waffle](https://ethereum-waffle.readthedocs.io) tutorial, we will learn how to set up a simple "Hello world" smart contract project, using [Buidler](https://buidler.dev/) and [ethers.js](https://docs.ethers.io/v5/). Then we will learn how to add a new functionality to our smart contract and how to test it with Waffle.

Let's start with creating new project:

```yml
yarn init
```

or

```yml
npm init
```

and installing required packages:

```yml
yarn add -D @nomiclabs/buidler @nomiclabs/buidler-waffle ethereum-waffle chai @nomiclabs/buidler-ethers ethers
```

or

```yml
npm install -D @nomiclabs/buidler @nomiclabs/buidler-waffle ethereum-waffle chai @nomiclabs/buidler-ethers ethers
```

Next step is creating a sample buidler project by running `npx buidler`.

```yml
888               d8b      888 888
888               Y8P      888 888
888                        888 888
88888b.  888  888 888  .d88888 888  .d88b.  888d888
888 "88b 888  888 888 d88" 888 888 d8P  Y8b 888P"
888  888 888  888 888 888  888 888 88888888 888
888 d88P Y88b 888 888 Y88b 888 888 Y8b.     888
88888P"   "Y88888 888  "Y88888 888  "Y8888  888

👷 Welcome to Buidler v1.4.8 👷‍‍

? What do you want to do? …
❯ Create a sample project
Create an empty buidler.config.js
Quit
```

Select `Create a sample project`

Our projects structure should look like this:

```
MyWaffleProject
├── contracts
│   └── Greeter.sol
├── node_modules
├── scripts
│   └── sample-script.js
├── test
│   └── sample-test.js
├── .gitattributs
├── .gitignore
├── builder.config.js
└── package.json
```

### Now let's talk about some of these files:

- Greeter.sol - our smart contract writen in solidity;

```yml
contract Greeter {
string greeting;

constructor(string memory _greeting) public {
console.log("Deploying a Greeter with greeting:", _greeting);
greeting = _greeting;
}

function greet() public view returns (string memory) {
return greeting;
}

function setGreeting(string memory _greeting) public {
console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
greeting = _greeting;
}
}
```

Our smart contract can be divided into three parts:

1. constructor - where we declare a string type variable called `greeting`,
2. function greet - a function that will return the `greeting` when called,
3. function setGreeting - a function that allows us to change the `greeting` value.

- sample-test.js - our tests file

```yml
describe("Greeter", function() {
it("Should return the new greeting once it's changed", async function() {
const Greeter = await ethers.getContractFactory("Greeter");
const greeter = await Greeter.deploy("Hello, world!");

await greeter.deployed();
expect(await greeter.greet()).to.equal("Hello, world!");

await greeter.setGreeting("Hola, mundo!");
expect(await greeter.greet()).to.equal("Hola, mundo!");
});
});
```

### Next step consists in compiling our contract and runing tests:

Waffle tests use Mocha (a test framework) with Chai (an assertion library). All you have to do is run `npx buidler test` and wait for the following message to appear.

```yml
✓ Should return the new greeting once it's changed
```

### Everything looks great so far, let's add some more complexity to our project :)

Imagine a situation when someone adds an empty string as a greeting. It wouldn't be a warm greeting, right?  
Let's make sure that doesn't happen:

We want to use solidity's `revert` when someone passes an empty string. A good thing is that we can easily test this functionality with Waffle's chai matcher `to.bo.revertedWith()`.

```yml
it("Should revert when passing an empty string", async () => {
const Greeter = await ethers.getContractFactory("Greeter");
const greeter = await Greeter.deploy("Hello, world!");

await greeter.deployed();
await expect(greeter.setGreeting("")).to.be.revertedWith('Greeting should not be empty');

});
```

Looks like our new test didn't pass:

```yml
Deploying a Greeter with greeting: Hello, world!
Changing greeting from 'Hello, world!' to 'Hola, mundo!'
    ✓ Should return the new greeting once it's changed (1514ms)
Deploying a Greeter with greeting: Hello, world!
Changing greeting from 'Hello, world!' to ''
    1) Should revert when passing an empty string


  1 passing (2s)
  1 failing
```

Let's implement this functionality into our smart contract:

```yml
require(bytes(_greeting).length > 0, "Greeting message is empty");
```

Now, our setGreeting function looks like this:

```yml
function setGreeting(string memory _greeting) public {
require(bytes(_greeting).length > 0, "Greeting message is empty");
console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
greeting = _greeting;
}
```

Let's run tests again:

```yml
✓ Should return the new greeting once it's changed (1467ms)
✓ Should revert when passing an empty string (276ms)

2 passing (2s)
```

Congrats! You made it :)

### Conclusion

We made a simple project with Waffle, Buidler and ethers.js. We learned how to set up a project, add a test and implement new functionality.

For more great chai matchers to test your smart contracts, check [official Waffle's docs](https://ethereum-waffle.readthedocs.io/en/latest/matchers.html).
