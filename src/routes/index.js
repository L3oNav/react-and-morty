import React from 'react'
import Layout from '../components/layout'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../pages/home'
const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:id" component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default Routes
