var tennisPage = {}
module.exports = {
    beforeEach: browser =>{
        tennisPage = browser.page.tennisWarehouse()
        tennisPage.navigate()
    },
    after: browser => {
        browser.end()
    },

     'Search and Filter': browser => {
         tennisPage
            .apparelFilter({name: 'Lacoste', filtered: 'Laco&#115;te' })
            .adidasFilter({name: 'adidas', filtered: 'adida&#115'})
            .nikeFilter({name: 'nike', filtered: 'nike'})

            
        },
    'Mens shoe add and remove ': browser => {
        tennisPage
        .menShoes({name: 'Click for Details'})
        



    }


    
    

}
