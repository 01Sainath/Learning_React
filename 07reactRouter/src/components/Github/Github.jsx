import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){

  const data = useLoaderData();
  // const [data, setData] = useState([])
  // useEffect(()=>{

  //   fetch("https://api.github.com/users/01sainath")
  //   .then(response=> response.json())
  //   .then(data=>{
  //     setData(data)
  //     console.log(data);
  // })
  // },[])
  return (
    <>
      <div className="bg-gray-500 text-white p-3 text-center text-3xl">Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git image" />
      </div>
    </>
  )
}

export default Github;

export const githubInfoLoader = async ()=>{
  const res = await fetch("https://api.github.com/users/01sainath")
  return res.json();
}