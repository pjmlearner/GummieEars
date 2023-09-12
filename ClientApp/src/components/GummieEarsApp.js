import React, { Component } from 'react';

// Define a React component called GummieEarsApp
export class GummieEarsApp extends Component {
    // Set the display name for this component
    static displayName = GummieEarsApp.name;

    // Constructor for the component
    constructor(props) {
        super(props);

        // Initialize the component's state with empty forecasts and loading set to true
        this.state = { forecasts: [], loading: true };
    }

    // Lifecycle method: componentDidMount is called after the component is inserted into the DOM
    componentDidMount() {
        // Call the populateWeatherData method to fetch weather data when the component mounts
        this.populateWeatherData();
    }

    // Helper function to render a table of weather forecasts
    static renderForecastsTable(forecasts) {
        return (
            <table className="table table-striped" aria-labelledby="tableLabel">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temp. (C)</th>
                        <th>Temp. (F)</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Map over the forecasts and generate a table row for each forecast */}
                    {forecasts.map(forecast =>
                        <tr key={forecast.date}>
                            <td>{forecast.date}</td>
                            <td>{forecast.temperatureC}</td>
                            <td>{forecast.temperatureF}</td>
                            <td>{forecast.summary}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    // Render method: defines what the component will display
    render() {
        // Check if the component is still loading data, and display a loading message if so
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : GummieEarsApp.renderForecastsTable(this.state.forecasts);

        return (
            <div>
                <h1 id="tableLabel">Weather forecast</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents} {/* Display either loading message or the weather forecast table */}
            </div>
        );
    }

    // Asynchronous function to fetch weather data from the server
    async populateWeatherData() {
        // Send a request to the 'weatherforecast' endpoint
        const response = await fetch('weatherforecast');

        // Parse the response as JSON
        const data = await response.json();

        // Update the component's state with the fetched weather data and set loading to false
        this.setState({ forecasts: data, loading: false });
    }
}