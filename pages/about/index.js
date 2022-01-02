import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'
import Layout from "../../components/layout"
import Container from "../../components/container"

import PromotionAbout from '/public/promotionAbout.jpg'

export default function About(props) {
    return (
        <>
            <Layout>
                <Head>
                    <title>werkkasten | Über uns</title>
                </Head>
                <Container>
                    <div className="promotion relative overflow-hidden flex w-full bg-gray-100 px-8 after:absolute before:content-[''] after:bg-werk after:top-0 after:left-0 after:w-full after:h-full after:bg-opacity-75" style={{
                        height: "64vh",
                        minHeight: "600px"
                    }}>
                        <Image
                            src={PromotionAbout}
                            alt="Arbeiten an Projekt in Team"
                            layout="fill"
                            objectPosition="top"
                            objectFit="cover"
                            priority
                        />
                        <div className="flex w-full lg:w-8/12 mx-auto items-center z-20">
                            <div className="w-full lg:w-2/3 font-bold text-white text-5xl lg:text-6xl drop-shadow-md">Da weitermachen wo andere aufgehört haben gut zu machen.</div>
                        </div>
                    </div>
                    <div className="w-full lg:w-8/12 xl:w-6/12 mx-auto px-4 text-center">

                        <div className="flex w-full flex-col text-center py-20">
                            <div className="text-4xl mb-8">
                                Wir sind ein Team von Technologen, Strategen und Kreativen, die einen positiven Einfluss auf Ihr Unternehmen wiedergeben.
                            </div>
                            <div className="flex flex-wrap items-center justify-center mb-12">
                                <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-600 mb-3 mr-3">Mediengestaltung</div>
                                <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-600 mb-3 mr-3">Visuelle Kommunikation</div>
                                <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-600 mb-3 mr-3">Webdesign</div>
                                <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-600 mb-3 mr-3">Web-Entwicklung</div>
                                <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-600 mb-3 mr-3">Google Analytics</div>
                                <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-600 mb-3 mr-3">Google Ads</div>
                            </div>
                            <div className="pointer-events-auto mb-12 px-4">
                                <a className="font-bold border border-2 border-werk text-werk px-6 py-4 rounded-full hover:bg-werk hover:text-white hover:shadow-2xl" href="mailto:id@werkkasten.de?subject=Unverbindliche%20Anfrage%20">Unverbindliche Anfrage</a>
                            </div>
                        </div>

                    </div>
                </Container>
            </Layout>
        </>
    )
}