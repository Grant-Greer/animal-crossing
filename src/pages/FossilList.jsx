import React, { useState, useEffect } from 'react'
import Fossil from '../components/Fossil'
import { getFossils } from '../services/api-calls'

export default function FossilList({ fossil }) {
    const [fossils, setFossils] = useState()

    useEffect(() => {
        getFossils().then((fossilData) => {
            setFossils(fossilData)
        })
    }, [])

    return (
        <>
            <h2>fossil list page </h2>

            {fossils &&
                fossils.map((fossil) => {
                    return <Fossil key={fossil.image_uri} fossil={fossil} />
                }, [])}
        </>
    )
}
