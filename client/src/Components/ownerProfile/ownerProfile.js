import React, { Component } from "react";
import { Form, Button, Navbar } from "react-bootstrap";
import { Input } from "reactstrap";
import { Col } from "react-bootstrap";
import axios from "axios";
import jwt_decode from "jwt-decode";
import FacilityProfile from "./FacilityProfile";
import ServicesProfile from "./ServicesProfile";
import Footer from "../SubPages/Footer/Footer";
import ContolPanel from "../ControlPanel/ControlPanel";
import { toast } from "react-toastify";
import PhotoUpload from "../PhotoUpload/PhotoUpload";
// import NavBar from '../Navbar/Navbar';
import RenderOwnerData from "../renderOwnerData/RenderOwnerData";
export class OwnerProfile extends Component {
  constructor() {
    super();
    this.state = {
      _id: "",
      fullName: "",
      email: "",
      mobileNumber: "",
      area: "",
      placeName: "",
      license: "",
    };
    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const token = localStorage.ownertoken;
    const decoded = jwt_decode(token);
    this.setState({
      _id: decoded.id,
      fullName: "",
      email: "",
      mobileNumber: "",
      area: "",
      placeName: "",
      license: "",
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState._id !== this.state._id) {
      this.handleSubmit();
    }
  }

  handleSubmitSave = (e) => {
    e.preventDefault();
    axios
      .put(`/updateOwner/${this.state._id}`, {
        fullName: this.state.fullName,
        email: this.state.email,
        mobileNumber: this.state.mobileNumber,
        area: this.state.area,
        placeName: this.state.placeName,
        license: this.state.license,
      })
      .then((res) => {
        toast("Your Services Added Successfully ❤", {
          type: "success",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = () => {
    axios
      .get(`/Owner/${this.state._id}`)
      .then((res) => {
        console.log(res.data);
        const data = res.data[0];
        this.setState({
          fullName: data.fullName,
          email: data.email,
          mobileNumber: data.mobileNumber,
          area: data.area,
          placeName: data.placeName,
          license: data.license,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    // const b = this.state.data;
    return (
      <div>
        <div className="control">
          <ContolPanel />
        </div>
        <Form
          style={{ marginLeft: "25%", marginTop: "-125%", maxWidth: "80%" }}
        >
          <h2> Edit Your Profile </h2>
          <br></br>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Full Name</Form.Label>
              <Input
                type="text"
                name="fullName"
                value={this.state.fullName}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Mobile Number</Form.Label>
              <Input
                type="number"
                maxLength="10"
                minLength="10"
                name="mobileNumber"
                value={this.state.mobileNumber}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>area</Form.Label>
              <Input
                type="select"
                name="area"
                value={this.state.area}
                onChange={this.handleChange}
              >
                <option>Gaza</option>
                <option>North Gaza</option>
                <option>Middle Area</option>
                <option>Khan Younis</option>
                <option>Rafah</option>
              </Input>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Place Name</Form.Label>
              <Input
                type="text"
                name="placeName"
                value={this.state.placeName}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>License</Form.Label>
              <Input
                type="file"
                name="license"
                value={this.state.license || ""}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Button
            onClick={this.handleSubmitSave}
            variant="primary"
            type="submit"
          >
            SAVE
          </Button>
        </Form>
        <hr></hr>
        <FacilityProfile />
        <hr />
        <ServicesProfile />
      </div>
    );
  }
}

export default OwnerProfile;
