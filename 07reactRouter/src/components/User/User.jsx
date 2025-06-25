import { useParams } from "react-router-dom";

function User(){
  const {id} = useParams()
  return (
    <>
      <h1 className="bg-gray-500 text-white p-3 text-center text-3xl">User: {id}</h1>
    </>
  )
}

export default User;