describe('SearchMenu', () => {
    beforeEach(() => {
        cy.visit('https://www.jetbrains.com/ru-ru/')
    })
        it('Checking search', () => {
            cy.get('[data-test="site-header-search-action"]').click().wait(2000)
            cy.get('[data-hj-whitelist="true"]').click().type('12345')
            cy.get('header').click()
        })
})
