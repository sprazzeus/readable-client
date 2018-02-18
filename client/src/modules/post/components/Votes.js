import React from 'react'
import { Box } from 'rebass'
import FaArrowUp from 'react-icons/lib/fa/arrow-up'
import FaArrowDown from 'react-icons/lib/fa/arrow-down'
import styled from 'styled-components'

const Votes = ({ voteScore, direction, handleVote }) => (
  <Box>
    <VoteButton onClick={handleVote}>
      <FaArrowUp />
    </VoteButton>
    {voteScore} {voteScore === 1 ? 'vote' : 'votes'}
    <VoteButton onClick={handleVote}>
      <FaArrowDown />
    </VoteButton>
  </Box>
)

export default Votes

const VoteButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  :hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.02);
  }
`