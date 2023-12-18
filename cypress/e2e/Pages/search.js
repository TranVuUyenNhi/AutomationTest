export class search{
visit(){
    cy.visit('https://mieu.com.vn/')
}
getsearch(){
  return cy.get('#site-search-handle > .box-icon')
}
inputsearch(){
  return cy.get('#inputSearchAuto')
}
clicksearch(){
 return cy.get('#search-header-btn-mb')
}
getresult(){
  return cy.get('.subtext-result')
}
getsearchfail(){
  return cy.get("div[class='expanded-message text-center'] h2")
}

}