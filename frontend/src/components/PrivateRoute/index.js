import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, ...rest }) => {

    const isLogged = useSelector(state => state.user !== null)

    return (
        <Route
            {...rest}
            render={({ location }) => {
                if (isLogged) {
                    return children
                }

                return (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }
                        }}
                    />)
            }}
        />
    )
}

export default PrivateRoute