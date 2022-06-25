const container = document.querySelectorAll('.container')

container.forEach(element => element.addEventListener('click',
() => exibiConteudo(element)))

const exibiConteudo = (e) =>{
    const conteudo = e.childNodes[3]
    conteudo.classList.toggle('block')  
}