import React, { Component } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { Container, Grid, Message, TransitionablePortal, Icon } from 'semantic-ui-react'


class Page extends Component {

    constructor(props) {
      super(props);

      this.state = {
        messageShow: true,
        animation: 'fade',
        duration: 500,
        visible: false,
      }
    }

    handleDismiss = () => {
      this.setState({ visible: false })
    }
    componentDidUpdate(prevProps, prevState) {
      const { error } = this.props;
      if (prevProps.error != error) {
        this.setState({ messageShow: false});
      }
    }

    hideMessage = () => {
      this.setState({ messageShow: true});
    }


    render() {
    const { children, error, activeItem } = this.props;
    const { animation, duration, messageShow, hideMessage} = this.state;

      return (
        <Container fluid>
          <Header />
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column width={3}>
                <Sidebar activeItem={activeItem}/>
              </Grid.Column>  
              <Grid.Column width={2}></Grid.Column>
              <Grid.Column>
              <Message 
                  negative
                  floating
                  hidden={messageShow}
                  onDismiss={this.hideMessage }
                  header='Error!'
                  content={error?.message}
                />
                {children}
                
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>

      )
    };
}

export default Page;