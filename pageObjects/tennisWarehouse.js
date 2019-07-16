module.exports = {
    url: 'https://www.tennis-warehouse.com/',
    elements:{
        searchBtn:'#searchtext',
        logIn:'.ac_login',
        result:'.fl',
        searchIcon:'#search_icon',
        filter: {
            selector: '(//*[@class="ui-icon ui-icon-triangle-white-s"])[1]',
            locateStrategy: 'xpath'

        },
        lowestToHigest: {
            selector: '(//*[@class="ui-menu-item"])[2]',
            locateStrategy: 'xpath'
        },
        

}
}