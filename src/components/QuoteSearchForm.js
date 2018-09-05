import React from 'react';
import { connect } from 'react-redux';
import { Form, Input,  Container, Message } from 'semantic-ui-react';
import {fetchQuotes} from '../store'

const property = [
    { key: 'Condo', text: 'Condo', value: 'Condo' },
    { key: 'Single Family', text: 'Single Family', value: 'SingleFamily' },
    { key:'Townhouse', text:'Townhouse', value:'Townhouse' },
    { key:'MultiFamily', text:'Multi Family', value:'MultiFamily' }
  ]
const occupancy =[
    {key: 'Primary', text:'Primary', value:'Primary'},
    {key: 'Secondary', text:'Secondary', value:'Secondary'},
    {key: 'Investment', text:'Investment', value:'Investment'},
]

class QuoteForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loanSize: null,
            propertyType: null,
            creditScore: null,
            occupancy: null,
            creditScoreError: null,
            loanSizeError: null,
            dirty: false
        }
        
    }
    formValidate = () => {
           
        if(this.state.creditScore > 800 || this.state.creditScore < 300 || isNaN(this.state.creditScore)|| this.state.creditScore === null){
        this.setState({creditScoreError:"Must be a valid credit score between 300 and 800"})
        }else{
        this.setState({creditScore: parseInt(this.state.creditScore, 10)})
        this.setState({creditScoreError:""});

        }
        if(!this.state.loanSize || isNaN(this.state.loanSize) ){
           this.setState({loanSizeError: "Must enter a valid number"})
        }else{
            this.setState({loanSizeError: ""});
        }
     
       

    }
    handleChange = (e, {name, value}) => {
        e.preventDefault()
        this.setState({ [name]: Number(value), dirty:true})
        console.log(this.state)
    }

    handleSubmit = () => { 
        
        this.formValidate()
        //console.log(this.state)
        if(!this.state.loanSizeError && !this.state.creditScoreError && this.state.occupancy && this.state.propertyType){
         let info = { loanSize: this.state.loanSize, propertyType: this.state.propertyType, creditScore: this.state.creditScore, occupancy:this.state.occupancy}
         this.props.fetchQuotes(info)
        }
    }

    handleDropdownChange =  (e, { name, value }) => this.setState({ [name]: value, dirty:true })
    
    render () {
        
        return (
            
            <Form>
                <Form.Group widths='equal'>
                <Form.Field control={Input} label='Loan Size' placeholder='Loan Size' className='.input' onChange={this.handleChange} required name="loanSize" error={Boolean(isNaN(this.state.loanSize))}/>
                <Form.Select label='Property Type' options={property}  onChange={this.handleDropdownChange} value={this.state.propertyType} name="propertyType" error={Boolean(!this.state.propertyType) && this.state.dirty}/>
                
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Field control={Input} label='Credit Score' placeholder='Credit Score' onChange={this.handleChange} required  error={Boolean(isNaN(this.state.creditScore))} name="creditScore"/>
                <Form.Select label='Occupancy' options={occupancy}  onChange={this.handleDropdownChange}  name="occupancy" error={Boolean(!this.state.occupancy) && this.state.dirty}/>
                </Form.Group>
                <Container textAlign='right'>
                { this.state.creditScoreError ? <Message
                    error
                    header="Problem credit score value"
                    content={this.props.creditScoreError}
                  /> : null}
                { this.state.loanSizeError ? <Message
                    error
                    header="Problem loan size value"
                    content={this.state.loanSizeError}
                  /> : null}
                <Form.Button content='Quote Rates' color='yellow' size='large' onClick={this.handleSubmit} />
                
                </Container>
            </Form>  
        )
    }
}


const mapState = null;

const mapDispatch = { fetchQuotes }

  
export default connect(mapState, mapDispatch)(QuoteForm);