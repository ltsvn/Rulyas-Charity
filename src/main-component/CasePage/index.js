import React, {Fragment} from 'react';
import Navbar3 from '../../components/Navbar3'
import Causes from '../../components/Causes'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'



const CausePage =() => {
    return(
        <Fragment>
            <Navbar3/>
            <Causes/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default CausePage;
