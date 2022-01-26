import React, { lazy, Suspense, useMemo } from "react";
import { Route, Switch } from "react-router";
import { routes } from "./utility/routes";
import { useAjax } from "./hooks/useAjax";
import { URL } from "./utility/constants";
import "./App.css";

const ChatBot = lazy(() => import("./components/chat/chat.component"));

export const DataContext = React.createContext(null);
function App() {
  //fetch data for news and blog
  const { data, error, loading } = useAjax(`${URL}/activities/news`);
  const response = useMemo(() => (data === null ? { data: [] } : data), [data]);
  const properties = response.data;

  return (
    <DataContext.Provider
      value={{ data: properties, error: error, loading: loading }}
    >
      <Switch>
        {routes.map((route) => {
          let { exact, main, path } = route;
          return (
            <Route key={path} path={path} exact={exact} component={main} />
          );
        })}
      </Switch>
      <Suspense fallback={<div></div>}>
        <ChatBot />
      </Suspense>
    </DataContext.Provider>
  );
}

export default App;
