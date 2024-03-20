import { useEffect, useMemo,useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [number, setNumber] = useState();
    // Your solution starts here
    // let expensiveValue = 0;
    const expensiveValue = useMemo(() => {
       let s=1;
       for(let i=1; i <= number; i++){
        s *= i;
       }

       return s;
    },[number])
     
    
    // Your solution ends here

    return (
        <div>
            <h2>Factorial Calculator</h2>
                <label>
                Enter a number:
                <input   onChange={(e) => setNumber(Number(e.target.value))} />
                </label>
                <p>
                    Factorial of {number} is {expensiveValue}
                </p>
           
        </div>
    );
}

