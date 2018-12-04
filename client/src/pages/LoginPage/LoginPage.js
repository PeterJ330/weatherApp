import React, { Component } from 'react';
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import NavBarLoginPage from "../../components/NavbarLoginPage";
import LoginForm from "../../components/LoginForm";
import Footer from "../../components/Footer";


class LoginPage extends Component {
    state = {
        username: "",
        password: ""
    };

    // componentDidMount() {
    //     this.loadUsers();
    // }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(`
        ${this.state.username}
        ${this.state.password}
        `);

    }


    render() {
        return (
            <div>
                <NavBarLoginPage />
                <LoginForm
                    value={this.state.text}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <Footer />
            </div>
        )
    }
}

export default LoginPage;