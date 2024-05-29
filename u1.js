const btn=document.querySelector('#v2')

btn.onclick=function(){
    console.log("you clicked me")
}


function scream(){
    console.log("aaaahh")
}
btn.onmouseenter=scream;   

document.querySelector('h1').onclick=()=>{
    alert('you clicked h1')
}


const btn3=document.querySelector('#v3')

btn3.addEventListener('mouseup',function(){
    alert("clicked");
})

function twist(){
    console.log("twist");
}

function shout(){
    console.log("shout");
}
/* mdn  */
const tasbutton=document.querySelector("#tas")
//tasbutton.onclick=twist;
//tasbutton.onclick=shout;   /* shout anly executes ,twist is not executing*/ 
  

//tasbutton.addEventListener('click',twist)
//tasbutton.addEventListener('click',shout)  //both will execute


tasbutton.addEventListener('click',twist,{once:true})  //1twist and remaining shouts
tasbutton.addEventListener('click',shout)

const button=document.querySelector('#colors');
const h1=document.querySelector('h1')
button.addEventListener('click',function(){
    
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
    const newcolor=`rgb(${r},${g},${b})`
    document.body.style.backgroundColor=newcolor;
    h1.innerText=newcolor;
})


document.querySelector('#bt2').addEventListener('click',
function(evt){
    console.log(evt)
}
)


const input=document.querySelector('input');
input.addEventListener('keydown',function(e)
{
    console.log(e.key);
    console.log(e.code);


}
)


// input.addEventListener('keyup',function()
// {
//     console.log("keyup");
// }
// )


const form=document.querySelector