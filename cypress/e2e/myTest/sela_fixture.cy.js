describe('UseFixture', () => {
    before('UseFixture',function (){
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })
    it('Checking search',
        function () {
            cy.visit('https://www.sela.ru/')
            cy.get('.city-isset').click()
            cy.get('#header_user_menu_registration_link > .header__user-menu-icon').click()
            cy.get('.login-form > .js-email-input').type(this.data.email) //get email from fixture
            cy.get('#password-enter').type(this.data.password)  //get password from fixture
            cy.get('.login-form > .popup-registration__submit').click({timeout:5000})
            cy.get('#header_user_menu_search_link').should('be.visible').click({force:true})
            cy.get('.digi-search-form__input').type('жилет',{timeout:2000})
            cy.get('.digi-search-form__submit').should('be.visible').click()
            cy.get(':nth-child(3) > .digi-product__image-wrapper > .digi-product__image').should('be.visible').click()
            cy.get('.digi-product__image-wrapper').eq(3).should('be.visible').click()
        //to be continued
        })
})
