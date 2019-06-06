import React from 'react';
import './App.css';
import foods from './foods.json';
import 'semantic-ui-css/semantic.min.css'
import { Item, Grid } from 'semantic-ui-react';
import AppHeader from './components/appHeader';
import MonthBox from './components/monthBox';

function App() {

  let searchPhrase = "";
  let iconDirectory = '/fresh-calendar-web/icons/';
  if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
    iconDirectory = '/icons/';
  }

  let onSearchChange = ({searchTerm, onlyCurrent}) => {
    console.log(searchTerm);
    searchPhrase = searchTerm;
  }

  return (
    <div className="App">
      <Grid columns={1} padded>
        <Grid.Column>
          <AppHeader onSearchChange={onSearchChange}></AppHeader>

          <Item.Group divided>
            {
              foods.filter((x) => x.name.indexOf(searchPhrase) !== -1).map(function (food) {
                return <Item key={food.name}>
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
                      <Grid columns={6}>
                        <Grid.Column><MonthBox name="Styczeń" active={!!food.availability[0]}></MonthBox></Grid.Column>
                        <Grid.Column><MonthBox name="Luty" active={!!food.availability[1]}></MonthBox></Grid.Column>
                        <Grid.Column><MonthBox name="Marzec" active={!!food.availability[2]}></MonthBox></Grid.Column>
                        <Grid.Column><MonthBox name="Kwiecień" active={!!food.availability[3]}></MonthBox></Grid.Column>
                        <Grid.Column><MonthBox name="Maj" active={!!food.availability[4]}></MonthBox></Grid.Column>
                        <Grid.Column><MonthBox name="Czerwiec" active={!!food.availability[5]}></MonthBox></Grid.Column>
                        <Grid.Column><MonthBox name="Lipiec" active={!!food.availability[6]}></MonthBox></Grid.Column>
                        <Grid.Column><MonthBox name="Sierpień" active={!!food.availability[7]}></MonthBox></Grid.Column>
                        <Grid.Column><MonthBox name="Wrzesień" active={!!food.availability[8]}></MonthBox></Grid.Column>
                        <Grid.Column><MonthBox name="Październik" active={!!food.availability[9]}></MonthBox></Grid.Column>
                        <Grid.Column><MonthBox name="Listopad" active={!!food.availability[10]}></MonthBox></Grid.Column>
                        <Grid.Column><MonthBox name="Grudzień" active={!!food.availability[11]}></MonthBox></Grid.Column>
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

export default App;