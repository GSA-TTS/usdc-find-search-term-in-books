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
    var result = {
        "SearchTerm": searchTerm,
        "Results": []
    };
    // Loop through each book in the list
    scannedTextObj.forEach(book => {
        // For each book, loop through the content
        book.Content.forEach(content => {
            // Check content text for the search term
            if (content.Text.includes(searchTerm)) {
                // If a match is found, add to result (ISBN, page, line)
                result.Results.push({
                    "ISBN": book.ISBN,
                    "Page": content.Page,
                    "Line": content.Line
                });
            }
        });
    });

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

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn);
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

// Positive Tests
console.log("Test 3: Searching for 'momentum'");
const test3result = findSearchTermInBooks("momentum", twentyLeaguesIn);
if (test3result.Results.length === 1 && test3result.Results[0].Page === 31 && test3result.Results[0].Line === 8) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected 1 result for 'momentum' on Page 31, Line 8, Received:", test3result.Results);
}


// Negative Tests
console.log("Test 4: Searching for a term not in the book");
const test4result = findSearchTermInBooks("nonexistent", twentyLeaguesIn);
if (test4result.Results.length === 0) {
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected 0 results for 'nonexistent', Received:", test4result.Results.length);
}
// Case-sensitive Tests
console.log("Test 5: Case-sensitive search for 'Cat'");
const test5result = findSearchTermInBooks("Cat", twentyLeaguesIn);
if (test5result.Results.length === 0) {
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected 0 results for 'The', Received:", test5result.Results.length);
}

// Empty Search Term Tests
console.log("Test 6: Searching within an empty book list");
const test6result = findSearchTermInBooks("the", []);
if (test6result.Results.length === 0) {
    console.log("PASS: Test 6");
} else {
    console.log("FAIL: Test 6");
    console.log("Expected 0 results, Received:", test6result.Results.length);
}

// Book without content
console.log("Test 7: Searching in a book with no content");
const test7result = findSearchTermInBooks("the", [{ "Title": "Empty Book", "ISBN": "0000000000", "Content": [] }]);
if (test7result.Results.length === 0) {
    console.log("PASS: Test 7");
} else {
    console.log("FAIL: Test 7");
    console.log("Expected 0 results, Received:", test7result.Results.length);
}