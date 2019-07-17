var manager = {
    apparelFilter: function (add) {
        this
            .maximizeWindow()
            .waitForElementPresent('@searchBtn', 5000)
            .setValue('@searchBtn', add.name)
            .click('@searchIcon')
            .waitForElementPresent('@result', 5000)
            .verify.containsText('@result', add.name)
            .click('@filter')
            .click('@lowestToHigest')
            .waitForElementPresent('@result', 5000)
            .verify.containsText('@result', add.filtered)
        return this
    },
    adidasFilter: function (add) {
        this
            .click('@homeLink')
            .waitForElementPresent('@searchBtn', 5000)
            .clearValue('@searchBtn')
            .setValue('@searchBtn', add.name)
            .click('@searchIcon')
            .waitForElementPresent('@result', 5000)
            .verify.containsText('@result', add.name)
            .click('@filter')
            .click('@highestToLowest')
            .waitForElementPresent('@result', 5000)
            .verify.containsText('@result', add.filtered)
        return this
    },
    nikeFilter: function (add) {
        this
            .click('@homeLink')
            .waitForElementPresent('@searchBtn', 5000)
            .clearValue('@searchBtn')
            .setValue('@searchBtn', add.name)
            .click('@searchIcon')
            .waitForElementPresent('@result', 5000)
            .verify.containsText('@result', add.name)
            .click('@filter')
            .click('@sortaToz')
            .waitForElementPresent('@result', 5000)
            .verify.containsText('@result', add.filtered)
        return this
    },
    customerService: function (data) {
        this
            .maximizeWindow()
            .waitForElementPresent('@searchBtn', 5000)
            .verify.containsText('@clickForDetails', data.name)
            .waitForElementVisible('@nike')
            .moveToElement('@customerService', 10, 10)
            .waitForElementVisible('[title="Continue to our contact information"]')
            .click('[title="Continue to our contact information"]')
            .api.useXpath()
            .verify.containsText('(//*[@class="main_head"])[1]', 'Contact Us')
            .useCss()
        return this

    },
    orderTracking: function (data) {
        this
            .click('@homeLink')
            .waitForElementPresent('@searchBtn', 5000)
            .verify.containsText('@clickForDetails', data.name)
            .waitForElementVisible('@nike')
            .moveToElement('@customerService', 10, 10)
            .waitForElementVisible('[title="Continue to our Order Tacking page"]')
            .click('[title="Continue to our Order Tacking page"]')
            .api.useXpath()
            .waitForElementPresent('//h1[text()="Order Tracking"]')
            .useCss()
            .setValue('#ord', data.orderNumber)
            .setValue('#phone', data.phone)
            .click('.data_close')
            .click('[class="cust_serv_button"]')
            .useXpath()
            .waitForElementVisible('//b[text()="Invalid order or phone number."]')
            .verify.containsText('//b[text()="Invalid order or phone number."]', 'Invalid order or phone number.')
            .useCss()
        return this
    },
}
module.exports = {
    url: 'https://www.tennis-warehouse.com/',
    commands: [manager],
    elements: {
        searchBtn: '#searchtext',
        logIn: '.ac_login',
        result: '.fl',
        searchIcon: '#search_icon',
        filter: {
            selector: '(//*[@class="ui-icon ui-icon-triangle-white-s"])[1]',
            locateStrategy: 'xpath'

        },
        lowestToHigest: {
            selector: '(//*[@class="ui-menu-item"])[2]',
            locateStrategy: 'xpath'
        },
        highestToLowest: {
            selector: '(//*[@class="ui-menu-item"])[3]',
            locateStrategy: 'xpath'
        },
        sortaToz: {
            selector: '(//*[@class="ui-menu-item"])[1]',
            locateStrategy: 'xpath'
        },
        mensCategory: `[title="Men's Tennis Homepage"]`,


        clickForDetails: '[class="click"]',
        nike: {
            selector: '(//a[text()="Nike"])[1]',
            locateStrategy: 'xpath'

        },
        customerService: {
            selector: '(//*[@class="gnavdroplink"])[2]',
            locateStrategy: 'xpath'

        },
        homeLink: '#home_link',

    },
}
