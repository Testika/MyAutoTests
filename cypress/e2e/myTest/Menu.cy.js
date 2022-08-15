describe('Checking JetBrains Click Menu', () => {
    beforeEach(() => {
        cy.visit('https://www.jetbrains.com/ru-ru/')
    })
        it('Checking click "Разработчикам"', () => {

            //cy.get('.ProductCard', {timeout: 5000}).then(itemd => itemd[2]).click()
            cy.get('.main-menu-item', {timeout: 10000}).first().click().wait(2000)
            cy.screenshot('ForDevelopers')

        })

        it('Checking click "Командам"', () => {
            cy.get('.main-menu-item').then(itemd => itemd[1]).click().wait(2000)
        }
        )

        it('Checking click "Для обучения"', () => {
            cy.get('.main-menu-item').then(itemd => itemd[2]).click().wait(2000)
            }
        )

        it('Checking click "Решения"', () => {
            cy.get('.main-menu-item').then(itemd => itemd[3]).click().wait(2000)
        })

        it('Checking click "Поддержка"', () => {
            cy.get('.main-menu-item').then(itemd => itemd[4]).click().wait(2000)
        })

        it('Checking click "Магазин"', () => {
            cy.get('.main-menu-item').then(itemd => itemd[5]).click().wait(2000)
        })

        it('Checking click "Поиск"', () => {
            cy.get('[data-test="site-header-search-action"]').click().wait(2000)
            cy.get('header').click().wait(1000)
        })

        it('Checking click "Создание аккаунта"', () => {
            cy.get('[data-test="site-header-profile-action"]').click().wait(2000)
        })

       it('Checking click "Варианты подписки и стоимость"', () => {
           cy.get('[data-test="site-header-cart-action"]').click().wait(2000)
       })

       it('Checking click "Язык', () => {
           cy.get('.site-header-actions__action').then(itemd => itemd[3]).click().wait(5000)
           cy.get('body').click().wait(1000)
       })
})
