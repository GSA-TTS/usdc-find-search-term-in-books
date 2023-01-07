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
 * Searches for matches in scanned text. Function that searches for a word in the scanned book content.
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

    // Assign the search term to the JSON object that stores the result.
    result.SearchTerm = searchTerm;
    
    // Search implementation to find the searchTerm in the object scannedTextObj.
    if( scannedTextObj != null ){
        // Go through all the books
        for ( let book = 0; book < scannedTextObj.length; book++ ) {
            
            // Go through the content of each book
            for ( let contentIndex = 0; contentIndex < scannedTextObj[book].Content.length; contentIndex++ ) {

                // Check if searchTerm is in Text.
                if ( scannedTextObj[book].Content[contentIndex].Text.search(searchTerm) >= 0 ) {

                    // Add the necessary information to result when searchTerm is in Text.
                    result.Results.push(
                        {
                            "ISBN": scannedTextObj[book].ISBN,
                            "Page": scannedTextObj[book].Content[contentIndex].Page,
                            "Line": scannedTextObj[book].Content[contentIndex].Line
                        }
                    )
                }
                // Do nothing
            }
        }
    }

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

/** Example output object for test 3.*/
const nullSearchTermOut = {
    "SearchTerm": null,
    "Results": []
}

/** Example output object for test 4.*/
const nullScannedTextObjOut = {
    "SearchTerm": "the",
    "Results": []
}

/** Example input object for test 5, 6, and 7. */
const moreIn = [
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
    },
    {
        "Title": "The Maze Runner",
        "ISBN": "9780385737951",
        "Content": [
            {
                "Page": 197,
                "Line": 1,
                "Text": "I remembered things from growin' up, where I lived, that sort of stuff. "
            },
            {
                "Page": 197,
                "Line": 2,
                "Text": "And if God himself came down right now and told me I could go back home... "
            },
            {
                "Page": 197,
                "Line": 3,
                "Text": "If it was real, Greenie, I swear I'd go shack up with the Grievers before "
            }
        ] 
    },
    {
        "Title": "The Giver",
        "ISBN": "9780544336261",
        "Content": [
            {
                "Page": 57,
                "Line": 35,
                "Text": "He hunched his shoulders and tried to make himself smaller in "
            },
            {
                "Page": 58,
                "Line": 1,
                "Text": "the seat. He wanted to disappear, to fade away, not to exist."
            }
        ] 
    }
]
    
/** Example output object for test 5. */
const moreNoMatchOut = {
    "SearchTerm": "Yaritza",
    "Results": []
}

/** Example output object for test 6. */
const moreMatchOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        },
        {
            "ISBN": "9780385737951",
            "Page": 197,
            "Line": 3
        },
        {
            "ISBN": "9780544336261",
            "Page": 58,
            "Line": 1
        }
    ]
}

