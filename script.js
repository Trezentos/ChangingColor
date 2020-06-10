const body = document.querySelector('body')

const colors = ['deepskyblue', '#239B56 ', '#2E4053', '#0E6251','violet'
                ,'#2E4053', 'purple', 'tomato', 'yellow']


document.querySelector('#botao').addEventListener('click', changeCollor)


function changeCollor(){

    let random = Math.ceil( Math.random()*colors.length )-1
    

    body.style.backgroundColor = colors[random]
    div.style.backgroundColor= colors[random]
    console.log(random)
    
}