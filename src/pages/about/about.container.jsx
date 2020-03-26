import React , {Fragment} from 'react';

import HomeInfo from  '../../components/home-info/home-info.component';
import HomeFeatures from  '../../components/home-features/home-features.component';
import Footer from  '../../components/footer/footer.component';

class AboutPage extends React.Component {

    render() {
       return (

        <Fragment>     
            <HomeInfo/>
            <HomeFeatures/>
            <Footer/>
        </Fragment> 
            
            );
    }
}

export default AboutPage;