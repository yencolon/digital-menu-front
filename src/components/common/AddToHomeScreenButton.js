import React, { useState, useEffect } from 'react';
import { useAddToHomescreenPrompt } from 'shared/hooks/useAddToHomescreenPrompt';

export function AddToHomeScreenButton ({ name = '' }) {
    const [prompt, promptToInstall] = useAddToHomescreenPrompt();
    const [isVisible, setVisibleState] = useState(false);

    const hide = () => setVisibleState(false);

    useEffect(
        () => {
            if (prompt) {
                setVisibleState(true);
            }
        },
        [prompt]
    );

    if (!isVisible) {
        return <div />;
    }

    return (
        <div onClick={hide}>
            <button onClick={hide}>No</button>
             Quieres agrear {name} a tu inicio?
            <button onClick={promptToInstall}>Sí</button>
        </div>
    );
}
