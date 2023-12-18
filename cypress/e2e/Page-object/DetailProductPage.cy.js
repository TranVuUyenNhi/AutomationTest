import {productdetail} from "../Pages/productdetail"

describe('product', () => {
    const Productdetail = new productdetail();
    // See product details on the home page
    it('productdetail', () => {
     Productdetail.visit()
     Productdetail.getdetailitem().click({force: true})
    })

       
    })
    // Add to cart
    it('add to cart',()=>{
        cy.viewport(1400,750)
        Productdetail.visit()
        Productdetail.getdetailitem().click({force: true})
        Productdetail.getchoosesize().click()
        Productdetail.addtocart().click()
        
    })
    
    
