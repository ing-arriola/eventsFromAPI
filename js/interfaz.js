class Interfaz{
    constructor(){
        this.init()
        //get data
        this.list=document.getElementById('listado-categorias')
    }
    init(){

    }
    printCategories(){
        const listOfCategories=eventBrite.getCategories()
    }
}