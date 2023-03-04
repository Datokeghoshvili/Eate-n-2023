import React, { ReactNode } from 'react'



interface Props {
    children: ReactNode
    onClick?: () => void; 
}

function Button({ children, onClick }: Props) {


    return (
        <button onClick={onClick} className="button">{children}</button>

    )
}

export default Button
