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
             .waitForElementPresent('@searchBtn', 5000)
             .setValue('@searchBtn', 'Lacoste')
             .click('@searchIcon')
             .waitForElementPresent('@result', 'Lacoste', 5000)
             .click('@filter')
             .click('@lowestToHigest')
             .waitForElementPresent('@result', 'Laco&#38;#115&#59;te', 5000)
        }

}
