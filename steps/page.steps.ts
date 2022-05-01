import { binding, given, then, when } from "cucumber-tsflow";
import HomePage from "../pages/home/HomePage";

const home = new HomePage();

@binding()
export class PageSteps {
    @given(/Acesso à Home/,'',90000)
    public async givenAnAccountWithStartingBalance() {
        await home.Redicrect();
    }

    @when("Clicar no botão logar",'',90000)
    public async deposit() {
        await home.ValidateHome();
    }

    @then("Realize o login com sucesso",'',90000)
    public async accountBalanceShouldEqual() {
        await home.ValidateTitle();
    }
}
