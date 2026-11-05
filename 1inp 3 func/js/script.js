const palindromeBtn = document.getElementById("palindromeBtn");
const vowelBtn = document.getElementById("vowelBtn");
const dupeBtn = document.getElementById("dupeBtn");
const output = document.getElementById("result");

vowelBtn.addEventListener("click", function(){
    output.textContent = '';
    const input = document.getElementById("input").value.toLowerCase();
    let vowelNumber = 0;
    let vowels = ["e","a","o","u","i"];
    for(let i = 0; i < input.length; i++){
        if(vowels.includes(input[i])){
            vowelNumber++;
        }
    }
    output.textContent = `the number of vowels in this input is ${vowelNumber}`;
})

dupeBtn.addEventListener("click", function(){
    output.textContent = '';
    const input = document.getElementById("input").value
    .split(',')
    .map(Number);
    const unique = [];
    for(let i = 0; i < input.length; i++){
        if(!unique.includes(input[i])){
            unique.push(input[i]);
        }
    }

    output.textContent = `${unique.join(", ")}`;
})

palindromeBtn.addEventListener("click", function(){
    output.textContent = '';
    const input = document.getElementById("input").value.toLowerCase().replaceAll(" ","");
    const reversed = input.split('').reverse().join("");

    if(input === reversed){
        output.textContent = `this input is a palindrome`;
    }   else {
        output.textContent = `this input is not a palindrome`;
    }

})
