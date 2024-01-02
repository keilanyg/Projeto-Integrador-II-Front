describe('Exemplo de cy.visit', () => {
  it('Deve visitar uma página específica', () => {
    // Visitar a página
    cy.visit('http://localhost:3000/inicial');

    // Você pode adicionar verificações aqui se necessário
    // Por exemplo, verificar se a página contém um elemento específico
    cy.get('p').should('contain.text', 'Olá, Bem-vindo(a)ao Sistema de Gerenciamento de Bibliotecas.');
  });
});
