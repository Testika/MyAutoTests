describe('Checking Click Menu', () => {
    it('Проверка текста на корректность', () => {
        cy.visit('https://www.jetbrains.com/ru-ru/')
        cy.get('.main-menu-item', {timeout: 10000}).first().should('contain', 'Разработчикам')
    })
})

