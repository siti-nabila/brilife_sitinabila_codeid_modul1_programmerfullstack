import React, { Component } from 'react';
import { 
  Menu, 
} from 'semantic-ui-react';
import {
    Link
} from 'react-router-dom';

class Sidebar extends Component {

  constructor(props) {
    super(props);
  }

    state = {
        activeItem: '' 
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {

    const { activeItem } = this.props

      return (
          <Menu pointing fixed secondary vertical >
            <Menu.Item
              name='Propinsi'
              as={ Link }
              to='/'
              active={activeItem === 'Propinsi'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Kontrsepsi'
              as={ Link }
              to='/kontrasepsi'
              active={activeItem === 'Kontrasepsi'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Pemakai'
              as={ Link }
              to='/pemakai'
              active={activeItem === 'Pemakai'}
              onClick={this.handleItemClick}
            />
          </Menu>
      )
    };
}

export default Sidebar;