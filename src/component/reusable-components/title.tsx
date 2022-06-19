import { FC, memo } from "react"

interface ITitleProps {
    children: string
}

export const Title: FC<ITitleProps> = memo(({ children }) => {
    return <h1>{children}</h1>
})

