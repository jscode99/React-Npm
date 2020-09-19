import React from 'react'
import CountUp,{useCountUp} from 'react-countup'

function CountUp() {
    const { countUp, start, pauseResume, reset, update } = useCountUp({
        duration: 5,
        end: 10000,
        startOnMount:false
    })
    return (
      <div>
        <h1>{countUp}</h1>
        <div>
          <button onClick={start}>Start</button>
          <button onClick={reset}>reset</button>
          <button onClick={pauseResume}>pauseResume</button>
          <button onClick={()=>update(2000)}>Update to 2000</button>
        </div>
        <div>
          <CountUp start={0} end={200} duration={5} />
        </div>
      </div>
    );
}

export default CountUp
