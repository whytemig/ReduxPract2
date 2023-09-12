import React from 'react'
import { Link } from 'react-router-dom'

const header = () => {
  return (
    <>
      <div className="header">
        <Link to="/">
          <div className="logo">Movie App</div>
        </Link>
        <div className="userimg">
          <img src="https://placewaifu.com/image/200" alt="" />
        </div>
      </div>
    </>
  );
}

export default header