class EventBrite{
    constructor(){
        this.token='PUTAPI'
        this.ordenar='date'
    }
    async getCategories(){
        const conexion=await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token}`)
        let categories=await conexion.json()

        return categories

    }
    
}