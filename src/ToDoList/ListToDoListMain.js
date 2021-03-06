import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListToDoTasks from "./ListToDoTasks";


class ListToDoListMain extends React.Component {
    render() {
        return (
            <div>
              <AppBar position="fixed">
                <Toolbar>
                  <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6">
                    Todo Lists
                  </Typography>
                </Toolbar>
            </AppBar>
            <div className="newTaskBtnContainer">
              <div>
                <ListToDoTasks></ListToDoTasks>
              </div>
              
            </div>
          </div>
        )
    }
}

export default ListToDoListMain;