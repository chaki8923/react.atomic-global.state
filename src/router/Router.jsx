import { BrowserRouter, Route, Switch } from "react-router-dom";
import { About } from "../components/pages/About";
import { Top } from "../components/pages/Top";
import { User } from "../components/pages/User";
import { DefaultLayout } from "../components/template/DefaultLayout";
import { HeaderOnly } from "../components/template/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route path="/users">
          <HeaderOnly>
            <User />
          </HeaderOnly>
        </Route>
        <Route path="/about">
          <HeaderOnly>
            <About />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
