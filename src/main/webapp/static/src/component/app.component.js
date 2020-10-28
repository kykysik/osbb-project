import React from "react";
import Another from "./Another";

export default class AppComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            adminLogin: 'Test',
            firstName: '',
            lastName: '',
            adminPassword: '',
            address: '',
            apartmentQuantity: '',
            budgetQuantity: ''
        }

        this.response = {}
    }

    render() {
        return (
            <>
                <form onSubmit={() => this.createBuilding()}>
                    <h1>{this.state.adminLogin}</h1>

                    <this.createFieldWithName object={this} screenFieldName='Login' stateValue = 'adminLogin'
                                              onChangeValue = {(event) => this.onAdminLoginChange(event.target.value)}/>
                    <this.createFieldWithName object={this} screenFieldName='First Name' stateValue = 'firstName'
                                              onChangeValue = {(event) => this.onFirstNameChange(event.target.value)}/>
                    <this.createFieldWithName object={this} screenFieldName='Last Name' stateValue = 'lastName'
                                              onChangeValue = {(event) => this.onLastNameChange(event.target.value)}/>
                    <this.createFieldWithName object={this} screenFieldName='Password' stateValue = 'adminPassword'
                                              onChangeValue = {(event) => this.onAdminPasswordChange(event.target.value)}/>
                    <this.createFieldWithName object={this} screenFieldName='Address' stateValue = 'address'
                                              onChangeValue = {(event) => this.onAddressChange(event.target.value)}/>
                    <this.createFieldWithName object={this} screenFieldName='Apartment Quantity' stateValue = 'apartmentQuantity'
                                              onChangeValue = {(event) => this.onApartmentQuantityChange(event.target.value)}/>
                    <this.createFieldWithName object={this} screenFieldName='Budget Quantity' stateValue = 'budgetQuantity'
                                              onChangeValue = {(event) => this.onBudgetQuantityChange(event.target.value)}/>
                    <button type="submit">Submit</button>
                </form>
            </>
        );
    }

    async createBuilding(e) {
        e.preventDefault
        const requestOptions = {
            // this.state
            body: JSON.stringify(this.state),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        };

        let response = await fetch('http://localhost:5505/osbb/building/reg', requestOptions);
        const entities = await response.text();
        this.response = entities;
        alert(entities)
        console.log(entities);
        return entities;
    }

    createFieldWithName(props) {
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

    onAdminLoginChange(login) {
        this.setState({adminLogin: login});
    }

    onAdminPasswordChange(adminPassword) {
        this.setState({adminPassword: adminPassword})
    }

    onFirstNameChange(firstName) {
        this.setState({firstName: firstName})
    }

    onLastNameChange(lastName) {
        this.setState({lastName: lastName})
    }

    onAddressChange(address) {
        this.setState({address: address})
    }

    onApartmentQuantityChange(apartmentQuantity) {
        this.setState({apartmentQuantity: apartmentQuantity})
    }

    onBudgetQuantityChange(budgetQuantity) {
        this.setState({budgetQuantity: budgetQuantity})
    }
}
//
//export default AppComponent; onChange={(event) => this.onAdminLoginChange(event.target.value)
//
class ItemList extends React.Component {
    render() {
        return (<div>
                <div>
                    <label> {this.props.screenFieldName}: </label>
                </div>
                <div>
                    <input type="text" name={this.props.screenFieldName}
                           onChange={(event) => this.onAdminLoginChange(event.target.value)}
                    />
                    {/*{console.log(this.state.adminLogin)}*/}
                </div>
            </div>
        );
    }

    onAdminLoginChange(login) {
        this.setState({adminLogin: login == null ? 's' : login});
    }

    onAdminPasswordChange(event) {
        this.setState({adminPassword: event.target.adminPassword})
    }

    onFirstNameChange(event) {
        this.setState({firstName: event.target.firstName})
    }

    onLastNameChange(event) {
        this.setState({lastName: event.target.lastName})
    }

    onAddressChange(event) {
        this.setState({address: event.target.address})
    }

    onApartmentQuantityChange(event) {
        this.setState({apartmentQuantity: event.target.apartmentQuantity})
    }

    onBudgetQuantityChange(event) {
        this.setState({budgetQuantity: event.target.budgetQuantity})
    }
}