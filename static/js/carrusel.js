const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')


punto.forEach( ( cadaPunto , i )=> {
    
    punto[i].addEventListener('click',()=>{

      
        grande.style.transform = `translateX(${ i * (-50)}%)`

        punto.forEach( ( cadaPunto , i )=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')

    })
})
