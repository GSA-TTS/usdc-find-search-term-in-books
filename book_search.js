/**
 * RECOMMENDATION
 *
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 *
 * The Developer Tools in Chrome are available under the "..." menu,
 * futher hidden under the option "More Tools." In Firefox, they are
 * under the hamburger (three horizontal lines), also hidden under "More Tools."
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for.
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and
     * return the appropriate object here. */

    var result = {
        "SearchTerm": "",
        "Results": []
    };

    return result;
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            }
        ]
    }
]

/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___|
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/

 */

/* We have provided two unit tests. They're really just `if` statements that
 * output to the console. We've provided two tests as examples, and
 * they should pass with a correct implementation of `findSearchTermInBooks`.
 *
 * Please add your unit tests below.
 * */

/**
 * Test Helper Function
 * Helps print out unit test results to compare expected versus actual results.
 * @param {JSON | number} testResult - JSON object or number representing the result of the test search.
 * @param {JSON | number} expectedResult - JSON object or number representing the correct expected result.
 * @param {String} testIdentifier - String to identify the test; e.g. the name of the test
 * @returns {Void} Prints failure or success message as well as both parameters.
 */
function printTestResults(testResult, expectedResult, testIdentifier) {
    console.log("Now testing:", testIdentifier);
    if (JSON.stringify(expectedResult) === JSON.stringify(testResult)) {
        console.log("PASS");
    } else {
        console.log("FAIL");
        console.log("Expected:", expectedResult);
        console.log("Received:", testResult);
    }
}


/** We can check that, given a known input, we get a known output. */
function testLowerCaseSearchTermReturnsCorrectResults() {
    const testResult = findSearchTermInBooks("the", twentyLeaguesIn);
    const expectedResult =  {
        "SearchTerm": "the",
        "Results": [
            {
                "ISBN": "9780000528531",
                "Page": 31,
                "Line": 9
            }
        ]
    };

    printTestResults(testResult, expectedResult, "testLowerCaseSearchTermReturnsCorrectResults");
}

/** We could choose to check that we get the right number of results. */
function testLowerCaseSearchTermReturnsCorrectNumberOfResults() {
    const testResult = findSearchTermInBooks("the", twentyLeaguesIn);
    const expectedResult =  {
        "SearchTerm": "the",
        "Results": [
            {
                "ISBN": "9780000528531",
                "Page": 31,
                "Line": 9
            }
        ]
    };

    printTestResults(testResult.Results.length, expectedResult.Results.length, "testLowerCaseSearchTermReturnsCorrectNumberOfResults");
}




/** Function to consolidate and run all unit tests in order */
function runMainTests() {
    // Basic cases
    testLowerCaseSearchTermReturnsCorrectResults();
    testLowerCaseSearchTermReturnsCorrectNumberOfResults();

    // Edge cases
}

/** Run main test suite */
runMainTests();