import React, { Component } from "react";
import { Link } from "react-router-dom";

class Signup extends Component {
    state = {
        validUsername: false,
        validPassword: false,
        confirmPassword: false
    }

    componentDidUpdate() {
        this.validatePassword();
        this.confirmPassword();
        this.validateUsername();
    }

    validateUsername() {
        if (this.props.username.length > 1 && !this.state.validUsername) {
            this.setState({
                validUsername: true
            });
        }
        if (this.props.username.length < 1 && this.state.validUsername) {
            this.setState({
                validUsername: false
            });
        }
    }

    validatePassword() {
        let strongPassword = new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/);
        let valid = strongPassword.test(this.props.password);
        if (!this.state.validPassword && valid) {
            this.setState({
                validPassword: true
            });
        }
        if (this.state.validPassword && !valid) {
            this.setState({
                validPassword: false,
            });
        }
    }

    confirmPassword() {
        if (this.props.password === this.props.confirmPassword && !this.state.confirmPassword && this.props.password) {
            this.setState({
                confirmPassword: true
            });
        }
        if (this.props.password !== this.props.confirmPassword && this.state.confirmPassword) {
            this.setState({
                confirmPassword: false
            });
        }
    }

    render() {
        return (
            <div>
                <h2 className="loginTitle title-font">Signup</h2>

                <form className="form">
                    <input
                        value={this.props.username} onChange={this.props.handleInputChange} valid={this.state.validUsername}
                        name="username"
                        id="username"
                        type="text"
                        placeholder="username"
                    />
                    <input
                        value={this.props.password} onChange={this.props.handleInputChange} valid={this.state.validPassword}
                        name="password"
                        id="password"
                        type="password"
                        placeholder="Password"
                    />
                    <input
                        value={this.props.confirmPassword} onChange={this.props.handleInputChange} valid={this.state.confirmPassword}
                        name="confirmPassword"
                        id="confirmPassword"
                        type="password"
                        placeholder="confirm password"
                    />
                    {(this.state.validUsername && this.state.validPassword && this.state.confirmPassword) ? (
                        <button onClick={this.props.handleSignup} color="success" block>Signup</button>
                    ) : (
                            <button onClick={this.props.handleSignup} color="danger" block disabled>Signup</button>
                        )}

                </form>
            </div>
        );
    }
}

export default Signup;