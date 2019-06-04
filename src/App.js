import React from 'react';
import './App.css';
import foods from './foods.json';
import FoodItem from './components/foodItem/foodItem'
import 'semantic-ui-css/semantic.min.css'
import { Icon, Button, Item, Image, Label, Grid } from 'semantic-ui-react'

const paragraph = <Image src='/images/wireframe/short-paragraph.png' />
function App() {
  return (
    <div className="App">
<Grid columns={1} padded>
      <Grid.Column>

     <Item.Group divided>
    
  
  
      {
        foods.map(function(food){
                    return <Item>
                    <Item.Image src={ '/icons/' + food.icon } />
              
                    <Item.Content>
                      <Item.Header as='a'>{food.name}</Item.Header>
                      <Item.Meta>
                        <span className='cinema'>
                          {food.buyDescription}
                        </span>
                      </Item.Meta>
                      <Item.Description>a</Item.Description>
                      <Item.Extra>
                        <Grid columns={6} divided>
                          <Grid.Column color={!!food.availability[0] ? 'green' : ''}>Styczeń</Grid.Column>
                          <Grid.Column color={!!food.availability[1] ? 'green' : ''}>Luty</Grid.Column>
                          <Grid.Column color={!!food.availability[2] ? 'green' : ''}>Marzec</Grid.Column>
                          <Grid.Column color={!!food.availability[3] ? 'green' : ''}>Kwiecień</Grid.Column>
                          <Grid.Column color={!!food.availability[4] ? 'green' : ''}>Maj</Grid.Column>
                          <Grid.Column color={!!food.availability[5] ? 'green' : ''}>Czerwiec</Grid.Column>
                          <Grid.Column color={!!food.availability[6] ? 'green' : ''}>Lipiec</Grid.Column>
                          <Grid.Column color={!!food.availability[7] ? 'green' : ''}>Sieprień</Grid.Column>
                          <Grid.Column color={!!food.availability[8] ? 'green' : ''}>Wrzesień</Grid.Column>
                          <Grid.Column color={!!food.availability[9] ? 'green' : ''}>Październk</Grid.Column>
                          <Grid.Column color={!!food.availability[10] ? 'green' : ''}>Listopad</Grid.Column>
                          <Grid.Column color={!!food.availability[11] ? 'green' : ''}>Grudzień</Grid.Column>
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
