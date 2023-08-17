import { Button, Center, Grid, GridItem } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import LetterGrid from "./LetterGrid";
import alphabet from "../Typescript/alphabet";
import words from "../data/words.json";
import RandomWord from "./RandomWord";


const Game = () => {

  // using a useState to set our random word and pass it in to the RandomWord component's prop
  const [theRndWord, setTheRndWord] = useState(() => {
    return words[Math.floor(Math.random()*words.length)]
  });

  const [guessed, setGuessed] = useState<string[]>([]);

  const incorrect = guessed.filter(letter => !theRndWord.includes(letter));

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

  
  }, [])



  // const [correct, setCorrect] = useState<string[]>([])

  // const [wordToGuess, setWordToGuess] = useState('')

  // const theRndWord = 'thisistherandomword'
  //  using a useEffect to render the random word generated from our rndWord and setting it in our setTheRndWord
  // useEffect(() => {
  //   // const rndWord = words[Math.floor(Math.random() * words.length)];
  //   // setTheRndWord(rndWord);
  // }, []);

  // const mysteryWord = theRndWord.split("").map(letter =>  correct.includes(letter) ? letter : '_').join(' ')
  // console.log(mysteryWord)
  
  // const handleClick = () => {
  //   alphabet.map(letter =>{
  //     if(theRndWord.includes(letter))
  //                 setCorrect([...correct, letter])
  //   })
  //   console.log('hola')
  // }

  return (
    <>
      <Grid>
        <GridItem marginY={5}>
          <Center>
          
          <RandomWord theWord={theRndWord} guessed={guessed}/>
     
          </Center>
        </GridItem>
        <GridItem>
            <LetterGrid activeLetter={guessed.filter(letter => theRndWord.includes(letter))} inactiveLetter={incorrect} addGuessed={addGuessed} letters={alphabet}/>
        </GridItem>
      </Grid>
    </>
  );
};

export default Game;
