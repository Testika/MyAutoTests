describe('SearchMenu', () => {
    beforeEach(() => {
        cy.visit('https://www.jetbrains.com/ru-ru/')
    })
        it('Checking search', done => {
            cy.get('[data-test="site-header-search-action"]').click().wait(2000)
            cy.get('[data-hj-whitelist="true"]').click().type('12345',{timeout:2000})
            cy.get('header').click().wait(1000)
        })

    it('All elements', done => {

    })
})
