import React from "react";
import axios from 'axios';

class Address extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            street1: '',
            street2: '',
            city: '',
            state: '',
            zip: '',
            country: '',
            submitMessageText: null,
        }

        this.handleAddressSubmit = this.handleAddressSubmit.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
    }
    componentDidMount(){
        return true;
    }

    handleAddressChange(e) {
        this.setState({[e.target.getAttribute('name')]: e.target.value})
    }

    handleAddressSubmit(e) {
        e.preventDefault();

        let patient_data = this.props.patient;
        patient_data.address = {
            "use" : "home",
            "type" : "physical",
            "text" : this.state.street1 + " " + this.state.street2 ,
            "line" : [this.state.street1 + " " + this.state.street2],
            "city" : this.state.city,
            "district" : "Salt Lake County",
            "state" : this.state.state,
            "postalCode" : this.state.zip ,
            "country" : this.state.country,
            "period" : {
                "start": "2015-02-07T13:28:17",
                "end" : "2020-02-07T13:28:17"
            }
        }
        console.log(patient_data);
        axios.put(`http://cqm-sandbox.alphora.com/cqf-ruler-r4/fhir/Patient/denom-EXM104-FHIR4`, patient_data, {headers:{"Content-Type": "application/json"}})
            .then(response => {
                this.setState({ submitMessageText: "Successfully added address." });
            })
            .catch(error => {
                this.setState({ submitMessageText: "There was an error adding the address." });
            })
        ;
    }

    render() {
        return (
            <div>
                <h3>Add a New Address</h3>
                <form onSubmit={this.handleAddressSubmit}>
                    <div className="addressDiv">
                    <input className="addressInput" type="text" name="street1" placeholder="Street 1" onChange={this.handleAddressChange} required/>
                    <input className="addressInput" type="text" name="street2" placeholder="Street 2" onChange={this.handleAddressChange} required/>
                    <input className="addressInput" type="text" name="city" placeholder="City" onChange={this.handleAddressChange} required/>
                    <input className="addressInput" type="text" name="state" placeholder="State" onChange={this.handleAddressChange} required/>
                    <input className="addressInput" type="text" name="zip" placeholder="Zip Code" onChange={this.handleAddressChange} required/>
                    <input className="addressInput" type="text" name="country" placeholder="Country" onChange={this.handleAddressChange} required/>
                    <input type="submit" value="Submit"  className="submitButton"/>
                    </div>
                </form>
            </div>
        );
    }
}
    


export default Address;