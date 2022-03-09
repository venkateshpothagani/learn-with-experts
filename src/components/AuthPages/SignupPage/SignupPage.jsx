import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./SignupPage.module.css";

const SignupPage = () => {
  //TODO: Remove techList's default value. Get that value from server.

  const techList = ["C", "C#", "C++", "Java", "Python", "OOP"];

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/;

  //* State initiation
  const initialFormData = Object.freeze({
    personalName: "",
    username: "",
    mail: "",
    newPassword: "",
    confirmPassword: "",
    expertizeOption1: "",
    expertizeOption2: "",
    expertizeOption3: "",
    interestedOption1: "",
    interestedOption2: "",
    interestedOption3: "",
  });
  const [formData, setFormData] = useState(initialFormData);

  //* For dynamic render of select options
  const techOptions = techList.map((value, index) => (
    <option key={index} value={value}>
      {value}
    </option>
  ));

  const inputNames = Object.freeze({
    personalName: "personalName",
    username: "username",
    mail: "mail",
    newPassword: "newPassword",
    confirmPassword: "confirmPassword",
    expertizeOption1: "expertizeOption1",
    expertizeOption2: "expertizeOption2",
    expertizeOption3: "expertizeOption3",
    interestedOption1: "interestedOption1",
    interestedOption2: "interestedOption2",
    interestedOption3: "interestedOption3",
  });

  //* To place dynamically css class for input fields based on values
  const inputClass = "form-control form-control-sm ";

  //* Validation for visual changes
  const handleInputChange = (event) => {
    const inputName = event.target.name;

    //* User full name (personal name)
    if (inputName === inputNames.personalName) {
      const length = event.target.value.trim().length;

      if (length <= 30 && length >= 3) {
        event.target.className = inputClass + "is-valid";
      } else {
        event.target.className = inputClass + "is-invalid";
      }
    }

    //* Username
    if (inputName === inputNames.username) {
      const length = event.target.value.trim().length;

      if (length <= 30 && length >= 6) {
        event.target.className = inputClass + "is-valid";
      } else {
        event.target.className = inputClass + "is-invalid";
      }
    }

    //* Email
    if (inputName === inputNames.mail) {
      if (emailPattern.test(event.target.value)) {
        event.target.className = inputClass + "is-valid";
      } else {
        event.target.className = inputClass + "is-invalid";
      }
    }

    //* Password
    if (inputName === inputNames.newPassword) {
      if (passwordPattern.test(event.target.value)) {
        event.target.className = inputClass + "is-valid";
        document.getElementById("weakPwd").setAttribute("hidden", "true");
      } else {
        event.target.className = inputClass + "is-invalid";
        document.getElementById("weakPwd").removeAttribute("hidden", "false");
      }
    }

    //* Confirm Password
    if (inputName === inputNames.confirmPassword) {
      if (
        document.getElementById("new-password").value === event.target.value
      ) {
        event.target.className = inputClass + "is-valid";
        document.getElementById("mismatchPwd").setAttribute("hidden", "true");
      } else {
        event.target.className = inputClass + "is-invalid";
        document
          .getElementById("mismatchPwd")
          .removeAttribute("hidden", "false");
      }
    }

    //* updateState
    setFormData({
      ...formData,
      [event.target.name]: event.target.value.trim(),
    });
  };

  //* Form validation and for valid details redirects to home page
  const loginFormValidation = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className={styles.page}>
      {/* //* OAuth Buttons for Github and Google */}
      <div className="row justify-content-around gap-2">
        <button className="btn btn-dark btn-sm col-sm-5" type="button">
          <i className="bi-github px-2"></i>
          GitHub
        </button>
        <button className="btn btn-danger btn-sm col-sm-5" type="button">
          <i className="bi-google px-2"></i>
          Google
        </button>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <hr />
        </div>
        <div className="col-auto">OR</div>
        <div className="col">
          <hr />
        </div>
      </div>

      <form onSubmit={loginFormValidation}>
        {/* //* Input field for user personal name  */}
        <div className="mb-3">
          <label htmlFor="full-name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            name={inputNames.personalName}
            className="form-control form-control-sm"
            id="full-name"
            placeholder="Full Name"
            onChange={handleInputChange}
            required
          />
          <div id="fullnameHelp" className="form-text">
            Name should be in-between 3 and 30 chars.
          </div>
        </div>

        {/* //* Input field for username  */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            name={inputNames.username}
            className={inputClass}
            id="username"
            placeholder="Username"
            onChange={handleInputChange}
            required
          />
          <div id="usernameHelp" className="form-text">
            Name should be in-between 6 and 30 chars.
          </div>
        </div>

        {/* //* Input field for email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address <span className="form-text ml-5">(Optional)</span>
          </label>
          <input
            type="email"
            name={inputNames.mail}
            className={inputClass}
            id="email"
            placeholder="Email Address"
            autoComplete="email"
            onChange={handleInputChange}
          />
          <div id="emailHelp" className="form-text">
            To recover account when you forgot password.
          </div>
        </div>

        {/* //* Input field for password */}
        <div className="mb-3">
          <label htmlFor="new-password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="newPassword"
            className="form-control form-control-sm"
            id="new-password"
            placeholder="Password"
            onChange={handleInputChange}
            required
          />
          {/* //* shows when password doesn't requirements */}
          <span id="weakPwd" className="text-danger form-text" hidden>
            Password doesn't meet requirements
          </span>
          <div id="newPasswordHelp" className="form-text">
            Password Requirements:
            <ol>
              <li>Atleast 8 characters</li>
              <li>Atleast 1 small alphabet</li>
              <li>Atleast 1 capital alphabet</li>
              <li>Atleast 1 number</li>
              <li>Atleast 1 special character</li>
            </ol>
          </div>
        </div>

        {/* //* Input field for password confirmation */}
        <div className="mb-3">
          <label htmlFor="confirm-password" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            className="form-control form-control-sm"
            id="confirm-password"
            placeholder="Confirm Password"
            onChange={handleInputChange}
            required
          />
          {/* //* Shows when both password doesn't match  */}
          <span id="mismatchPwd" className="text-danger form-text" hidden>
            Both passwords are not matched
          </span>
          <div id="confirmPasswordHelp"></div>
        </div>

        <div className="row justify-content-between gap-2  mb-3">
          {/* //* Select Expertize techList options */}
          <label className="form-label">
            Expertize Tech <span className="form-text ml-5">(Optional)</span>
          </label>
          {/* //* Select Expertize option 1 */}
          <div className="col-sm-3">
            <select
              className="form-select form-select-sm"
              onChange={handleInputChange}
              name={inputNames.expertizeOption1}
            >
              <option value="">Select</option>
              {techOptions}
            </select>
          </div>
          {/* //* Select Expertize option 2 */}
          <div className="col-sm-3">
            <select
              className="form-select form-select-sm"
              onChange={handleInputChange}
              name={inputNames.expertizeOption2}
            >
              <option value="">Select</option>
              {techOptions}
            </select>
          </div>
          {/* //* Select Expertize option 3 */}
          <div className="col-sm-3">
            <select
              className="form-select form-select-sm"
              onChange={handleInputChange}
              name={inputNames.expertizeOption3}
            >
              <option value="">Select</option>
              {techOptions}
            </select>
          </div>
        </div>

        {/* //* Select Interested techList options */}
        <div className="row justify-content-between gap-2 mb-3">
          <label className="form-label">
            Interested Tech <span className="form-text ml-5">(Optional)</span>
          </label>
          {/* //* Select Interested option 1 */}
          <div className="col-sm-3">
            <select
              className="form-select form-select-sm"
              onChange={handleInputChange}
              name={inputNames.interestedOption1}
            >
              <option value="">Select</option>
              {techOptions}
            </select>
          </div>
          {/* //* Select Interested option 2 */}
          <div className="col-sm-3">
            <select
              className="form-select form-select-sm"
              onChange={handleInputChange}
              name={inputNames.interestedOption2}
            >
              <option value="">Select</option>
              {techOptions}
            </select>
          </div>
          {/* //* Select Interested option 3 */}
          <div className="col-sm-3">
            <select
              className="form-select form-select-sm"
              onChange={handleInputChange}
              name={inputNames.interestedOption3}
            >
              <option value="">Select</option>
              {techOptions}
            </select>
          </div>
        </div>

        {/* //* Button to submit details and link to LoginPage */}
        <div className="form-group row justify-content-around gap-2 mb-3">
          <button className="btn btn-primary btn-sm col-sm-5" type="submit">
            <i class="bi bi-person-plus-fill  px-2"></i>
            Create Account
          </button>
          <div className="btn btn-sm col-sm-6" type="button">
            Already have an account?{" "}
            <Link to="/login" className="text-underline">
              Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
