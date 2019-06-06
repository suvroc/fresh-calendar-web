import React from 'react';
import { Grid, Input, Sticky, Header, Button } from 'semantic-ui-react'

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
    //const { name } = this.props;
    return (
      <Sticky>
        <Grid>
          <Grid.Row stretched>
            <Grid.Column floated='left' width={2}>
              <Header as='h3'>Kalendarz sezonowy</Header>
            </Grid.Column>
            <Grid.Column floated='right' width={11}>
              <Input icon='search' placeholder='Wyszukaj...'
                value={this.state.value} onChange={this.handleChange} />
            </Grid.Column>
            <Grid.Column floated='right' width={3}>
              <Button toggle active={this.state.onlyCurrent} onClick={this.handleClick}>
                Tylko aktualnie dostępne
      </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Sticky>
    );
  }
}

export default AppHeader;