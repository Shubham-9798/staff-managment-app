import React, { Component } from 'react'
import { connect } from 'react-redux';
import {fetchStaff} from '../actions/staffActions'

class Admin extends Component {
    componentWillMount() {
        this.props.fetchStaff();
        console.log(this.props)
    }
    
  render() {
    // const staffItems = this.props.staffs.map( staff =>{
    //   <div>
    //     <h3>{staff.name}</h3>
    //   </div>
    // })
    return (
      <div>
        {/* {staffItems} */}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  staffs: state.staffs.items
})

export default connect(mapStateToProps, { fetchStaff})(Admin)