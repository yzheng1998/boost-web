import React, { useState } from 'react'
import localStore from 'store'
import { styles } from './styles'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const HeaderBar = classes => {
  const [left, setLeft] = useState(false)

  const isLoggedIn = localStore.get('user')

  const headerItems = [
    { text: 'Request/Contribute Funds', url: '/request' },
    { text: 'View/Edit Profile', url: '/profile' },
    { text: 'How it works', url: '' },
    { text: 'Sign Out', url: '/login' }
  ]

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={() => setLeft(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={left} onClose={() => setLeft(false)}>
        <div
          tabIndex={0}
          role="button"
          onClick={() => setLeft(false)}
          onKeyDown={() => setLeft(false)}
        >
          <div className={classes.list}>
            <List>
              {isLoggedIn ? (
                headerItems.map(({ text, url }) => (
                  <Link key={text} to={url}>
                    <ListItem button key={text}>
                      <ListItemText primary={text} />
                    </ListItem>
                  </Link>
                ))
              ) : (
                <Link key="Login" to="/login">
                  <ListItem button key="Login">
                    <ListItemText primary="Login" />
                  </ListItem>
                </Link>
              )}
            </List>
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default withStyles(styles)(HeaderBar)
