import fetch from 'node-fetch';
import key from '../key'


export const FETCH_QUOTES = 'FETCH_QUOTES';
export const intitialState = [];
export const fetching = quotes => ({ type: FETCH_QUOTES, quotes });

let api_key = key.api_key;


 const fetchRequestId = async (info)=> {
  try{
    let result = await fetch(`https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/ratequotes`, 
    {
      method: 'POST',
      mode: 'cors',
      headers: {  
        'Content-Type': 'application/json',
        'Authorization': `RG-AUTH ${api_key}`
      },
      body: JSON.stringify(info)
    })
   setTimeout(8000)
   return result.json();

  }
  catch(err){console.error(err)}
 }

 const fetchResults = async (id)=> {
  try {
    let result = await fetch(`https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/ratequotes?requestId=${id}`,
      {
        method: 'GET',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'RG-AUTH ' + api_key
        }
      }
    )
    setTimeout(8000)
    return result.json();

  }
  catch(err){console.error(err)}
 }

 export const fetchQuotes = (info) => async (dispatch) => {
    try {
    let resultId = await fetchRequestId(info)
    if(resultId){
    }
    resultId = await resultId.requestId
    let result = await fetchResults(resultId)
      setTimeout(5000)
      result = await fetchResults(resultId)
      console.log(result)
    dispatch(fetching(result.rateQuotes))
    }
    catch(err){console.error(err)}
  } 

  export default function reducer(quotes = intitialState, action) {
    switch (action.type) {
      case FETCH_QUOTES:
        return action.quotes;
      default:
        return quotes;
    }
  }