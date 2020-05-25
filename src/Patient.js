import React from 'react'; 
import axios from 'axios';

export default class Patient extends React.Component{
    constructor(){
        super();

        axios.
            get(`http://cqm-sandbox.alphora.com/cqf-ruler-r4/fhir/Patient/denom-EXM104-FHIR4`)


    }
}

