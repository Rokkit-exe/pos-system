import React from 'react'

function StatusContainer({username, tableNumber, clientNumber, curClient}) {
  return (
    <div className="pe-5 me-3">
        <p className="username">User: {username}</p>
        <p className="clientname text-light">Table: {tableNumber}</p>
        <div className="clientname text-light" onClick={() => true}>Client: {clientNumber}</div>
    </div>
  )
}

export default StatusContainer