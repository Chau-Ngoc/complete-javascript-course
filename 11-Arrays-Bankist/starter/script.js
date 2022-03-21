"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: "Steven Thomas Williams",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: "Sarah Smith",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const sortMovements = function (account, sort) {
    return sort
        ? account.movements.slice().sort((a, b) => a - b)
        : account.movements;
};

/**
 * List all transaction histories of the given account
 * @param account
 * @param sort - boolean. Whether to sort the movements or not.
 */
const listAllMovements = function (account, sort = false) {
    // remove all previous html elements
    containerMovements.innerHTML = "";

    const sortedMovements = sortMovements(account, sort);

    console.log(sortedMovements);

    sortedMovements.forEach(function (movement) {
        const movementType = movement > 0 ? "deposit" : "withdrawal";
        const htmlTemplate = `
            <div class="movements__row">
                <div class="movements__type movements__type--${movementType}">
                    ${movementType}            
                </div>
                <div class="movements__value">${movement}€</div>
            </div>
            `;
        containerMovements.insertAdjacentHTML("afterbegin", htmlTemplate);
    });
};

/**
 * Create a property called "username" for an account given the account's
 * fullname
 * @param fullname - the account's fullname
 * @returns {string} - the username
 */
const createUsername = function (fullname) {
    let username = fullname.toLowerCase().split(" ");
    username = username.map(function (name) {
        return name[0];
    });
    username = username.join("");
    return username;
};

/**
 * Calculate the balance of the currently loggen in account
 * @param account - the currently logged in account
 * @returns {number} - the balance of the user
 */
const calculateBalance = function (account) {
    account.balance = account.movements.reduce(function (
        accumulator,
        movement
    ) {
        return accumulator + movement;
    },
    0);
};

/**
 * Calculate the incomes of the currently logged in account. Basically, this
 * function will filter for any transactions that are greater than 0, and then
 * sum those transactions.
 * @param account - the currently logged in account
 * @returns {number} - the incomes of the current account
 */
const calculateIncomes = function (account) {
    account.incomes = account.movements
        .filter((movement) => movement > 0)
        .reduce((accumulator, movement) => accumulator + movement, 0);
};

/**
 * Similar to the "calculateIncomes" function, except this function calculates
 * the outcomes. Hence, it will filter for any transactions that are less
 * than or equal to 0, and then sum those transactions.
 * @param account - the currently logged in account
 * @returns {number} - the outcomes of the current account
 */
const calculateOutcomes = function (account) {
    account.outcomes = account.movements
        .filter((movement) => movement < 0)
        .reduce((accumulator, movement) => accumulator + movement, 0);
};

/**
 * Calculate the interest given the interest rate. Only the interests that
 * are equal or greater than 1 are considered
 * @param account - the currently logged in account
 * @returns {number} - the interest
 */
const calculateInterest = function (account) {
    account.interest = account.movements
        .filter((movement) => movement > 0)
        .map((deposit) => (deposit * account.interestRate) / 100)
        .filter((interest) => interest >= 1)
        .reduce((accumulator, interest) => accumulator + interest, 0);
};

/**
 * Update the UI of the app to be corresponded to the properties of the logged
 * in account
 * @param account - the currently logged in account
 */
const updateUI = function (account) {
    // list all movements of the current account
    listAllMovements(account);

    // calculate the account's balance, incomes, outcomes and interest
    calculateBalance(account);
    calculateIncomes(account);
    calculateOutcomes(account);
    calculateInterest(account);

    // display the account's balance, incomes, outcomes and interest on the UI
    labelBalance.textContent = `${account.balance}€`;
    labelSumIn.textContent = `${account.incomes}€`;
    labelSumOut.textContent = `${Math.abs(account.outcomes)}€`;
    labelSumInterest.textContent = `${account.interest}€`;
};

accounts.forEach(function (account) {
    account.username = createUsername(account["owner"]);
});
// console.log(accounts);

let currentAccount;

btnLogin.addEventListener("click", function (event) {
    event.preventDefault();

    currentAccount = accounts.find(
        (account) => account.username === inputLoginUsername.value
    );
    // console.log(currentAccount);

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        // clear input fields
        inputLoginPin.value = inputLoginUsername.value = "";
        inputLoginPin.blur();

        // display UI and welcome message
        labelWelcome.textContent = `Welcome back, ${
            currentAccount.owner.split(" ")[0]
        }`;
        containerApp.style.opacity = "100";

        updateUI(currentAccount);
    }
});

btnTransfer.addEventListener("click", function (event) {
    event.preventDefault();

    const amount = Number(inputTransferAmount.value);
    const toAccount = accounts.find(
        (account) => account.username === inputTransferTo.value
    );
    inputTransferAmount.value = inputTransferTo.value = "";

    if (
        amount > 0 &&
        toAccount &&
        currentAccount.balance >= amount &&
        toAccount.username !== currentAccount.username
    ) {
        currentAccount.movements.push(-amount);
        toAccount.movements.push(amount);
        updateUI(currentAccount);
    }
});

