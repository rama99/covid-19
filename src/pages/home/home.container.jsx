import React , {Fragment} from 'react';

import Footer from  '../../components/footer/footer.component';
import Showcase from  '../../components/showcase/showcase.component';
import Chart from  '../../components/chart/chart.component';

class HomePage extends React.Component {

    render() {
       return (
                <Fragment>  
                    <br></br>
                    <br></br>
                    <Chart/>
                    <Footer/>
                </Fragment>    
        );
    }
}

export default HomePage;