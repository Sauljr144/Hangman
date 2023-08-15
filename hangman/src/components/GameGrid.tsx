import { Button } from '@chakra-ui/react'



const GameGrid = () => {

    
 const alphabet =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

  return (
    <>
    {alphabet.map((letter, index) => <Button key={index}>{letter}</Button>)}
    </>
  )
}

export default GameGrid