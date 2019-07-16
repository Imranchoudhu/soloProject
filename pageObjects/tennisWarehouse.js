var manager = {
    apparelFilter: function (add) {
        this
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
    menShoes: function(present){
        this
        .waitForElementPresent('@searchBtn', 5000)
        .click('@mensCategory')
        .waitForElementPresent('@searchBtn', 5000)
        .verify.containsText('@clickForDetails', present.name)
        .click('@nike')
        return this


         }




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
        nike:{
            selector:'(//ul[@class="lnav_section"])[4]/li[2]',
            locateStrategy: 'xpath'

        },


    }

}
