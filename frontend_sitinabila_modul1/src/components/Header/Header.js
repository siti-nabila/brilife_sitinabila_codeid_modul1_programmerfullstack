import React, { Component } from 'react';
import { Header as Heading, Menu, Icon } from 'semantic-ui-react'

class Header extends Component {
    render() {
      return (
        <Menu pointing inverted color='teal'  >
            <Menu.Menu position='left'>
              <Menu.Item header  > 
                <Heading inverted content='Keluarga Berencana' />
              </Menu.Item>
            </Menu.Menu>
            <Menu.Menu position='right'>
              <Menu.Item>
                <Icon.Group as="a" >
                    <Icon circular link size="large" name='user' />
                        Selamat Datang, Admin
                </Icon.Group>
              </Menu.Item>
            </Menu.Menu>
        </Menu>
      )
    };
}

export default Header;