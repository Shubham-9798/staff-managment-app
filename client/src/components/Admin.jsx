import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchStaff } from '../actions/staffActions';

class Admin extends Component {
  componentWillMount() {
    //  this.props.demo();
    this.props.fetchStaff();
   
  }
  
  render() {
    // const postItems = this.props.posts.map(post => (
    //   <div key={post.id}>
    //     <h3>{post.title}</h3>
    //     <p>{post.body}</p>
    //   </div>
    // ));
    const postItem = this.props.staff.map(s => (
       <li key={s.id}>{s.name}</li>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItem}
      </div>
    );
  }
}

// Posts.propTypes = {
//   fetchPosts: PropTypes.func.isRequired,
//   posts: PropTypes.array.isRequired,
//   newPost: PropTypes.object
// };

const mapStateToProps = state => ({
   staff: state.staffs.items
});

export default connect(mapStateToProps, { fetchStaff })(Admin);