import { Button} from "@chakra-ui/react";
import { useState } from "react";

interface MyLetters{
  letters: string[]
  activeLetter: string[]
  inactiveLetter: string[]
  addGuessed:(letter: string) => void

}

// test
const hola = () => console.log('hola')

const LetterGrid = ({letters, activeLetter, inactiveLetter, addGuessed}:MyLetters) => {

    

  return (
    <>
          {letters.map((letter, index) => 
            <Button
              margin={2}
              size="lg"
              width="50px"
              colorScheme="teal"
              variant="outline"
              key={index}
              onClick={() => addGuessed(letter)}
            >
              {letter}
            </Button>
            )}
    </>
  );
};

export default LetterGrid;
