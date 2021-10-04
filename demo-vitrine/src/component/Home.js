import React from 'react'
import home1 from './home1-vitrine.jpg'
import Gallery from './Gallery.js'
import Infos from './Infos.js'

const home = () =>{
    return (
        <>
        <article>
            <img src={home1} alt={'model'} />
        </article>
        <Gallery />
        <Infos />
        </>
    )
}

export default home