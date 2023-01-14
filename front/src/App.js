import GlobalStyle from './styles/global';
import Routes from './Routes';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

function App() {

  const history = createBrowserHistory({ window });

  return (
      <HistoryRouter history={history}>
        <Routes />
        <GlobalStyle />
      </HistoryRouter>
  );
}

export default App;
