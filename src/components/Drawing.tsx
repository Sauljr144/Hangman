//custom elements to draw the hangman

const head = (
    <div key='1'
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid white",
        position: "absolute",
        top: "50px",
        right: "-20px",
      }}
    />
  )
  
  const body = (
    <div key='2'
      style={{
        width: "10px",
        height: "120px",
        background: "white",
        position: "absolute",
        top: "100px",
        right: 0,
      }}
    />
  )
  
  const rightArm = (
    <div key='3'
      style={{
        width: "100px",
        height: "10px",
        background: "white",
        position: "absolute",
        top: "150px",
        right: "-100px",
        rotate: "-30deg",
        transformOrigin: "left bottom",
      }}
    />
  )
  
  const leftArm = (
    <div key='4'
      style={{
        width: "100px",
        height: "10px",
        background: "white",
        position: "absolute",
        top: "150px",
        right: "10px",
        rotate: "30deg",
        transformOrigin: "right bottom",
      }}
    />
  )
  
  const rightLeg = (
    <div key='5'
      style={{
        width: "100px",
        height: "10px",
        background: "white",
        position: "absolute",
        top: "210px",
        right: "-90px",
        rotate: "60deg",
        transformOrigin: "left bottom",
      }}
    />
  )
  
  const leftLeg = (
    <div key='6'
      style={{
        width: "100px",
        height: "10px",
        background: "white",
        position: "absolute",
        top: "210px",
        right: 0,
        rotate: "-60deg",
        transformOrigin: "right bottom",
      }}
    />
  )

  const parts =[head, body, rightArm, leftArm, rightLeg, leftLeg]

  interface Incorrect{
    incorrectGuesses: number
  }

const Drawing = ({incorrectGuesses}: Incorrect) => {


  return (
    <div style={{position: 'relative'}}>
        {parts.slice(0, incorrectGuesses)}
        <div style={{height: '50px', width: '10px', background: 'white',position:'absolute',top:0, right:0}}/>
        <div style={{height: '10px', width: '200px', background:'white', marginLeft: '120px'}}/>
        <div style={{height: '400px', width: '10px', background:'white', marginLeft: '120px'}}/>
        <div style={{height: '10px', width: '250px', background:'white'}}/>
    </div>
    
  )
}

export default Drawing