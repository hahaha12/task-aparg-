import { FC, memo, ReactNode } from "react"


interface ButtonProps {
    children: ReactNode
    type: "button" | "submit" | "reset" | undefined
    className: string
    onClick?: any
}

export const Button: FC<ButtonProps> = memo(({ children, type, className, onClick }) => {
    return <button onClick={onClick} className={className} type={type}>{children}</button>
})