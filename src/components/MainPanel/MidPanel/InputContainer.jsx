import React from 'react'

function NoteContainer({input, setInput, onClick, showInputBox, inputTitle}) {
  return (
    <div className={`${showInputBox ? "show" : "visually-hidden"}`}>
        <div className='d-flex align-self-end w-100 p-2' >
            <div className='flex-columns'>
                <div><h3 className='text-light'>{inputTitle}</h3></div>
                <div className='d-flex w-100'>
                    <input className='w-100 border rounded' type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                    <div className='text-light btn btn-primary mx-2' onClick={() => onClick()}>Add</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NoteContainer