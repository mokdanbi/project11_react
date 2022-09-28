import React from 'react'
import MainNews from './MainNews'
import MainVisual from './MainVisual'
import MainStore from './MainStore'

import '../css/Main.scss'

const Main = () => {
    return (
        <main>
            <MainVisual />
            <MainNews />
            <MainStore />
        </main>
    )
}

export default Main