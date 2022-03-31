import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Main from './views/Main';
import PersonShow from './views/PersonShow';
import PersonUpdate from './views/PersonUpdate';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar/>
        <Switch>
          <Route exact path={"/"} render={(routeProps)=><Main {...routeProps}/>}/>
          <Route exact path={"/:personId"} render={(routeProps)=><PersonShow {...routeProps}/>} />
          <Route exact path={"/person/:id/edit"} render={(routeProps) => <PersonUpdate {...routeProps} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
