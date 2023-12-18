export class login{
  visit(){
      cy.visit('https://mieu.com.vn/')
  }
  loadtopagelogin(){
    return cy.get('#site-account-handle > .box-icon')
  }
  inputusername(){
    return cy.get('body > div:nth-child(7) > header:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > input:nth-child(1')
  }
  inputpassword(){
    return cy.get('body > div:nth-child(7) > header:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(4) > input:nth-child(1)')
  }
  login(){
    return cy.get('#form_submit-login')
  }
  logout(){
    return cy.get("div[class='header-upper-icon'] li:nth-child(4)").contains("Đăng xuất")
  }
}

