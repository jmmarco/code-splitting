import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

class App extends React.Component {
  state = {

  }

  render() {
    return (
      <Router>
        <div>

          <ul className="nav">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/topics'>Topics</Link></li>
            <li><Link to='/settings'>Settings</Link></li>
          </ul>

          <hr/>

            <React.Suspense fallback={<Loading />}>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/topics" component={Topics} />
                <Route path="/settings" component={Settings} />
                <Route path="/todos" component={Todos} />
                <Route component={NoMatch} />
              </Switch>
            </React.Suspense>

        </div>
      </Router>
    )
  }
}

function Loading() {
  return <p>Loading.. </p>
}


const Home = React.lazy(() => import('./Home'))

const Topics = React.lazy(() => import('./Topics'))

const Settings = React.lazy(() => import('./Settings'))

const Todos = React.lazy(() => import('./Todos'))

const NoMatch = React.lazy(() => import('./NoMatch'))


export default App
