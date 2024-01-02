describe('Exemplo de cy.visit', () => {
  it('Deve visitar uma página específica', () => {
    // Visitar a página
    cy.visit('http://localhost:3000/inicial');

    // Verificar se a página contém um elemento específico
    cy.get('p').should('contain.text', 'Olá, Bem-vindo(a)ao Sistema de Gerenciamento de Bibliotecas.');
  });
});

describe('Teste de Requisição API', () => {
  it('Deve verificar a resposta de uma API', () => {
    cy.request('GET', 'http://localhost:3000/acessolivro/9')
      .should((response) => {
        expect(response.status).to.eq(200);
      })
  });
});

describe('Exemplo de Requisição POST', () => {
  it('Deve fazer uma requisição POST com dados e verificar a resposta', () => {
    const postData = {
      id: 10,
      nome_categoria: 'Teste do Post',
    }
    cy.request('POST', 'http://127.0.0.1:8000/api/categoria/', postData)
      .should((response) => {
        expect(response.status).to.eq(201); // Status 201 indica sucesso na criação
        expect(response.body).to.have.property('nome_categoria', 'Teste do Post');
      });
  });
});



