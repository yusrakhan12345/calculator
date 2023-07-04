let buttons = document.querySelectorAll(".buttons");
let ans = document.querySelector(".answer")
let display = document.querySelector(".display");

let dataa = "";
let lastCharIsOperator = false; // Track if last character entered was an operator 

buttons.forEach((x) => {
x.addEventListener ("click", () => {
    const buttonText=x.innerText;

    if (buttonText === "AC"){
        dataa = "";
        display.innerText = dataa;
        ans.innerText = "";
    }
    else if(buttonText === "="){
        let val = eval(dataa);
        ans.innerText = val;
    }
    else if(buttonText === "Del"){
       console.log("Data Before", dataa);
       dataa = dataa.slice(0,-1);
       display.innerText = dataa;
       console.log("Data After", dataa);
    }
    else if(["+","-","*","/","%"].includes(buttonText)){
        if(!lastCharIsOperator){
            //append the operator only if the last character was not an operator
            dataa += buttonText;
            display.innerText = dataa;
            lastCharIsOperator = true;
        }
        else {
            //replace the last operator with the new one
            dataa = dataa.slice(0,-1) + buttonText;
            display.innerText = dataa;
        }

    }
    else {
        dataa += x.innerText;
        display.innerText = dataa;
        lastCharIsOperator = false;
    }
});
});



const btn = document.querySelector(".btn");
let index = 0;

const colors = ["salmon", "white", "coral", "purple", "green","pink"];

btn.addEventListener("click", function onClick() {
  document.body.style.backgroundColor = colors[index];
 
  index = index >= colors.length - 1 ? 0 : index + 1;
});




