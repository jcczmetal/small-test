import React, { Component } from 'react';
import axios from 'axios';

export default class Vehicle extends Component {
    
    constructor(props) {
        super(props);

        this.setToMaintenance   = this.setToMaintenance.bind(this);
        this.state              = {status: null}
    }

    componentDidMount() {
        this.setState({ status: this.props.vehicle.status})
    }

    setToMaintenance() {

        axios
            .put('http://localhost:5000/vehicles', {
                _id: this.props.vehicle._id,
                id: 3344,
                estimatedate: "2020-01-12",
                full_name: "Ronald"
            })
            .then(response => {
                this.setState({ status: response.data.status })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        
        return (
            <tr className={this.state.status === 'maintenance' ? 'bg-warning' : 'bg-success'}>
                <td>{ this.props.vehicle.make }</td>
                <td>{ this.props.vehicle.model }</td>
                <td>{ this.state.status }</td>
                <td>
                    <button className={this.state.status === 'maintenance' ? 'btn btn-info disabled' : 'btn btn-info'} onClick={ this.setToMaintenance }>Set to Maintenance</button>
                </td>
            </tr>
        )
    }

}