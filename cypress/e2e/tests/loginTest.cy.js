import { login } from "../../pages/login"

const loginObj = new login()

import loginData from "../../fixtures/loginData.json"

describe('test automation', () => {

    it('login flow', () => {

        loginObj.openURL()

        loginObj.enterEmail(loginData.email)

        loginObj.enterPassword(loginData.password)

        loginObj.clickLogin()

    })

})