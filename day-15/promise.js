console.log("Today we are going to learn js promise ")
document.addEventListener("keydown",(e)=>{
    console.log(e.key)
    console.log(e.keyCode)
    console.log(e.code)
    console.log(e.ctrlKey)
    console.log(e.altkey)
    
})
//document.addEventListener("keyup" , () => { console.log("key up")})

//document.addEventListener("keypress" , () => { console.log("key press")})
//let input=document.getElementById("input-tag")
//console.log(input)

let input=document.querySelector("#input-tag");
input.addEventListener("input",()=> {
    console.log(e)
    console.log("input event")
})
 
//input.addEventListener("change",()=> {
  //  console.log("change event");
//});

//input.addEventListener("focus",()=> {
  //  console.log("focus event");
//});
// input.addEventListener("blur",()=> {
//     console.log("blur event");
// });
 let form=document.querySelector("form")
 
 form.addEventListener("submit",(v) => {
    v.preventDefault()
    console.log(v)
     console.log("subm3it")
 })

// //window
// window.addEventListener("DOMContentLoaded" ,()=>{
//     console.log("dom load")
// })

// window.addEventListener("resize" ,()=>{

//     console.log("resize")
// })
// window.addEventListener("scroll" ,()=>{
    
//     console.log("scroll")
// })
