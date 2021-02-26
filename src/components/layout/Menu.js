
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signOut } from '../../store/actions/authActions';

function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <i className="material-icons">menu</i>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
      {props.auth.uid !=null ? (
            <div>
                <MenuItem onClick={handleClose}><NavLink to='/create'>New Plan</NavLink></MenuItem>
                <MenuItem onClick={handleClose}><a onClick={props.signOut}>Log Out</a></MenuItem>
            </div>):(
            <div>
                <MenuItem onClick={handleClose}> <NavLink to='/signup'>Sign Up</NavLink></MenuItem>
                <MenuItem onClick={handleClose}> <NavLink to='/signin'>Log In</NavLink></MenuItem>
            </div>
            )}
        
      </Menu>
    </div>
  );
};

const mapStateToProps = (state) =>{
    //console.log(state);
    return {
        auth: state.firebase.auth
    }
};


const mapDispatchToState = (dispatch) =>{
    return {
        signOut: () =>dispatch(signOut())
    }
}
export default connect(mapStateToProps,mapDispatchToState)(SimpleMenu);