describe('Checking Count', () => {
    it('Проверка количества текстовых ссылок в меню на главной', () => {
        cy.visit('https://www.jetbrains.com/ru-ru/')
        cy.get('.main-menu-item').should('have.length', 6)
    })
})
//This test is checking number of text menu

