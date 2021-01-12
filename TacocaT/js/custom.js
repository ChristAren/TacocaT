document.getElementById("btn1").addEventListener("click", function(){
let word1 = document.getElementById("inputWord").value;
    let outputAnswer = "";
    let palindromes = true;

    let word2 = word1.toLowerCase();
    word2 = word2.replace(/ /g,'');
    word2 = word2.replace(/[^a-z0-9]/g,'');


    for(let loop = 0; loop < word2.length/2; loop++){
        if (word2[loop]!= word2[word2.length-1-loop]){
            palindromes = false;
        }
    }
    
    if (palindromes == true){
        document.getElementById("outputAnswer").innerText = `This Is A Palindrome!`;
    }
    else{
        document.getElementById("outputAnswer").innerText = `This Is Not A Palindrome`;
    }
    if (word1.length == 0){
        document.getElementById("outputAnswer").innerText = `Please Enter Text`;
        palindromes = false;
    }
        
});


document.getElementById("btnClear").addEventListener("click", function(){
    // Clear the word the user entered
    document.getElementById("inputWord").value = "";  
    document.getElementById('outputAnswer').innerText = "";
});


// How to I wire up an event handler for the click event of the btn2 button
// document.getElementById("btn2").addEventListener("click", function(){    
//     for(let loop = 1; loop <= 100; loop++)
//     {  
//         var specialValue = loop % 2;
               
//         if(specialValue != 0) //if SpecialValue IS NOT 0
//         {
//             var printableNum = `<b>${loop}</b> `;
//         }
//         else 
//         {
//             var printableNum = `${loop} `;
//         }

//         document.getElementById("output3").innerHTML += printableNum;
//     }
// });