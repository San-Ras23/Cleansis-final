const punto     = document.querySelectorAll('.punto')
const carrouselImages = document.querySelectorAll(".img")

punto.forEach( ( cadaPunto , i )=> {
    
    punto[i].addEventListener('click',()=>{
        punto.forEach( ( cadaPunto , i )=>{
            punto[i].classList.remove('activo')
            carrouselImages[i].classList.remove("select")
        })
        punto[i].classList.add('activo')
        carrouselImages[i].classList.add('select')

    })
})