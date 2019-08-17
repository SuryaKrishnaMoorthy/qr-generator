import React, { Component } from "react";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import { withRouter } from "react-router";

import "./QrForm.css";
import QrCode from "../QrCode/QrCode";

class QrForm extends Component {
 
    state = {
        // title: '',
        name: '',
        date: '',
        labPartners: '',
        purpose: '',
        materialsUsed: '',
        procedure: '',
        data: '',
        results: '',
        conclusion: '',
        displayQr: false
    }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
    

    handleSubmit = (title) => {
        this.setState({ title: title, displayQr: !this.state.displayQr });
    }

    render() {
      console.log("this.state", this.state);

        if(this.state.displayQr) {
          // this.props.history.push("/qr-code")
          return <QrCode qrValue={"this.state"} />;
        } else {
          return (
            <Container >
              <Form style={{maxWidth: '80%', marginLeft: "10%"}} onSubmit={this.handleSubmit}>
                <Row form>
                  <Col md={6}>                  
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input 
                          type="text" 
                          name="title" 
                          id="title" 
                          placeholder="Title of Sample" 
                          onChange={this.handleChange} 
                        />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" placeholder="Full Name" onChange={this.handleChange} />
                    </FormGroup> 
                  </Col>
                </Row>
                
                <Row form>
                  <Col md={3}>
                    <FormGroup>
                        <Label for="dateOfExperiment">Date</Label>
                        <Input
                            type="date"
                            name="date"
                            id="dateOfExperiment"
                            placeholder="Date of experiment"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                  </Col>
                  <Col md={9}>
                    <FormGroup>
                      <Label for="labPartners">Lab Partners</Label>
                      <Input 
                        type="textarea" 
                        style={{height: '38px'}} 
                        name="labPartners" 
                        id="labPartners" 
                        placeholder="Lab Partners"
                        onChange={this.handleChange}
                       />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="purpose">Purpose</Label>
                  <Input 
                    type="text" 
                    name="purpose" 
                    id="purpose" 
                    placeholder="Purpose"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="materialsUsed">Materials Used</Label>
                  <Input 
                    type="textarea" 
                    name="materialsUsed" 
                    id="materialsUsed" 
                    placeholder="Materials Used"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="procedure">Procedure</Label>
                  <Input 
                    type="textarea" 
                    name="procedure" 
                    id="procedure" 
                    placeholder="Procedure"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="data">Data</Label>
                  <Input 
                    type="textarea" 
                    name="data" 
                    id="data" 
                    placeholder="Data"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="results">Results</Label>
                  <Input 
                    type="textarea" 
                    name="results" 
                    id="results" 
                    placeholder="Results"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="conclusion">Conclusion</Label>
                  <Input 
                    type="textarea" 
                    name="conclusion" 
                    id="conclusion" 
                    placeholder="Conclusion"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                
                <FormGroup>
                  {/* <Label for="exampleFile">File</Label> */}
                  <Input type="file" name="file" id="exampleFile" />
                  <FormText color="muted">
                    Format of the file - pdf, word, excel
                  </FormText>
                </FormGroup>
                <Button className="Button" type="submit">Genereate QrCode</Button>
              </Form>
            </Container>
          )
        }
      }
}


export default (QrForm)
