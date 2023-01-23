import { useState } from 'react';

export const useForm = (initialState, refForm) => {
    const [state, setState] = useState(initialState);

    const handleChange = ({ target: { name, value } }) => {
        setState({
            ...state,
            [name]: value
        })
    };

    const reset = () => {
        setState(initialState)
        refForm.current?.reset()
    }
    return [ state, setState, handleChange, reset ];
}
