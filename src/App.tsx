import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { MuiCustomBreakPoints } from '~/styles';
import { AppProvider } from "~/components";

import {
  HomePage,
  IcoPage,
  EventsPage,
  LeadershipPage,
  MembershipPage,
  NotFoundPage,
} from '~/pages';

const App: React.FC<{}> = () => {
  return (
    <AppProvider>
      <MuiThemeProvider theme={MuiCustomBreakPoints}>
        <BrowserRouter>
          <Switch>

            <Route path="/" exact component={HomePage} />
            <Route path="/ico" exact component={IcoPage} />
            <Route path="/membership" exact component={MembershipPage} />
            <Route path="/leadership" exact component={LeadershipPage} />
            <Route path="/events" exact component={EventsPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </AppProvider>
  );
};

export default App;
