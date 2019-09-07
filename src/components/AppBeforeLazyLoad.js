import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

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

          <Route exact path="/" component={Home}/>
          <Route path="/topics" component={Topics} />
          <Route path="/settings" component={Settings} />

        </div>
      </Router>
    )
  }

}


class DynamicImport extends React.Component {
  state = {
    component: null
  }

  componentDidMount() {
    this.props.load()
      .then(component => {
        this.setState({
          component: component.default ? component.default : component
        })
      })
  }


  render() {
    return this.props.children(this.state.component)
  }
}

const Home = (props) => (
  <DynamicImport load={() => import('./Home')}>
    {
      Component => Component === null
        ? <p>Loading</p>
        : <Component {...props} />
    }
  </DynamicImport>
)

const Topics = (props) => (
  <DynamicImport load={() => import('./Topics')}>
    {
      Component => Component === null
        ? <p>Loading</p>
        : <Component {...props} />
    }
  </DynamicImport>
)


const Settings = (props) => (
  <DynamicImport load={() => import('./Settings')}>
    {
      Component => Component === null
        ? <p>Loading</p>
        : <Component {...props} />
    }
  </DynamicImport>
)


export default App
