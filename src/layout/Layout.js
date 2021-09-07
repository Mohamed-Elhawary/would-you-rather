import React, { Fragment } from 'react';
import {Header, Footer} from 'components';

const Layout = (props) => {
    return (
        <Fragment>
            <Header />
                {props.children}
            <Footer />
        </Fragment>
    )
}

export default Layout;