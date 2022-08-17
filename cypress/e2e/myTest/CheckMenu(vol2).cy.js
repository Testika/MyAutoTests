describe('Checking Click Menu', () => {
    it('Проверка кликабельности строки меню(vol. 2)', () => {
        cy.visit('https://www.jetbrains.com/ru-ru/')
        cy.get('.main-menu-item', {timeout: 10000}).first().click().wait(2000)

        cy.screenshot('ForDevelopers')
        //takes screenshot

        cy.get('.main-menu-item').then(itemd => itemd[1]).click().wait(2000)
        cy.get('.main-menu-item').then(itemd => itemd[2]).click().wait(2000)
        cy.get('.main-menu-item').then(itemd => itemd[3]).click().wait(2000)
        cy.get('.main-menu-item').then(itemd => itemd[4]).click().wait(2000)
        cy.get('.main-menu-item').then(itemd => itemd[5]).click().wait(2000)
        //then(itemd => itemd[1]) takes element from class massive

        cy.get('[data-test="site-header-search-action"]').click().wait(2000)
        cy.get('header').click().wait(1000)
        cy.get('[data-test="site-header-profile-action"]').click().wait(2000)
        cy.go('back')
        cy.get('[data-test="site-header-cart-action"]').click().wait(2000)
        cy.go('back')
        cy.get('.site-header-actions__action').then(itemd => itemd[3]).click().wait(5000)
        cy.get('body').click().wait(1000)
    })
})
