import { Button} from "@chakra-ui/react";
import { useState } from "react";
import alphabet from "../Typescript/alphabet";


interface MyLetters{
//   letters: string[]
//   activeLetter: string[]
//   inactiveLetter: string[]
  addGuessedLetter:(letter: string) => void

}

const LetterGrid = ({addGuessedLetter}:MyLetters) => {

  return (
    <>
          {alphabet.map(letter => 
            <Button
              margin={2}
              size="lg"
              width="50px"
              colorScheme="teal"
              variant="outline"
              onClick={() => addGuessedLetter(letter)}
              key={letter}
            >
              {letter}
            </Button>
          )}
    </>
  );
};

export default LetterGrid;
