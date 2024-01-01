import React from 'react';

interface Props{
    onClick: (event: React.SyntheticEvent<HTMLButtonElement>) => void
    children: React.ReactNode
}
const Button: React.FC<Props> = ({onClick, children}) => {
    return (
        <button type="button" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;