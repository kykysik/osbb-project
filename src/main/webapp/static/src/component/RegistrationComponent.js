import React, {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import SuccessfulRegistration from "./SuccessfulRegistration";

const RegistrationComponent = () => {
    const history = useHistory();

    const [adminLogin, setAdminLogin] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const [address, setAddress] = useState('');
    const [apartmentQuantity, setApartmentQuantity] = useState(0);
    const [budgetQuantity, setBudgetQuantity] = useState(0);
    const [resp, setResp] = useState('');


    let requestBody = {
        adminLogin: adminLogin,
        firstName: firstName,
        lastName: lastName,
        adminPassword: adminPassword,
        address: address,
        apartmentQuantity: apartmentQuantity,
        budgetQuantity: budgetQuantity
    }

    const createBuilding = (e) => {
        e.preventDefault()

        axios.post('http://localhost:5505/osbb/building/reg', requestBody)
            .then(res => {
                history.push({
                    pathname: "/osbb/building/registration/successful",
                    component: <SuccessfulRegistration response={res.data}/>
                });
            });
    };

    //
    // // useEffect(() => {
    // //     createBuilding()
    // // }, []);
    //
    return (
        <>
            <form onSubmit={createBuilding}>
                <h1>{adminLogin}</h1>

                <CreateFieldWithName screenFieldName='Login' stateValue='adminLogin'
                                     onChangeValue={(event) => setAdminLogin(event.target.value)}/>
                <CreateFieldWithName screenFieldName='First Name' stateValue='firstName'
                                     onChangeValue={(event) => setFirstName(event.target.value)}/>
                <CreateFieldWithName screenFieldName='Last Name' stateValue='lastName'
                                     onChangeValue={(event) => setLastName(event.target.value)}/>
                <CreateFieldWithName screenFieldName='Password' stateValue='adminPassword'
                                     onChangeValue={(event) => setAdminPassword(event.target.value)}/>
                <CreateFieldWithName screenFieldName='Address' stateValue='address'
                                     onChangeValue={(event) => setAddress(event.target.value)}/>
                <CreateFieldWithName screenFieldName='Apartment Quantity' stateValue='apartmentQuantity'
                                     onChangeValue={(event) => setApartmentQuantity(event.target.value)}/>
                <CreateFieldWithName screenFieldName='Budget Quantity' stateValue='budgetQuantity'
                                     onChangeValue={(event) => setBudgetQuantity(event.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

function CreateFieldWithName(props) {
    return (
        <div>
            <div>
                <label> {props.screenFieldName}: </label>
            </div>
            <div>
                <input type="text" name={props.screenFieldName}
                       onChange={props.onChangeValue}
                />
            </div>
        </div>
    );
}

export default RegistrationComponent;