btnLoan.addEventListener("click", function (event) {
    event.preventDefault();

    const amount = Number(inputLoanAmount.value);

    if (
        amount > 0 &&
        currentAccount.movements.some((movement) => movement >= amount * 0.1)
    ) {
        currentAccount.movements.push(amount);
        updateUI(currentAccount);
    }

    inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (event) {
    event.preventDefault();

    if (
        currentAccount.username === inputCloseUsername.value &&
        currentAccount.pin === Number(inputClosePin.value)
    ) {
        const index = accounts.findIndex(
            (account) => account.username === currentAccount.username
        );

        accounts.splice(index, 1);

        containerApp.style.opacity = "0";
    }

    inputCloseUsername.value = inputClosePin.value = "";
});

let is_sorted = true;
btnSort.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(currentAccount);
    listAllMovements(currentAccount, is_sorted);
    is_sorted = !is_sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
 const currencies = new Map([
 ["USD", "United States dollar"],
 ["EUR", "Euro"],
 ["GBP", "Pound sterling"],
 ]);

 // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

 /////////////////////////////////////////////////

 const arr = ["a", "b", "c", "d", "e", "f", "g"];

 // slice
 console.log(arr.slice(2));
 console.log(arr.slice(2, -1));

 // splice
 console.log(arr.splice(3));
 console.log(arr);

 // reverse
 const arr2 = [10, 9, 8, 7, 6, 5, 4];
 console.log(arr2.reverse());
 console.log(arr2);

 // concat
 const lettersAndNumbers = arr.concat(arr2);
 console.log(lettersAndNumbers);
 console.log([...arr, ...arr2]);

 // join
 const joinedElements = lettersAndNumbers.join(" - ");
 console.log(joinedElements);

 // at
 const numberArray = [54, 41, 77, 99, 63, 7];
 console.log(numberArray[-1]); // you can not use negative indexing when
 // using bracket notation look up, this will return undefined.
 console.log(numberArray.at(-1));

 // forEach loop
 const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

 console.log("-------------------- forOf demonstration --------------------");
 for (const movement of movements) {
 const statement =
 movement > 0
 ? `You deposited $${movement}`
 : `You withdrew $${Math.abs(movement)}`;
 console.log(statement);
 }

 console.log("-------------------- forEach demonstration --------------------");
 movements.forEach(function (movement, index) {
 const currentMovement = `Movement ${index}: `;
 const statement =
 movement > 0
 ? `You deposited ${movement}`
 : `You withdrew ${Math.abs(movement)}`;
 console.log(currentMovement + statement);
 });
 */

/*
 const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
 const eurToUSDConversionRate = 1.1;

 const movementsUSD = movements.map(function (movement) {
 return movement * eurToUSDConversionRate;
 });

 console.log(movements);
 console.log(movementsUSD);
 */

/*
 const exampleMovements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];

 const deposits = exampleMovements.filter(function (movement) {
 return movement > 0;
 });
 const withdrawals = exampleMovements.filter((movement) => movement <= 0);
 const totalBalance = exampleMovements.reduce(function (
 accumulator,
 movement,
 index
 ) {
 console.log(`Iteration ${index}: ${accumulator}`);
 return accumulator + movement;
 },
 0);

 console.log(deposits);
 console.log(withdrawals);
 console.log(totalBalance);
 */

/*
 // includes
 const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
 console.log(movements.includes(200));
 console.log(movements.includes(71));

 // some
 const anyDeposits = movements.some((move) => move > 0);
 console.log(anyDeposits);
 console.log(movements.some((move) => move >= 1000));

 // every
 console.log(movements.every((move) => move > 0));
 console.log(account4.movements.every((move) => move > 0));

 // separate callback
 const lookForDeposit = function (movement) {
 return movement > 0;
 };

 console.log(movements.filter(lookForDeposit));
 console.log(movements.some(lookForDeposit));
 console.log(movements.every(lookForDeposit));

 // flat
 const arr = [[1, 5, 4], [7, 8], 99, 2, 77];
 console.log(arr.flat());
 console.log(arr);

 const arrDeep = [[2, 4, [22, 21, 20]], [[1, 3], 4], 7];
 console.log(arrDeep.flat());

 function extractMovements(account) {
 return account.movements;
 }

 function addUpAllMovements(previousValue, currentValue) {
 return previousValue + currentValue;
 }

 const totalMovements = accounts
 .map(extractMovements)
 .flat()
 .reduce(addUpAllMovements, 0);
 console.log(totalMovements);

 // sort strings
 const owners = ["Adam", "Williams", "Liam", "Washington", "Bruce"];
 console.log(owners.sort());
 console.log(owners);

 // sort numbers
 console.log(movements);

 // ascending
 // movements.sort((a, b) => {
 //     if (a < b) {
 //         return -1;
 //     }
 //     if (a > b) {
 //         return 1;
 //     }
 // });
 movements.sort((a, b) => a - b);
 console.log(movements);

 // descending
 // movements.sort((a, b) => {
 //     if (a < b) {
 //         return 1;
 //     }
 //     if (a > b) {
 //         return -1;
 //     }
 // });
 movements.sort((a, b) => b - a);
 console.log(movements);
 */
