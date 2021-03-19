import React, { useState, useEffect } from 'react'
import firebase from 'firebase'

const Profile = () => {
  console.log('Profile', firebase.auth().currentUser)

  return (
    <div>
      <h1>Sign out</h1>
      <button>
        <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
      </button>
    </div>
  )
}

export default Profile;