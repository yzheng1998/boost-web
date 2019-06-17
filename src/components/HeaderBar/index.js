import React, { useState } from 'react'
import localStore from 'store'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
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
    { text: 'How it works', url: '#' },
    { text: 'Sign Out', url: '/login' }
  ]

  const onLoginPage = String(window.location.href).includes('/login')

  return (
    <React.Fragment>
      <AppBar color="primary" position="static" className={classes.appBar}>
        <Toolbar>
          {!onLoginPage && (
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={() => setLeft(true)}
            >
              {isLoggedIn ? (
                <MenuIcon />
              ) : (
                <a href="login">
                  <HomeIcon style={{ color: 'white' }} />
                </a>
              )}
            </IconButton>
          )}
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
              {isLoggedIn &&
                headerItems.map(({ text, url }) => (
                  <Link key={text} to={url}>
                    <ListItem button key={text}>
                      <ListItemText primary={text} />
                    </ListItem>
                  </Link>
                ))}
            </List>
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  )
}

export default HeaderBar
