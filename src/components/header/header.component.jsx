import React from 'react';
import {connect} from 'react-redux';
import {fetchCoronaSuccessAsync} from '../../redux/corona/corona.actions';
import {fetchByCountryAsync} from '../../redux/country/country.actions';
import Spinner from  '../spinner/spinner.component';

class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            countryId : null
        }
    }

    componentDidMount() {
        this.props.fetchCoronaSuccessAsync();
    }

    onCountrySelect(e) {
        //console.log(e.target.value);
        this.props.fetchByCountryAsync(e.target.value);
    }


    render() {

        let data = null;

        if(this.props.coronaState.isLoading) {
            data = <Spinner/>;
        }
        else {
            data = (
                <select onChange={(e) => this.onCountrySelect(e)}>
                           {
                               this.props.coronaState.countries.map(c => {

                               if(c.Country.length > 0) {
                                   if(c.Country === `India`) {
                                    return (<option value={c.Slug} selected>{c.Country}</option>)
                                }
                                else {
                                    return (<option value={c.Slug}>{c.Country}</option>)
                                   }                                 
                               }                               
                            })                               
                           }   
                </select>
            )
        }

       return (

        <header>
        <nav id="navbar">

            <div class="container">
                    <h1 class="logo"><a href="index.html">{this.props.homeState.data.header.title}</a></h1>

                    <ul>                        
                        <li>
                            {data}
                        </li>
                    </ul>
            </div>
        </nav> 
        
    </header>
        
        );
    }
}

const mapStateToProps = state => ({
    homeState: state.homeState,
    coronaState: state.coronaState
})

const mapDispatchToProps = (dispatch) => ({
    fetchCoronaSuccessAsync: () => dispatch(fetchCoronaSuccessAsync()),
    fetchByCountryAsync: (country) => dispatch(fetchByCountryAsync(country))
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);