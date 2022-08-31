import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount((count) => {
            return count + 10;
        });
    }

    return (
        <button onClick={handleClick} style={{
            fontSize: `${count}px`,
        }}>
            Clicked {count} times
        </button>
    );

}
