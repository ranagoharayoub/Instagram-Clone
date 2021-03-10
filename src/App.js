import './App.css';
import Footer from './Footer';
import HomePage from './HomePage';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inbox from './Inbox';
import Profile from './Profile';
import Explore from './Explore';
import {useStateValue} from './UserContext'
import { useEffect, useState } from 'react';


function App() {
  const [width, setwidth] = useState(null)

  useEffect(() => {
    const screen = () =>{
      setwidth(window.innerWidth)
    }
    window.addEventListener('resize', screen)
  }, [])

  const [{user}] = useStateValue()

  return (

    <div className="App">
      {
        !user?
          <Login ></Login>
        :
        <>
          <Router>
            <Footer ></Footer>
            <Switch>
              <Route path='/' exact render={(props) => <HomePage {...props} width={width}></HomePage>} />
              <Route path='/explore' component={Explore} />
              <Route path='/inbox/:chatid' render={(props) =><Inbox {...props} width={width} ></Inbox>}></Route>
              <Route path='/username/:profile' component={Profile}></Route>
            </Switch>
          </Router>

        </>
      }

    </div>

  );
}

export default App;
