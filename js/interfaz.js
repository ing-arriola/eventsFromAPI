class Interfaz{
    constructor(){
        this.init()
        //get data
        this.list=document.getElementById('listado-categorias')
    }
    init(){
        this.printCategories()
    }
    printCategories(){
        const listOfCategories=eventBrite.getCategories()
            .then(data=>{
                const categories=data.categories
                const selectCategories=document.getElementById('listado-categorias')

                categories.forEach(element => {
                    const option=document.createElement('option')
                    option.value=element.id
                    option.appendChild(document.createTextNode(element.name_localized))
                    selectCategories.appendChild(option)
                });
            })
    }
    showMessage(msg,classes){
        const div=document.createElement('div')
        div.classList=classes
        div.appendChild(document.createTextNode(msg))
        let searcher=document.querySelector('#buscador')
        searcher.appendChild(div)
        setTimeout(() => {
            this.cleanMessage()
        }, 3000);
    }

    cleanMessage(){
        let someAlert=document.querySelector('.alert')
        if (someAlert) {
            someAlert.remove()
        }
    }
}