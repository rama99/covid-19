import React from 'react';
import {connect} from 'react-redux';
import {fetchByCountryAsync} from '../../redux/country/country.actions';
import Spinner from  '../spinner/spinner.component';

class Showcase extends React.Component {
   

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
            data = (<div id="showcase" class="container">  
                    {
                        this.props.countryState.detailsByCountry.slice(0).reverse().map(c => {

                          let date = new Date( Date.parse(c.Date) );
                           return (
                                    <h3>{date.toDateString()} - {c.Cases}</h3>
                                  )
                        })
                    }
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

export default connect(mapStateToProps,mapDispatchToProps)(Showcase);