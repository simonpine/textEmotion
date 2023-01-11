import './App.css';
import { useState, useEffect } from 'react';
const brain = require('brain.js');
const network = new brain.recurrent.LSTM();  
const traningData: any[] = [
  {
    input: "happy good to see you",
    output: "happy"
  },
  {
    input: "pretty handsome nice good",
    output: "happy"
  },
  {
    input: "good morning greetings hi hello",
    output: "happy"
  },
  {
    input: "hi bro nice to meet you",
    output: "happy"
  },
  {
    input: "welcome I am happy now",
    output: "happy"
  },
  {
    input: "hello bro hows everything",
    output: "happy"
  },
  {
    input: "sad unhappy now",
    output: "sad"
  },
  {
    input: "sadden depressed unhappy",
    output: "sad"
  },
  {
    input: "I am depressed now",
    output: "sad"
  },
  {
    input: "I am sad",
    output: "sad"
  },
  {
    input: "not things went wrong",
    output: "sad"
  },
  {
    input: "low I cant think don't know why",
    output: "sad"
  },
  {
    input: "I am feeling happy",
    output: "happy"
  },
  {
    input: "sad now",
    output: "sad"
  },
  {
    input: "I am not ok",
    output: "sad"
  },
  {
    input: "i am so angry",
    output: "anger"
  },
  {
    input: "I want to hit someone",
    output: "anger"
  },
  {
    input: "This sucks",
    output: "anger"
  },
  {
    input: "I hate you",
    output: "anger"
  },
  {
    input: "Fuck",
    output: "anger"
  },
  {
    input: "fuck",
    output: "anger"
  },
  {
    input: "Fuck yeah",
    output: "happy"
  },
  {
    input: "i have many worries",
    output: "fear"
  },
  {
    input: "I do not think this is ok",
    output: "fear"
  },
  {
    input: "this is not working",
    output: "fear"
  },
  {
    input: "wow",
    output: "surprise"
  },
  {
    input: "I did not expected that",
    output: "surprise"
  },
  {
    input: "That is incredible",
    output: "surprise"
  },
  {
    input: "That is amazing",
    output: "surprise"
  },
  {
    input: "fuck you",
    output: "anger"
  },
  {
    input: "where i am?",
    output: "fear"
  },
  {
    input: "it was a good day",
    output: "happy"
  },
  {
    input: "it was funny",
    output: "happy"
  },
  {
    input: "it is terrible",
    output: "sad"
  },
  {
    input: "happy",
    output: "happy"
  },
]
function App() {
  const [result, setResult] = useState('')
  const [search, setSearch] = useState('')
  useEffect(()=>{
    network.train(traningData, { iterations: 500, log: true });
  }, [])
  function but(){
    const Output = network.run(search);
    setResult(Output)
  }
  return (
    <div className="App">
      <input type="text" onChange={(evt)=>setSearch(evt.target.value)}/>
      <h1>{result.toLowerCase()}</h1>
      <button onClick={() => { but() }}>hola</button>
    </div>
  );
}

export default App;
