import { getGreeting } from '../support/app.po';

describe('ngx-ol-demo', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to ngx-ol-demo!');
  });
});
