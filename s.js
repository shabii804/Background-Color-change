const a=document.querySelectorAll(".box")
a.forEach(box=>{
    box.addEventListener("click" , ()=>{
        if(box.id=="b1"){
            document.body.style.backgroundColor="green"

        }
        if(box.id=="b2"){
            document.body.style.backgroundColor="yellow"

        }
        if(box.id=="b1"){
            document.body.style.backgroundColor="blue"

        }
        if(box.id=="b1"){
            document.body.style.backgroundColor="purple"

        }
    })
})