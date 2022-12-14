import {useState} from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({value}) => {

    const [ counter, setCounter] = useState( value )

    const handleAdd = () => {
        // console.log(event)
        // console.log(newValue)
        // setCounter( counter + 1)
        setCounter( (c) => c+1)
    }

    const handleTake = () => {
        setCounter( (c) => c-1)
    }

    const handleRes = () => {
        setCounter( 0 )
    }
    

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={handleAdd}>
                +1
            </button>

            <button onClick={handleTake}>
                -1
            </button>

            <button onClick={handleRes}>
                Reset
            </button>
        </>
       
    );
  }

CounterApp.propTypes = {
value: PropTypes.number
}