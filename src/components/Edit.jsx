import React, { createRef, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom'
import Text from './Text';
import { exportComponentAsJPEG } from 'react-component-export-image';

export default function EditPage() {
    const [params] = useSearchParams();
    const [count, setCount] = useState(0)
    const memeRef = createRef();

    return (
        <div>
            <h1>Edit page</h1>
            <div className='meme mt-5 mb-5' style={{ width: '700px', border:'1px solid' }} ref={memeRef} >
                <div>
                    <img src={params.get('url')} alt='meme' width='300px' />
                </div>
                {
                    Array(count).fill(0).map(e => <Text />)
                }
            </div>
            <Button onClick={() => setCount(count + 1)}>Add text</Button>
            <Button variant='success' onClick={(e) => exportComponentAsJPEG(memeRef)} >Save</Button>
        </div>
    )
}
