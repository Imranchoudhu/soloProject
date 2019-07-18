var order = require('../testAssests/array')
var tennisPage = {}
module.exports = {
    beforeEach: browser => {
        tennisPage = browser.page.tennisWarehouse()
        tennisPage.navigate()
    },
    after: browser => {
        browser.end()
    },


    'Search and Filter': browser => {
        tennisPage
            .apparelFilter({ name: 'Lacoste', filtered: 'Lacoste' })
            .adidasFilter({ name: 'adidas', filtered: 'adidas' })
            .nikeFilter({ name: 'nike', filtered: 'nike' })


     },
    'Customer Sevice': browser => {
        tennisPage
            .customerService({ name: 'Click for Details' })
            .navToTrack()
        order.forEach(test => {
            tennisPage
                .orderTracking(test)
        })

    },

}