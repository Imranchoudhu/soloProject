var access = require('../testAssests/logAssests')
var tennisPage = {}
module.exports = {
    beforeEach: browser => {
        tennisPage = browser.page.tennisWarehouse()
        tennisPage.navigate()
    },
    after: browser => {
        browser.end()
    },
    'logIn Error ': browser => {
        tennisPage
            .maximizeWindow()
            .click('@closeCookiePopUp')
            .waitForElementPresent('@searchBtn', 5000)
        access.forEach(test => {
            tennisPage
                .logIn(test)


        })
    },
    'Missing details': browser => {
        tennisPage
            .click('#home_link')
            .missingDetails({ email: 'Imran@imran.com' })
            .api.acceptAlert()


    }
}
















