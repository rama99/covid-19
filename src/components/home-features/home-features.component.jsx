import React , {Fragment} from 'react';
import HomeFeature from '../home-feature/home-feature.component';

class HomeFeatures extends React.Component {


    render() {

        return (
        <Fragment>
            <section id="features">
                <HomeFeature/>
                <HomeFeature/>
                <HomeFeature/>
            </section>
    
            <div class="clr"></div>
        </Fragment>
        );
    }

}

export default HomeFeatures;