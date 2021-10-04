import { Fragment } from 'react';
import Footer from '../modules/footer/Footer';

import  Header from  '../modules/header/header';

function Layout(props) {
  return (
    <Fragment>
      <Header />
      <main className="fit-height">{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
