/// <reference types="cypress" />

describe('Testes de Sistema', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/src/view/index.html');
  });

  it('Deve rejeitar cadastro com email inválido', () => {
    cy.get('#email').type('karlosmessyas');
    cy.get('#nome').type('Francisco Emanuel');
    cy.get('#cpf').type('156.951.554-95');
    cy.get('#telefone').type('(83)98167-2201');
    cy.get('#senha').type('karlos123');

    cy.wait(300);
    cy.get('#button').click();

    cy.on('window:alert', (text) => {
      expect(text).to.include('Você precisa informar um email válido'); 
    });
  });

  it('Deve rejeitar cadastro com CPF inválido', () => {
    cy.get('#cpf').type('156.951.554');
    cy.get('#nome').type('Karlos Messyas');
    cy.get('#email').type('karlosmessyas@gmail.com');
    cy.get('#telefone').type('(83)98167-2201');
    cy.get('#senha').type('karlos123');

    cy.wait(300);
    cy.get('#button').click();

    cy.on('window:alert', (text) => {
      expect(text).to.include('Erro ao registrar usuário. Consulte o console para mais detalhes.'); 
    });
  });

  it('Deve rejeitar cadastro com campos vazios', () => {
    cy.get('#button').click();

    cy.on('window:alert', (text) => {
      expect(text).to.include('Por favor, preencha todos os campos.'); 
    });
  });

  it('Deve adicionar um usuário válido', () => {
    cy.get('#cpf').type('156.951.554-10');
    cy.get('#nome').type('Karlos Messyas');
    cy.get('#email').type('karlosmessyas@gmail.com');
    cy.get('#telefone').type('(83)98167-2201');
    cy.get('#senha').type('karlos123');

    cy.wait(400);
    cy.get('#button').click();

    cy.on('window:alert', (text) => {
      expect(text).to.include('Usuário adicionado'); 
    });
  });

  it('Deve ter a fonte correta aplicada ao elemento', () => {
    cy.get('#nome') 
      .invoke('css', 'font-family') 
      .then((fontFamily) => {
        expect(fontFamily).to.match(/Montserrat, system-ui/);
      });
  });
});
