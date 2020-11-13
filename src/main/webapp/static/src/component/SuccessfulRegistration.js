import React from "react";
import { useLocation } from "react-router-dom";

const SuccessfulRegistration = () => {
    const location = useLocation();
    const createdApartments = location.component.props.response;

    const listItems = createdApartments.map(item =>(
                <li key={item.apartmentNumber}>{item.apartmentNumber}</li>,
            <li key={item.apartmentNumber}>{item.firstName}</li>,
            <li key={item.apartmentNumber}>{item.lastName}</li>,
            <li key={item.apartmentNumber}>{item.password}</li>,
            <li key={item.apartmentNumber}>{item.login}</li>,
            <li key={item.apartmentNumber}>{item.apartmentNumber}</li>
        ));

    return (
        <ul>{listItems}</ul>
    );
}

export default SuccessfulRegistration;