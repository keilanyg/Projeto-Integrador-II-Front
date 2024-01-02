// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively, you can use CommonJS syntax:
// require('./commands')

// Import the mount function from Cypress React utilities
import { mount } from 'cypress/react18';

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, it can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    // Extend the Chainable interface with a new custom command
    interface Chainable {
      mount: typeof mount;
    }
  }
}

// Add a custom Cypress command named 'mount' that is equivalent to the imported 'mount' function
Cypress.Commands.add('mount', mount);

// Example use:
// cy.mount(<MyComponent />)
