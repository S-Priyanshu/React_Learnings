import React from 'react'

export default function Home(props) {
  return (
   <>
    <h1 style={{color: props.mode ==='dark'?'white':'black'}} >
    Welcome to TextUtils
    </h1>
   </>
  )
}
