describe('Checking Text Menu', () => {
    it('Проверка текста меню на корректность', () => {
        cy.visit('https://www.jetbrains.com/ru-ru/')
        cy.get('.main-menu-item', {timeout: 10000}).first().should('contain', 'Разработчикам')
        cy.get('.main-menu-item').then(itemd => itemd[1]).should('contain', 'Командам')
        cy.get('.main-menu-item').then(itemd => itemd[2]).should('contain', 'Для обучения')
        cy.get('.main-menu-item').then(itemd => itemd[3]).should('contain', 'Решения')
        cy.get('.main-menu-item').then(itemd => itemd[4]).should('contain', 'Поддержка')
        cy.get('.main-menu-item').then(itemd => itemd[5]).should('contain', 'Магазин')
    })
})

