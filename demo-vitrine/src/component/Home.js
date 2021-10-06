import React from 'react'
import home1 from './home1-vitrine.jpg'
import Gallery from './Gallery.js'
import Infos from './Infos.js'
import Icons from './Icons.js'

const home = () =>{
    return (
        <>
        <article >
            <img src={home1} alt={'model'} style={{ width: '100%' }}/>
        </article>
        <Gallery />
        <Infos />
        <Icons />
        </>
    )
}

export default home