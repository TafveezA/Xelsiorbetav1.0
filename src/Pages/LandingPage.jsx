import React from 'react'
import MiddleSection from '../Components/MiddleSection'
import Header from "../Components/Header"
import Bottom from '../Components/Bottom'
import Footer from '../Components/Footer'

export default function LandingPage() {
    return (
        <>
            <main className=' overflow-x-hidden'>
                <Header />
                <MiddleSection />
                <Bottom />
                <Footer />
            </main>
        </>
    )

}