import { ReactNode } from "react"

// rafce shortcut for creating function
interface Props {
    children: ReactNode;
}
const Alert = ({children}: Props) => {
    return (
        <div className="alert alert-primary">
            {children}
        </div>
    )
}

export default Alert
