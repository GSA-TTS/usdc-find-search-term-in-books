/** 
 * RECOMMENDATION
 * 
 * To test your code, we recommend opening this file in a web browser.
 * You can then use the "Developer Tools" to see the Javascript console.
 * There, you will see the results of the tests executing.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {JSON} input - The input scanned text.
 * @returns {JSON} - Search results.
 * */ 
function findKeyWordInBook(scannedTextObj) {
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
            "Line": 8
        },
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/** We can check that, given a known input, we get a known output. */
test1result = findKeyWordInBook(twentyLeaguesIn);
if (twentyLeaguesOut == test1result) {
    console.log("Test 1 SUCCESS");
} else {
    console.log("Test 1 FAIL");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received: ", test1result);
}

/** We could choose to check that we get the right number of results. */
test2result = findKeyWordInBook(twentyLeaguesIn); 
if (test2result.Results.length == 2) {
    console.log("Test 2 SUCCESS");
} else {
    console.log("Test 2 FAIL");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}
