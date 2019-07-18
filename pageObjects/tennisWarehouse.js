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
    navToTrack: function (data) {
        this
            .click('@homeLink')
            .waitForElementPresent('@searchBtn', 5000)
            .verify.containsText('@clickForDetails', data.name)
            .waitForElementVisible('@nike')
            .moveToElement('@customerService', 10, 10)
            .waitForElementVisible('[title="Continue to our Order Tacking page"]')
            .click('[title="Continue to our Order Tacking page"]')
            .api.useXpath()
        this
            .waitForElementPresent('//h1[text()="Order Tracking"]')
            .api.useCss()
        this
            .click('@closeCookiePopUp')
        return this
    },
    orderTracking: function (data) {
        this
            .useCss()
            .clearValue('#ord')
            .setValue('#ord', data.orderNumber)
            .clearValue('#phone')
            .setValue('#phone', data.phone)
            .api.pause(100)
        this
            .click('[class="cust_serv_button"]')
            .useXpath()
            .waitForElementVisible('//b[text()="Invalid order or phone number."]')
            .verify.containsText('//b[text()="Invalid order or phone number."]', 'Invalid order or phone number.')
            .useCss()
            .api.back()
        return this
    },
    navtologin: function (data) {
        this
            .verify.containsText('@clickForDetails', 'Click for Details')
            .click('@logIn')
            .waitForElementPresent('@email')
            .clearValue('@email')
            .setValue('@email', data.email)
            .clearValue('@pass')
            .setValue('@pass', data.pass)
            .click('@enterAccount')
            .waitForElementPresent('@logInError')
            .verify.containsText('@logInError', 'The login and password you entered are invalid. Please try again.', 5000)
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
        
        
        logIn: '.ac_login',
        email: '#email_field',
        pass: '#pass_field',
        enterAccount: '.account_button',
        logInError: '.login_error',
        closeCookiePopUp:'.data_close'
    }

}
