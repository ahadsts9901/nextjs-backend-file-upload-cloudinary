"use client"

import React, { useRef } from 'react'
import axios from "axios"

const Page = () => {

  const fileRef = useRef()



  const submitHandler = async (e) => {

    e.preventDefault()

    const file = fileRef.current.files[0]

    const formData = new FormData()
    formData.append("file", file)

    try {
      // api call
      const response = await axios.post("/api/post", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      })

      console.log(response.data.url); // public url of your file

    } catch (error) {
      console.log(error);
    }

  }

  return (
    <>
      <input ref={fileRef} type="file" accept="image/*,video/*" />
      <button onClick={submitHandler}>Upload File</button>
    </>
  )
}

export default Page