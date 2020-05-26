import React from 'react';
import axios from 'axios';

export default class Patient extends React.Component {
    constructor() {
        super();
        this.state = {
            patient: {
                id: null,
                name: {
                    family: null,
                    given: null,
                },
                gender: null,
                birthDate: null,
                race: null,
                ethnicity: null
            }
        }
    }
    
    componentDidMount() {
        axios.get(`http://cqm-sandbox.alphora.com/cqf-ruler-r4/fhir/Patient/denom-EXM104-FHIR4`)
            .then(res => {
                let patient_pulled = res.data;
                patient_pulled.id = res.data.id;
                patient_pulled.name.family = res.data.name[0].family;
                patient_pulled.name.given = res.data.name[0].given[0];
                patient_pulled.gender = res.data.gender;
                patient_pulled.birthDate = res.data.birthDate;
                this.setState({patient : patient_pulled});
            });
    }
    
    render() {
        return (<div>
                    <p>Patient First Name: {this.state.patient.name.given}</p>
                    <p>Patient Last Name: {this.state.patient.name.family}</p> 
                    <p>Patient Gender: {this.state.patient.gender}</p> 
                    <p>Patient ID number: {this.state.patient.id}</p> 
                    <p>Patient BirthDate: {this.state.patient.birthDate}</p> 
                    </div>
                );
    }
}
// ReactDOM.render(<Patient />, document.getElementById('patient'));