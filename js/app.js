eventBrite=new EventBrite()
ui=new Interfaz()

document.getElementById('buscarBtn').addEventListener('click',(e)=>{
    e.preventDefault()
    let searchedText=document.getElementById('evento').value
    let category=document.getElementById('listado-categorias').value
    console.log(`text: ${searchedText} and category: ${category}`)
    if (searchedText!=='') {
        //Search
        
    } else {
        //throw an error
        console.log('no data')
        ui.showMessage('mensaje','alert alert-danger mt-4')
    }
})