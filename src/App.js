import React, { Component } from 'react';

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api';
import img from './images/covimg.png'

class App extends Component {
    state = {
        data: {},
        country: ''
    }
    async componentDidMount() {
        const fetchedData = await fetchData()
        this.setState({ data: fetchedData })
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)
        this.setState({ country: country, data: fetchedData })
    }
    render() {
        const { data, country } = this.state
        return (
            <div className={styles.container}>
                <img className={styles.img} src={img} alt="Covid-19 logo" />
                <Cards data={data} country={country} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        );
    }
}

export default App;