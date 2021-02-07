import React, { Component } from 'react';
import axios from 'axios';
import Vehicle from './vehicle';

export default class VehicleList extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            vehicles: []
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/vehicles')
            .then(response => {
                this.setState({ vehicles: response.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    vehicleList() {
        return this.state.vehicles.map(currentVehicle => {
            return <Vehicle vehicle={currentVehicle} key={currentVehicle._id} />;
        });
    }


    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.vehicleList() }
                    </tbody>
                </table>
            </div>
        ) 
    }
}