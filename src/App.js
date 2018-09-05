import React, { Component } from 'react';
import './App.css';
import RateTable from './components/RateTable';
import QuoteForm from './components/QuoteSearchForm'
import {Container, Grid} from 'semantic-ui-react';
import  NavBar from './components/NavBar';

class App extends Component {
  render() {
    return ( 
      <div>
      <NavBar/>
        <Container className=".body">  
        <Grid>
        <QuoteForm/>
        <RateTable/>
        </Grid>
        </Container>
        </div>
    );
  }
}

export default App;
