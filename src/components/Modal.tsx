import { useState } from "react"

export const Modal = () => {
    const [active, setActive] = useState(false)
    return (

        <div>
            <button onClick={() => setActive(!active)}>open/close</button>

            {
                active && (
                    <div>
                        <h2>Modallkasjdlkasjdklj</h2>
                    </div>
                )
            }
        </div>
    )
}
