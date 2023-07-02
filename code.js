let wordslist=[
    {
        word:"pizza",
        hint:"italian food"
    }, 
    {
        word:"python",
        hint:"a programming language"
    },
    {
        word:"jupiter",
        hint:"a planet in our solar system"
    },
    {
        word:"nile",
        hint:"largest river in the world"
    },
    {
        word:"asia",
        hint:"world's largest continent"
    },
    {
        word:"russia",
        hint:"world's largest country"
    },
    {
        word:"gravity",
        hint:"a strong field that keeps us on the ground"
    },
    {
        word:"qatar",
        hint:"hosted world cup 2022"
    },
    {
        word:"australia",
        hint:"world's smallest continent"
    },
    {
        word:"spoon",
        hint:"used to scoop "
    },
    {
        word:"chinese",
        hint:"most popularly spoken language worldwide"
    },
    {
        word:"february",
        hint:"only has 28 days"
    },
    {
        word:"photosynthesis",
        hint:"used by plants to create energy"
    },
    {
        word:"book",
        hint:"a collection of papers"
    },
    {
        word:"reflection",
        hint:"bouncing off a surface"
    },
    {
        word:"computer",
        hint:"a device that can run programmed tasks"
    },
    {
        word:"engineer",
        hint:"a person who designs and builds"
    },
    {
        word:"bugatti",
        hint:"brand which made fastest car in the world"
    },
    {
        word:"cairo",
        hint:"egypt's capital"
    },
    {
        word:"rome",
        hint:"italy's capital"
    },
    {word:"apple",
    hint:"iphone's brand"
    },
    {word:"umbrella",
    hint:"usually used in the rain"
    },
    {word:"manager",
    hint:"boss"
    },
    {word:"airplane",
    hint:"a vehicle with wings"
    },
    {word:"astronaut",
    hint:"space explorer"
    }
]

let guessed="";
let incorrect="";
let newword="";
let count=0;
let current=wordslist[Math.floor(Math.random()*wordslist.length)]
for (letter in current.word){
    newword+="_ "
}
let attempts=5-incorrect.length;
document.body.innerHTML=document.body.innerHTML.replace('*',attempts)
let updatedword=newword;

console.log(current);


document.body.innerHTML=document.body.innerHTML.replace('X',newword)

let guess=document.getElementById("guess");
guess.addEventListener("click",func);
document.getElementById("namebox")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("guess").click();
    }
});
check=document.getElementById("namebox");

function replacechar(string,index,replacement){
    return(
        string.slice(0,index) + replacement + string.slice(index+replacement.length)
    );
}

function func(){
if (attempts==0)
window.location.reload();
    let x=check.value.toLowerCase();
    let y=document.getElementById("state");
   
   
    if (x){ // code only runs if there is an input number
        console.log(guessed);
       if (guessed.length && guessed.includes(x)){ // code if already guessed before
        y.innerText=`You already guessed ${x} before!`;
        check.value="";
        return;
       }
       if (current.word.includes(x)){ // code if correct guess
        y.innerText=`You guessed ${x} correctly!`;
        console.log(current.word.length);
        let indexes=[];
        let index;
        for (let i=0;i<current.word.length;i++){
            if (current.word[i]==x){
                index=i;
                if (index){
                    index*=2;
                }
                indexes.push(index);
            }
        }
        for (let i=0;i<indexes.length;i++){
            updatedword= replacechar(updatedword,indexes[i],x); 
            count++;
         } 
         console.log(updatedword);
         console.log(indexes);
         document.getElementById("displayword").innerText=updatedword;
         check.value="";
         guessed+=x;
         console.log(updatedword);
         console.log(current.word);
         
         console.log(count*2);
         console.log(updatedword.length);
         if (count*2==updatedword.length){
            y.innerText=`Well done! You won and only made ${5-attempts} mistakes.`;
          document.getElementById("line").innerText="Press the button to start a new game"
          document.getElementById("guess").value="Play again";
            document.getElementById("hint").innerText=`Did you know? ${current.hint}`;
        attempts=0;
        }
        return;
       }
       
y.innerText=`${x} is a wrong guess. Try again!`;
incorrect=incorrect+x;
attempts=5-incorrect.length;
if (attempts==0){

    y.innerText="Game over! You tried 5 guesses and you lost.";
    document.getElementById("displayword").innerText=current.word;
    document.getElementById("guess").value="Play again";
    document.getElementById("line").innerText=" ";

}
document.getElementById("line").innerText="You have "+ attempts +" attempts to guess the word!";
check.value="";
guessed+=x;

if (attempts<=2){
    let hinttext=document.getElementById("hint");
    hinttext.innerText=`Hint: ${current.hint}`;

}
} }
// let game=document.getElementById("start");
// start.addEventListener("submit", (e)=>{
//     let player= document.getElementById("namebox");
// })
