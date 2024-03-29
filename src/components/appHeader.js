import React from 'react';
import { Menu, Image, Container, Input, Button } from 'semantic-ui-react'

class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchChange = props.onSearchChange;

    this.handleClick = this.handleClick.bind(this);
  }

  
  onSearchChange = null;
  state = {
    value: '',
    onlyCurrent: false
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    this.onSearchChange({searchTerm: event.target.value, 
      onlyCurrent: this.state.onlyCurrent});
  }

  handleClick = () => {
    this.setState({ onlyCurrent: !this.state.onlyCurrent });
    this.onSearchChange({searchTerm: this.state.value, 
      onlyCurrent: !this.state.onlyCurrent});
  }

  render() {

    let iconDirectory = '/fresh-calendar-web';
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      iconDirectory = '';
    }
    //const { name } = this.props;
    return (
      <Menu fixed='top' stackable>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src={ iconDirectory + '/icon.svg'} style={{ marginRight: '1.5em' }} />
          Kalendarz sezonowy
        </Menu.Item>
        <Menu.Item wide="true" style={{flexGrow:1}}>
          <Input icon='search' placeholder='Wyszukaj...'
                 value={this.state.value} onChange={this.handleChange}
                  />
        </Menu.Item>
        <Menu.Item>
        <Button toggle active={this.state.onlyCurrent} onClick={this.handleClick}>
                 Tylko aktualnie dostępne
       </Button>
        </Menu.Item>
      </Container>
</Menu>
    );
  }
}

export default AppHeader;