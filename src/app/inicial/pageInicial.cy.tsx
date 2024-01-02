import React from 'react'
import Inicial from './page'

describe('<Inicial />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Inicial />)
  })
})