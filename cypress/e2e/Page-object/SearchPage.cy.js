import { search } from "../Pages/search"
describe('template spec', () => {
    const Search = new search();
    it('searchpage',()=>{
    cy.viewport(1400,750)
    Search.visit()
    Search.getsearch().click()
    Search.inputsearch().type('áo')
    Search.clicksearch().click({force: true})
    Search.getresult().contains('Kết quả tìm kiếm')
   
    })
    it('searchpage-fail',()=>{
    cy.viewport(1400,750)
    Search.visit()
    Search.getsearch().click()
    Search.inputsearch().type('vớ')
    Search.clicksearch().click({force: true})
    Search.getsearchfail().contains('Không tìm thấy nội dung bạn yêu cầu')
    
    })
   
  })