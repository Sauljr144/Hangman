
import { Text } from '@chakra-ui/react';
import useData from '../hooks/useData';


const RandomWords = () => {
    const {data} = useData();
    const randomWord = data[Math.floor(Math.random() * data.length)]
  return (
    <Text>{randomWord}</Text>
  )
}

export default RandomWords;