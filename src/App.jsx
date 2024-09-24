import { useState } from 'react'
import './App.css'
import { TextField, Stack, Button } from '@mui/material';



function App() {

  // state 

  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)

  const [isPrincipleInvalid, setIsPrincipleInvalid] = useState(false)
  const [isRateInvalid, setIsRateInvalid] = useState(false)
  const [isYearInvalid, setIsYearInvalid] = useState(false)


  const userInputValidation=(inputTag)=>{
    // used to validate user input
    const {name,value}=inputTag
    console.log(name,value);
    // check number pattern in value 
    // console.log(isFinite(value));
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    console.log(!!value.match(/^\d*\.?\d+$/));
    if (name=="principle") {
      setPrinciple(value)
      !!value.match(/^\d*\.?\d+$/) ? setIsPrincipleInvalid(false) : setIsPrincipleInvalid(true)
    }else if (name=="rate") {
      setRate(value)
      !!value.match(/^\d*\.?\d+$/) ? setIsRateInvalid(false) : setIsRateInvalid(true)
    }else if (name=="year") {
      setYear(value)
      !!value.match(/^\d*\.?\d+$/) ? setIsYearInvalid(false) : setIsYearInvalid(true)
    }   
  }

  // button 
  const handleCalculate=()=>{
    if (principle && rate && year) {
      setInterest(principle*rate*year/100)
    }else{
      alert("Please Fill The Form Completely")
    }
  }

  // reset
  const handleReset=()=>{
    setInterest(0)
    setRate(0)
    setYear(0)
    setPrinciple(0)
    setIsPrincipleInvalid(false)
    setIsRateInvalid(false)
    setIsYearInvalid(false)
  }


  return (
    <div className='d-flex align-items-center justify-content-center vh-100 bg-dark'>
      <div style={{ width: "600px" }} className='bg-light rounded p-5'>
        <h1>Simple Interest Calculator</h1>
        <p>Calculate Your Simple Interest Easily!</p>
        <div className='d-flex align-items-center justify-content-center flex-column m-5 bg-warning rounded p-3 text-light'>
          <h1>₹ {interest}</h1>
          <p className='fw-bolder'>Total Simple Interest</p>
        </div>
        {/* form */}
        <form className='mt-3'>
          {/* principle */}
          <div className='mb-3'>
            <TextField value={principle || ""} onChange={e=>userInputValidation(e.target)} name='principle' className='w-100' id="outlined-principle" label="Principle Amount" variant="outlined" />
          </div>
          {
            isPrincipleInvalid && <div className='mb-3 fw-bolder text-danger'>*Invalid Principle Content!</div>
          }

          {/* interest  */}
          <div className='mb-3'>
            <TextField value={rate || ""} onChange={e=>userInputValidation(e.target)} name='rate' className='w-100' id="outlined-rate" label="Rate Of Interest (%)" variant="outlined" />
          </div>
          {
            isRateInvalid && <div className='mb-3 fw-bolder text-danger'>*Invalid Rate!</div>
          }

          {/* year */}
          <div className='mb-3'>
            <TextField value={year || ""} onChange={e=>userInputValidation(e.target)} name='year' className='w-100' id="outlined-year" label="Time Period (Yr)" variant="outlined" />
          </div>
          {
            isYearInvalid && <div className='mb-3 fw-bolder text-danger'>*Invalid Year!</div>
          }

          <Stack direction="row" spacing={2}>
            <Button onClick={handleCalculate} disabled={isPrincipleInvalid || isRateInvalid || isYearInvalid} style={{ width: "50%", height: "70px" }} className='bg-dark' variant="contained">CALCULATE</Button>
            <Button onClick={handleReset} style={{ width: "50%", height: "70px" }} className='border border-dark text-dark' variant="outlined">RESET</Button>
          </Stack>
        </form>
      </div>
    </div>
  )
}

export default App
