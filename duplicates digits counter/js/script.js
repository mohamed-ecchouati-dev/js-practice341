const fullResult = document.getElementById("result");
const trigger = document.getElementById("runBtn");

trigger.addEventListener("click", function(){
    fullResult.textContent = '';

    const array = document.getElementById("numberList").value
    .split(",")
    .map(Number);
    let unique = [];
    let repeated = [];
    
    for (let i = 0; i < array.length; i++){

        if (unique.includes(array[i])){
            repeated.push(array[i]);
            } else {
                unique.push(array[i]);
            }

    }
    for (let i = 0; i < unique.length; i++){
        let duplications = 0;
        for (let x = 0; x < repeated.length; x++){
            if (repeated[x] === unique[i]){
                duplications++;
            }
        }
        if (duplications == 1){
        fullResult.textContent +=`(removed one number ${unique[i]}.)\n`;
        } else if (duplications > 1){
            fullResult.textContent +=`(removed number ${unique[i]} ${duplications} times.)\n`;
        }


    }    
       

 
    
    fullResult.textContent += `the new array is ${unique.join(', ')}`;
})