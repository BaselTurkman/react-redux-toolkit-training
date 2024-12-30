import { useSelector, UseSelector } from "react-redux"
export const Home = () => {
    const username = useSelector((state: any) => state.user.value.username )
    return (
        <div>
            <h1>{username}</h1>
            <h1> This is Home Page</h1>
        </div>
    )
}