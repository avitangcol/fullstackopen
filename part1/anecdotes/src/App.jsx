import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  );
}

const Anecdote = ({header, anecdote, votes}) => {
  return (
    <>
      <h1>{header}</h1>
      <p>{anecdote}</p>
      <p>Votes: {votes}</p>
    </>
  )
}

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];
   
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const [topVoted, setTopVoted] = useState(0);
  const [maxVotes, setMaxVotes] = useState(0);

  const handleRandomizeClick = () => {
    let randomAnecdote = Math.floor(anecdotes.length * Math.random())
    setSelected(randomAnecdote)
  };

  const handleVoteClick = () => {
    let newVotes = [...votes];
    let newVoteCount = newVotes[selected] + 1;

    // Increment the vote total for the current anecdote
    newVotes[selected] = newVoteCount;
    setVotes(newVotes);

    // Check if the top-voted anecdote has been exceeded
    if (newVoteCount > maxVotes) {
      setMaxVotes(newVoteCount);
      setTopVoted(selected);
    };
  };

  return (
    <div>
      <Anecdote 
        header="Anecdote of the Day" 
        anecdote={anecdotes[selected]} 
        votes={votes[selected]}  
      />
      
      <Button handleClick={handleVoteClick} text="Vote" />
      <Button handleClick={handleRandomizeClick} text="Randomize" />
      
      <Anecdote 
        header="Top Voted Anecdote" 
        anecdote={anecdotes[topVoted]} 
        votes={maxVotes}  
      />
    </div>
  );
}

export default App
