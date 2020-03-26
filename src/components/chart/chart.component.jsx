import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Spinner from  '../spinner/spinner.component';


import {connect} from 'react-redux';

import {fetchByCountryAsync} from '../../redux/country/country.actions';

class Chart extends React.PureComponent {
   

    componentDidMount() {
        this.props.fetchByCountryAsync(`india`);
    }
   

    render() {

        let data = null;

        if(!this.props.coronaState.byCountry) {
           data = (<div id="showcase" class="container">  
                   
           </div>) 
        }
        else if(this.props.countryState.isLoading) {
            data = (<div id="showcase" class="container">  
                    <Spinner/>
           </div>) 
        }
        else {


            let formattedData =  this.props.countryState.detailsByCountry.map(c => {

                c.Date = new Date( Date.parse(c.Date)).toDateString();
                return c;
              })

            data = (<div id="showcase" class="container">  
                     <LineChart
                     width={1000}
                     height={300}
                     data={formattedData}
                     margin={{
                     top: 5, right: 30, left: 20, bottom: 5,
                    }}
                   >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Cases" stroke="#8884d8" activeDot={{ r: 8 }} />       
                    </LineChart>
           </div>) 
        }

       return data;
    }
}

const mapStateToProps = state => ({    
    coronaState: state.coronaState,
    countryState: state.countryState
})

const mapDispatchToProps = dispatch => ({
    fetchByCountryAsync: (country) => dispatch(fetchByCountryAsync(country))
})

export default connect(mapStateToProps,mapDispatchToProps)(Chart);





