import React, { Component } from 'react';
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import NavBarLoginPage from "../../components/NavbarLoginPage";
import SignUpForm from "../../components/SignUpForm";
import Footer from "../../components/Footer";

class SignUpPage extends Component {
    state = {
        users: [],
        username: "",
        password: "",
        confirmPassword: "",
        duplicateUsername: ""
    };

    componentDidMount() {
        this.loadUsers();

    }

    loadUsers = () => {
        API.getUsers()
            .then(res =>
                this.setState({
                    users: res.data,
                    username: "",
                    password: ""
                })
            )
            .then(res => {
                console.log(this.state.users);
                console.log(this.state.users[0]);
                console.log(this.state.users[0].username);
                console.log(this.state.users.length);
            })
            .catch(err => console.log(err));
    };

    // deleteUser = id => {
    //     API.deleteUser(id)
    //         .then(res => this.loadUsers())
    //         .catch(err => console.log(err));
    // };

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
                // for (var i = 0; i < this.state.users.length; i++) {
                //     if (this.state.username === this.state.users[i].username) {
                //         alert("Username already exists")
                //     }
                // };
                API.saveUser({
                    username: this.state.username,
                    password: this.state.password,
                })
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