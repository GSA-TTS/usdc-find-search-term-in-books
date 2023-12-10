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

    // create the object to return
    var result = {
        "SearchTerm": "",
        "Results": []
    };

    // set the searchTerm parameter (easy enough)
    result.SearchTerm = searchTerm;

    // iterate through all content objects
    scannedTextObj.forEach(item => {
        const content = item.Content;
        content.forEach((test, i) => {
            let endWord = ""

            // we can use the search function and not the match function because we only need to return a line once
            if (test.Text.search(searchTerm) >= 0){
                result.Results.push({
                    "ISBN" : item.ISBN,
                    "Page" : test.Page,
                    "Line" : test.Line
                });
            }
            else{
                // check if last element in list has hyphen
                const endSpace = test.Text.lastIndexOf(" ");
                if (test.Text.slice(-1) === "-" && endSpace != -1){
                    endWord = test.Text.slice(endSpace + 1, -1); // store first part of hyphenated word without hyphen

                    // check first part of word in next element
                    if(content[i + 1]){
                        const nextLine = content[i + 1].Text;
                        const spaceIndex = nextLine.indexOf(" ");
                        if(spaceIndex >= 0){
                            // get last part of hyphenated word
                            const startWord = nextLine.slice(0, spaceIndex);
                            if((endWord + startWord).search(searchTerm) >= 0){
                                result.Results.push({
                                    "ISBN" : item.ISBN,
                                    "Page" : test.Page,
                                    "Line" : test.Line
                                });
                            }
                        }
                    }
                }
            }
        });
    })
    
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

/** my own output objects */
const test1 = {
    "SearchTerm": "darkness",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        }
    ]
}

const test2 = {
    "SearchTerm" : "asked",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 10
        }
    ]
}

const test3 = {
    "SearchTerm" : "and",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        },
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 10
        }
    ]
}

const test4 = {
    "SearchTerm" : "nonsense",
    "Results": [

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


/** my own unit tests */
// test for hyphenated line
const test3result = findSearchTermInBooks("darkness", twentyLeaguesIn);
if (JSON.stringify(test1) === JSON.stringify(test3result)) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", test1);
    console.log("Received:", test3result);
}

const test4result = findSearchTermInBooks("darkness", twentyLeaguesIn); 
if (test4result.Results.length == 1) {
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", test1.Results.length);
    console.log("Received:", test3result.Results.length);
}

// normal test
const test5result = findSearchTermInBooks("asked", twentyLeaguesIn);
if (JSON.stringify(test2) === JSON.stringify(test5result)) {
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected:", test2);
    console.log("Received:", test5result);
}

const test6result = findSearchTermInBooks("asked", twentyLeaguesIn); 
if (test6result.Results.length == 1) {
    console.log("PASS: Test 6");
} else {
    console.log("FAIL: Test 6");
    console.log("Expected:", test2.Results.length);
    console.log("Received:", test6result.Results.length);
}


// test for multiple matches
const test7result = findSearchTermInBooks("and", twentyLeaguesIn);
if (JSON.stringify(test3) === JSON.stringify(test7result)) {
    console.log("PASS: Test 7");
} else {
    console.log("FAIL: Test 7");
    console.log("Expected:", test3);
    console.log("Received:", test7result);
}

const test8result = findSearchTermInBooks("and", twentyLeaguesIn); 
if (test8result.Results.length == 2) {
    console.log("PASS: Test 8");
} else {
    console.log("FAIL: Test 8");
    console.log("Expected:", test3.Results.length);
    console.log("Received:", test8result.Results.length);
}


// test for no matches
const test9result = findSearchTermInBooks("nonsense", twentyLeaguesIn);
if (JSON.stringify(test4) === JSON.stringify(test9result)) {
    console.log("PASS: Test 9");
} else {
    console.log("FAIL: Test 9");
    console.log("Expected:", test4);
    console.log("Received:", test9result);
}

const test10result = findSearchTermInBooks("nonsense", twentyLeaguesIn); 
if (test10result.Results.length == 0) {
    console.log("PASS: Test 10");
} else {
    console.log("FAIL: Test 10");
    console.log("Expected:", test4.Results.length);
    console.log("Received:", test10result.Results.length);
}