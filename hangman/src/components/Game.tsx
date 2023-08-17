import { Button, Center, Grid, GridItem } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import LetterGrid from "./LetterGrid";

import words from "../data/words.json";
import RandomWord from "./RandomWord";


const Game = () => {

  // using a useState to set our random word and pass it in to the RandomWord component's prop
  const [theRndWord, setTheRndWord] = useState(() => {
    return words[Math.floor(Math.random()*words.length)]
  });

  const [guessed, setGuessed] = useState<string[]>([]);

  // const incorrect = guessed.filter(letter => !theRndWord.includes(letter));

  const addGuessed = useCallback((letter: string) =>{
    if(guessed.includes(letter)) return;
    setGuessed(currentLetters => [...currentLetters, letter])
    console.log('k')
  },[guessed])



  useEffect(() => {
    const handler = (e: KeyboardEvent) =>{
      const key = e.key
      if(!key.match(/^[a-z]$/))return

      e.preventDefault()
      addGuessed(key)

    }

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress',handler)
    }
  }, [guessed])


  return (
    <>
      <Grid>
        <GridItem marginY={5}>
          <Center>
          
          <RandomWord theWord={theRndWord} guessed={guessed}/>
     
          </Center>
        </GridItem>
        <GridItem>
            <LetterGrid addGuessedLetter={addGuessed}/>
        </GridItem>
      </Grid>
    </>
  );
};

export default Game;
