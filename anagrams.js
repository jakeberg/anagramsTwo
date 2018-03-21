const dest = document.getElementById("main");

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}



function findAll() {
    var countAnagrams = {}

    for (i = 0; i < words.length; i++) {
        var word = words[i];
        const value = alphabetize(word);

            if (value in countAnagrams) {
                countAnagrams[value].push(word);
            } else {
                countAnagrams[value] = [word];
            }
                
            if (countAnagrams[value].length > 4) {
                let newSpan = document.createElement("span");
                let text = document.createTextNode(countAnagrams[value] + ":::::::");
                newSpan.appendChild(text);
                dest.appendChild(newSpan); 
            }
        }
    }
   






document.getElementById("findButton").addEventListener("click", findAll)