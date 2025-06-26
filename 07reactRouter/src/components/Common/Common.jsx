import { Outlet } from "react-router-dom";

function Common(){

    return (
        <>
            <h1 className="bg-gray-500 text-white text-shadow-white p-4 text-3xl">Common</h1>
            <Outlet/>
        </>
    )
}

export default Common;