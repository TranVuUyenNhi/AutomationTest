import { cart } from "../Pages/cart"
import {productdetail} from "../Pages/productdetail"
describe('Verify Add to cart',function ()  {
    const Cart = new cart();
    const Productdetail = new productdetail();
beforeEach(function(){
    cy.viewport(1400,750)
    Productdetail.visit()
    Productdetail.getdetailitem().click({force: true})
    Productdetail.getchoosesize().click()
    Productdetail.addtocart().click()
    
});
it('viewcart',function ()  {
    Cart.clickcart().click()
    Cart.gotocartpage().click({force: true})
    Cart.getproductimg().should('be.visible')
    Cart.getProductName()
    

})
it('updateitem',function(){
    Cart.clickcart().click()
    Cart.gotocartpage().click({force: true})
    Cart.addOnequality().click()
    Cart.checkoutTotalprice()
})
it.only('Delete item',function(){
    Cart.clickcart().click()
    Cart.gotocartpage().click({force: true})
    Cart.removeOnequality().click()
    Cart.checkemptycart()
})


})


   
