import React from 'react';
import { Table, Segment, Dimmer, Loader, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';


class QuotesTable extends React.Component {

   render (){
    
    const quotes = this.props.quotes
    return (
     <Table celled  key={'Primary'} striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Lender</Table.HeaderCell>
          <Table.HeaderCell>Product</Table.HeaderCell>
          <Table.HeaderCell>Rate</Table.HeaderCell>
          <Table.HeaderCell>Closing Cost</Table.HeaderCell>
          <Table.HeaderCell>Monthly Payment</Table.HeaderCell>
          <Table.HeaderCell>APR</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
      {quotes.map(dat=>
          <Table.Row key={dat.lenderName + '/' + dat.loanType }>
          <Table.Cell>{dat.lenderName} </Table.Cell>
          <Table.Cell>{dat.loanType} </Table.Cell>
          <Table.Cell>{`${dat.interestRate}%`}</Table.Cell>
          <Table.Cell>{`$${dat.closingCosts}`}</Table.Cell>
          <Table.Cell>{`$${Number(dat.monthlyPayment).toFixed(2)}`}</Table.Cell>
          <Table.Cell>{`${Number(dat.apr).toFixed(3)}%`}</Table.Cell>
        </Table.Row>
      )}
      </Table.Body>
    </Table>
      
      
      
      
     
    )}
  
}
 const mapState = (state) => {
    return {
      quotes: state.rateQuote
    }
  };
const mapDispatch = null;
 
export default connect(mapState, mapDispatch)(QuotesTable);