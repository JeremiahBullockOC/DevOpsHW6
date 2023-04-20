describe('dashboard', () => {
  beforeEach(() => {
    cy.visit('localhost:4200/dashboard');
  });

  it(`has title 'Tour of Heroes'`, () => {
    cy.contains('Tour of Heroes');
    cy.get('h1').should('contain', 'Tour of Heroes');
    cy.title().should('eq', 'Tour of Heroes');
  });

  it(`has the correct header`, () => {
    cy.contains('Dashboard');
    cy.get('nav a').eq(1).should('contain', 'Heroes');
    cy.contains('Top Heroes');
    cy.contains('for now');
  });

  it(`has the correct search header`, () => {
    cy.contains('Hero Search');
    cy.get('app-hero-search').should('contain', 'Hero Search');
  });

  it(`says hello from Jeremiah`, () => {
    cy.contains('Hello from Jeremiah');
  });

  it(`says Jeremiah Bullock`, () => {
    cy.contains('Jeremiah Bullock');
  });

  it(`says managed a simple CI/CD Deployment`, () => {
    cy.contains('managed a simple CI/CD Deployment');
  });

  it('can search', () => {
    cy.get('#search-box').type('Bombasto');
    cy.get('.search-result li').contains('Bombasto').click();
    cy.url().should('include', '/detail/13');
  });
});