/** Example output object for test 7. */
const moreCaseMatchOut = {
    "SearchTerm": "DaRk",
    "Results": []
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
    console.log("%cPASS: Test 1",'font-weight: bold; font-size: large; color: #4CBB17');
} else {
    console.log("%cFAIL: Test 1",'font-weight: bold; font-size: large; color: #FF0000');
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("%cPASS: Test 2",'font-weight: bold; font-size: large; color: #4CBB17');
} else {
    console.log("%cFAIL: Test 2",'font-weight: bold; font-size: large; color: #FF0000');
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

/** My Unit Tests */

/** 
 * Test name: 3. Null or undefined searchTerm
 * Test description: This test will check if the function correctly handles null or undefined searchTerm.
*/
const test3result = findSearchTermInBooks(null, twentyLeaguesIn); 
if (JSON.stringify(nullSearchTermOut) === JSON.stringify(test3result)) {
    console.log("%cPASS: Test 3",'font-weight: bold; font-size: large; color: #4CBB17');
} else {
    console.log("%cFAIL: Test 3",'font-weight: bold; font-size: large; color: #FF0000');
    console.log("Expected:", JSON.stringify(nullSearchTermOut));
    console.log("Received:", JSON.stringify(test3result));
}

/** 
 * Test name: 4. Null or undefined scannedTextObj
 * Test description: This test will check if the function correctly handles null or undefined scannedTextObj.
*/
const test4result = findSearchTermInBooks("the", null); 
if (JSON.stringify(nullScannedTextObjOut) === JSON.stringify(test4result)) {
    console.log("%cPASS: Test 4",'font-weight: bold; font-size: large; color: #4CBB17');
} else {
    console.log("%cFAIL: Test 4",'font-weight: bold; font-size: large; color: #FF0000');
    console.log("Expected:", JSON.stringify(nullScannedTextObjOut));
    console.log("Received:", JSON.stringify(test4result));
}

/**
 * Test name: 5. Negative test: More than one book object but no matches
 * Test description: This test will check if the function correctly handles more than one book object, but there are no matches.
*/
const test5result = findSearchTermInBooks("Yaritza", moreIn); 
if (JSON.stringify(moreNoMatchOut) === JSON.stringify(test5result)) {
    console.log("%cPASS: Test 5",'font-weight: bold; font-size: large; color: #4CBB17');
} else {
    console.log("%cFAIL: Test 5",'font-weight: bold; font-size: large; color: #FF0000');
    console.log("Expected:", JSON.stringify(moreNoMatchOut));
    console.log("Received:", JSON.stringify(test5result));
}

/** 
 * Test name: 6. Positive test: More than one book object that has matches
 * Test description: This test will check if the function correctly handles more than one book object that has matches.
*/
const test6result = findSearchTermInBooks("the", moreIn); 
if (JSON.stringify(moreMatchOut) === JSON.stringify(test6result)) {
    console.log("%cPASS: Test 6",'font-weight: bold; font-size: large; color: #4CBB17');
} else {
    console.log("%cFAIL: Test 6",'font-weight: bold; font-size: large; color: #FF0000');
    console.log("Expected:", JSON.stringify(moreMatchOut));
    console.log("Received:", JSON.stringify(test6result));
}

/** 
 * Test name: 7. Case-sensitive test: More than one book object that has matches
 * Test description: This test will check if the function correctly handles more than one book object that has matches.
*/
const test7result = findSearchTermInBooks("DaRk", moreIn); 
if (JSON.stringify(moreCaseMatchOut) === JSON.stringify(test7result)) {
    console.log("%cPASS: Test 7",'font-weight: bold; font-size: large; color: #4CBB17');
} else {
    console.log("%cFAIL: Test 7",'font-weight: bold; font-size: large; color: #FF0000');
    console.log("Expected:", JSON.stringify(moreCaseMatchOut));
    console.log("Received:", JSON.stringify(test7result));
}

/**
 * Test name: 8. Negative test: One book object but no matches
 * Test description: This test will check if the function correctly handles one book object, but there are no matches.
*/
const test8result = findSearchTermInBooks("Yaritza", twentyLeaguesIn); 
if (JSON.stringify(moreNoMatchOut) === JSON.stringify(test8result)) {
    console.log("%cPASS: Test 8",'font-weight: bold; font-size: large; color: #4CBB17');
} else {
    console.log("%cFAIL: Test 8",'font-weight: bold; font-size: large; color: #FF0000');
    console.log("Expected:", JSON.stringify(moreNoMatchOut));
    console.log("Received:", JSON.stringify(test8result));
}

/** 
 * Test name: 9. Positive test: One book object that has matches
 * Test description: This test will check if the function correctly handles one book object that has matches.
*/
const test9result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test9result)) {
    console.log("%cPASS: Test 9",'font-weight: bold; font-size: large; color: #4CBB17');
} else {
    console.log("%cFAIL: Test 9",'font-weight: bold; font-size: large; color: #FF0000');
    console.log("Expected:", JSON.stringify(twentyLeaguesOut));
    console.log("Received:", JSON.stringify(test9result));
}

/** 
 * Test name: 10. Case-sensitive test: One book object that has matches
 * Test description: This test will check if the function correctly handles one book object that has matches.
*/
const test10result = findSearchTermInBooks("DaRk", twentyLeaguesIn); 
if (JSON.stringify(moreCaseMatchOut) === JSON.stringify(test10result)) {
    console.log("%cPASS: Test 10",'font-weight: bold; font-size: large; color: #4CBB17');
} else {
    console.log("%cFAIL: Test 10",'font-weight: bold; font-size: large; color: #FF0000');
    console.log("Expected:", JSON.stringify(moreCaseMatchOut));
    console.log("Received:", JSON.stringify(test10result));
}