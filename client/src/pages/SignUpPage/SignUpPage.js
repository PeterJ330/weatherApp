import React, { Component } from 'react';
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import NavBarLoginPage from "../../components/NavbarLoginPage";
import SignUpForm from "../../components/SignUpForm";
import Footer from "../../components/Footer";

class SignUpPage extends Component {
    state = {
        username: "",
        password: "",
        confirmPassword: ""
    };

    componentDidMount() {
        this.loadUsers();
    }

    loadUsers = () => {
        API.getUsers()
            .then(res =>
                this.setState({ users: res.data, username: "", password: "" })
            )
            .catch(err => console.log(err));
    };

    deleteUser = id => {
        API.deleteUser(id)
            .then(res => this.loadUsers())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        console.log("handleFormSubmit");
        event.preventDefault();
        if (this.state.username && this.state.password && this.state.confirmPassword) {
            if (this.state.password === this.state.confirmPassword) {
                console.log("Should be running API.saveUser()");
                API.saveUser({
                    username: this.state.username,
                    password: this.state.password,
                })
                    .then(res => this.loadUsers())
                    .catch(err => console.log(err));
            } else {
                alert("Passwords do not match")
            }
        } else {
            alert("Please fill out all fields.")
        }
    };


    render() {
        return (
            <div>
                <NavBarLoginPage />
                <SignUpForm
                    value={this.state.text}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <Footer />
            </div>
        )
    }
}

export default SignUpPage;