import React, { Component } from 'react'
import {login} from '../actions/formAction'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types';
import { Button} from '@material-ui/core';
// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
// import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});




class Login extends Component {
    constructor() {
    super();
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.state ={
      email:"",
      password: "",
      stat: "false"
      
    }

  } 
  changeHandler = (event) =>{
    const {name, value} = event.target;
    console.log(value)
    this.setState({
        
          [name]: value
        
    });
  }

  // onsubmit = (e) => {
  // e.preventDefault();
  // console.log(this.state.email);
  // console.log(this.state.password);
  // const data = {
  //   email : this.state.email,
  //   password : this.state.password,
  //   stat : this.state.stat
  // }
  // fetch('http://localhost:5000/login',{
  //   method: 'POST',
  //   headers: {"Content-Type": "application/json"},
  //   body: JSON.stringify(data)
  // })
  // .then(function(response){
  //   return response.json()
  // }).then(function(body){
  //   console.log(body);
    
  // });
  
  // }
  onSubmit = (e) => {

    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password
    }

    console.log(data);
    this.props.login(data)
      .then((data)=>console.log(data), (err)=> err.response.json().then((err)=> console.log(err)))
  
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div>Login</div>
        <form onSubmit={this.onSubmit}>

        <label htmlFor="email">Enter your email</label>
        <input  name="email" type="email" onChange={this.changeHandler} value={this.state.email}/>

        <label htmlFor="birthdate">Password</label>
        <input  name="password" type="password" onChange={this.changeHandler}  value={this.state.password}/>

        <Button variant="contained" color="primary">
          Submit
        </Button>
      </form>
    
      {/* <form className={classes.container} noValidate autoComplete="off">
        <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
      </form> */}
        
        </div>
    )
  }
}

// Login.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default connect(null, {login}) (Login)