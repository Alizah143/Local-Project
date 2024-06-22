const Lisa = document.getElementById("lisa")
const body = document.querySelector("body")
const Liz = document.getElementById("liz")



Lisa.addEventListener("click",()=>{
     const h1 = document.createElement("h1")
     h1.innerHTML = "Lalisa Manobal"
     body.appendChild(h1)    
     h1.style.padding = "15px"
     h1.style.fontSize = "2.5rem"  
     h1.style.fontWeight = "700"
     const h2 = document.createElement("h2")
     h2.innerHTML= "She is my role model the reason <br> she is my role model is because <br> she inspires me she worked hard for her dreams <br> and this made me to work hard as well i would love to know <br> that she knows me *CRYING*"
     body.appendChild(h2)
     h2.style.fontWeight = "300"
})

Liz.addEventListener("click",()=>{
          const h1 = document.createElement("h1")
          h1.innerHTML = "Powerful (Liz)"
          body.appendChild(h1)
          h1.style.fontSize = "2.5rem"
          h1.style.textAlign = "center"
          h1.style.padding = "3rem"
          h1.style.marginLeft = "7rem"
          h1.style.fontWeight = "700"
          const h2 = document.createElement("h2")
          h2.innerHTML = "The reason i called her powerful is because <br> she is very wise Woman i love her becase  <br> she is extermely hard working as lisa and <br> she also came from poor country as me this motivates <br> me the reason is we both have same lives my Womannn! <br> the difference is she is 24 and i am 16 but going to be 17 *SCREAMINGG* "
          body.appendChild(h2)
          h2.style.textAlign = "center"
          h2.style.fontWeight = "300"

})