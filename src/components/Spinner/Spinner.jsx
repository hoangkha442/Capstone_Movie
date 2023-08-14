import React from 'react'
import { useSelector } from 'react-redux'
import { PulseLoader } from 'react-spinners'

export default function Spinner() {
  let {isLoading} = useSelector((state) => state.spinnerSlice)

  return isLoading ? (
    <div className='bg-snipper z-50 h-screen w-screen fixed top-0 left-0 flex justify-center items-center'>
        <PulseLoader color="#dcf836" />
    </div>
  ) : <></>
}
