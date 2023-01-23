import React from 'react'
import Form from './Loginregister'
var userIsregistered=false;
function App() {
  return (
    <div>
      <Form userIsregistered={userIsregistered} />
      {/* <Form userIsregistered=false /> */}
    </div>
  )
}

export default App