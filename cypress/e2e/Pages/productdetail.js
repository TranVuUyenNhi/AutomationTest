export class productdetail{
    visit(){
      cy.visit('https://mieu.com.vn/')
    }
    getcategory(){
      cy.get('.clearfix > :nth-child(5) > [href="/collections/dam-1"]')
    }
    getchild(){
     return cy.get ("ul[id='104494554'] li:nth-child(3)")
    }
    getproduct(){

    }
    getdetailitem(){
     return cy.get("h3[class='pro-name'] a[title='ĐẦM CHARIS']")
    }
    getchoosequanlity(){
     return cy.get('#quantity')
    }
    getchoosesize(){
      return cy.get("label[for='swatch-1-l']")
    }
    addtocart(){
      return cy.get('#add-to-cart')
    }
    
    
  }