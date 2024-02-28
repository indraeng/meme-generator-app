import React, { useState } from 'react'
import Draggable from 'react-draggable'

export default function Text() {
    const [editMode, setEditMode] = useState(false);
    const [val, setVal] = useState('Double click to edit')
    return (
        <div>
            <Draggable>
                {editMode ?
                    <input value={val}
                        onChange={e => setVal(e.target.value)}
                        onDoubleClick={() => setEditMode(false)} />
                    : <h3 onDoubleClick={() => setEditMode(true)}>{val}</h3>
                }
            </Draggable>
        </div>
    )
}
