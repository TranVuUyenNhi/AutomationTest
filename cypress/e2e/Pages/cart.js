export class cart{
  gotoproductpage(){
    cy.visit('https://mieu.com.vn/')
  }

  clickcart(){
    return cy.get('.count-holder')
  }
  gotocartpage(){
    return cy.get('.linktocart.button.dark')
  }
  getProductName(){
    return cy.get("td[class='item'] h3 a")
  }
  getproductimg(){
    return cy.get("div[class='product_image'] a")
  }
  getQualaty(){
    return cy.get('#updates_1116553843')
  }
  addOnequality(){
    return cy.get("button[class='qtyplus qty-btn']")
  }
  substractquality(){
    return cy.get("button[class='qtyminus qty-btn']")
  }
  removeOnequality(){
    return cy.get("img[src='//theme.hstatic.net/200000202027/1000922794/14/ic_close.png?v=333']")
  }
  checkoutTotalprice(){
    return cy.get(".line-item-total")
  }
  checkemptycart(){
    return cy.get('.cart-empty').contains('Giỏ hàng của bạn đang trống.')
  }
  clickcheckout(){
    return cy.get('.button.dark.btncart-checkout')
  }
}