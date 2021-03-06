import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from '../components/Header'

export const PrivateRoute = (props) => {
   const { isAuthenticated, component: Component, ...rest } = props   
   return (
      <Route {...rest} component={props => (
         isAuthenticated ? (
            <React.Fragment>
               <Header />
               <Component {...props} />
            </React.Fragment>
            
            ) : (<Redirect to="/" />)
      )} />
   )
}

const mapStateToProps = (state) => ({ isAuthenticated: !!state.auth.uid })

export default connect(mapStateToProps)(PrivateRoute) 