
let ul = document.querySelector('.lista')
var addButton = document.getElementById('add')

addButton.addEventListener("click",adicionarItemNaLista)

function adicionarItemNaLista() {

    let input = document.querySelector('.input')
    let item = input.value
    let textNode = document.createTextNode(item)
    
    if (item == '') {
        
        exibirMensagem = "Digite uma tarefa."
        alert(exibirMensagem)
        return false
        
    }else {

        li = document.createElement('li')
        checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('class', 'checked')
        label = document.createElement('label')
        btnRemover = document.createElement('button')
        btnRemover.setAttribute('class', 'btnRemover')
        btnRemover.innerHTML = "Remover"
        
        btnRemover.onclick = function () {
            label.parentNode.remove()
        }
        
        ul.appendChild(label)
        li.appendChild(label)
        label.appendChild(checkbox)
        label.appendChild(textNode)
        
        li.appendChild(btnRemover)
        
        ul.insertBefore(li, ul.childNodes[0])
        setTimeout(() => {
            li.className = 'visual'
        },5)
        input.value = " "
        input.focus()
    }
}
document.addEventListener("click", (e) => {

    const targetEl = e.target
    const parentEl = targetEl.closest("label")


    if(targetEl.classList.contains("checked")){
        
        parentEl.classList.toggle("checked")
    }
})

document.addEventListener('keypress', function(e){
    if(e.keyCode== 13){
        adicionarItemNaLista();
    }
  }, false);
  








