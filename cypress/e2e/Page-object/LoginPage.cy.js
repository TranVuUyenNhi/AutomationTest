import {login} from "../Pages/login"

describe('template spec', () => {
    const Login = new login();
    it('login-success', () => {
        cy.viewport(1400,750)
        Login.visit()
        Login.loadtopagelogin().click()
        Login.inputusername().type('')
        Login.inputpassword().type('')
        Login.login().click({force: true})
       
    
    })
   //Fill in the wrong information field
    it('login-fail', () => {
        cy.viewport(1400,750)
        Login.visit()
        Login.loadtopagelogin().click()
        Login.inputusername().type('')
        Login.inputpassword().type('')
        Login.login().click().contains("Thong tin dang nhap khong dung")
})
    
})
 