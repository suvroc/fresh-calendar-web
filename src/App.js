import React from 'react';
import './App.css';
import foods from './foods.json';
import 'semantic-ui-css/semantic.min.css'
import { Item, Grid, Segment } from 'semantic-ui-react';
import AppHeader from './components/appHeader';
import MonthBox from './components/monthBox';

class App extends React.Component {

  state = {
    searchPhrase: "",
    iconDirectory: "",
    onlyCurrent: false
  }

  onSearchChange = ({ searchTerm, onlyCurrent }) => {
    this.setState({
      searchPhrase: searchTerm,
      onlyCurrent: onlyCurrent
    })
  }

  render() {
    let iconDirectory = '/fresh-calendar-web/icons/';
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      iconDirectory = '/icons/';
    }
 
    return (
      <div className="App">
          <Grid.Column>
            <AppHeader onSearchChange={this.onSearchChange}></AppHeader>
            
            <Item.Group divided style={{ marginTop: '8em' }}>
              {
                foods.filter((x) => x.name.toLowerCase().indexOf(this.state.searchPhrase.toLowerCase()) !== -1 && (!this.state.onlyCurrent || !!x.availability[new Date().getMonth()]))
                  .map(function (food) {
                  return  <Item key={food.name}>
                    <Item.Image src={iconDirectory + food.icon} />

                    <Item.Content>
                      <Item.Header as='a'>{food.name}</Item.Header>
                      <Item.Meta>
                        <span className='cinema'>
                          {food.buyDescription}
                        </span>
                      </Item.Meta>
                      <Item.Description>{food.storeDescription}</Item.Description>
                      <Item.Extra>
                        <Grid columns={6} doubling>
                          <Grid.Column><MonthBox name="Styczeń" active={!!food.availability[0]} number={0}></MonthBox></Grid.Column>
                          <Grid.Column><MonthBox name="Luty" active={!!food.availability[1]} number={1}></MonthBox></Grid.Column>
                          <Grid.Column><MonthBox name="Marzec" active={!!food.availability[2]} number={2}></MonthBox></Grid.Column>
                          <Grid.Column><MonthBox name="Kwiecień" active={!!food.availability[3]} number={3}></MonthBox></Grid.Column>
                          <Grid.Column><MonthBox name="Maj" active={!!food.availability[4]} number={4}></MonthBox></Grid.Column>
                          <Grid.Column><MonthBox name="Czerwiec" active={!!food.availability[5]} number={5}></MonthBox></Grid.Column>
                          <Grid.Column><MonthBox name="Lipiec" active={!!food.availability[6]} number={6}></MonthBox></Grid.Column>
                          <Grid.Column><MonthBox name="Sierpień" active={!!food.availability[7]} number={7}></MonthBox></Grid.Column>
                          <Grid.Column><MonthBox name="Wrzesień" active={!!food.availability[8]} number={8}></MonthBox></Grid.Column>
                          <Grid.Column><MonthBox name="Październik" active={!!food.availability[9]} number={9}></MonthBox></Grid.Column>
                          <Grid.Column><MonthBox name="Listopad" active={!!food.availability[10]} number={10}></MonthBox></Grid.Column>
                          <Grid.Column><MonthBox name="Grudzień" active={!!food.availability[11]} number={11}></MonthBox></Grid.Column>
                        </Grid>
                      </Item.Extra>
                    </Item.Content>
                  </Item>
                    ;
                })}
            </Item.Group>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
