import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useUser } from '../../context/Context.js'
import PageLayout from '../../layouts/PageLayout'
import { WithAuth } from '../../HOCs/WithAuth'
import { dataUser } from '../../firebase/utils'
import Subtitle from '../../components/Subtitle'
import Paragraph from '../../components/Paragraph'
import Button from '../../components/Button'
import style from '../../styles/Facultad.module.css'
import { firebaseConfig } from '../../firebase/config.js'

function Edu (props) {
    const router = useRouter()
    function selected (e) {
        e.preventDefault()
        const career = e.target.textContent
        dataUser(career)
        router.push('/Home')
    }
    function usfx (e) {
        e.preventDefault()
        router.push(`/Home/USFX`)
    }
    function back () {
        router.back()
    }
    return (
    <PageLayout className={style.container}>
        <div className={style.container}>
            <Subtitle>Selecciona una opcion</Subtitle>
            <div className={style.edu}>
                <Button style={'buttonPrimary'} click={selected}>ESFM</Button>
                <Button style={'buttonPrimary'} click={usfx}>USFX</Button>
                <Button style={'buttonSecondary'} click={back}>atras</Button>      
            </div>             
        </div>
    </PageLayout>
    )
}
export default Edu

