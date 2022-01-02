import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'
import Layout from "../../components/layout";
import Container from "../../components/container";
import PromotionWhatWeDo from '/public/whatwedo.jpg'

export default function WhatWeDo(props) {
    return (
        <>
            <Layout>
                <Head>
                    <title>werkkasten | Was machen wir</title>
                </Head>
                <Container>
                    <div className="promotion relative overflow-hidden flex w-full bg-gray-100 px-8 after:absolute before:content-[''] after:bg-werk after:top-0 after:left-0 after:w-full after:h-full after:bg-opacity-75" style={{
                        height: "64vh",
                        minHeight: "600px"
                    }}>
                        <Image
                            src={PromotionWhatWeDo}
                            alt="Kreative Hintergrundbild"
                            layout="fill"
                            objectPosition="top"
                            objectFit="cover"
                            priority
                        />
                        <div className="flex w-full lg:w-8/12 mx-auto items-center z-20">
                            <div className="w-full lg:w-2/3 font-bold text-white text-5xl lg:text-6xl drop-shadow-md">Wir kombinieren das Design mit Technologie um komplexe Probleme zu lösen. Nicht mehr, nicht weniger.</div>
                        </div>
                    </div>
                    <div className="w-10/12 mx-auto px-4">

                        <div className="flex w-full flex-col text-center py-20">
                            <div className="text-4xl mb-8">Service</div>
                            <div className="text-2xl mb-8">Um unser Service Ihnen passend zu gestalten, arbeiten wir mit verschiedene Plattformen / CMS:</div>
                            <div className="flex flex-wrap items-center justify-center mb-12">
                                <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-600 mb-3 mr-3">Ubuntu</div>
                                <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-600 mb-3 mr-3">Self Hosted</div>
                                <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-600 mb-3 mr-3">Strato</div>
                                <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-600 mb-3 mr-3">1und1</div>
                                <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-600 mb-3 mr-3">WordPress</div>
                                <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-600 mb-3 mr-3">Typo3</div>
                                <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-600 mb-3 mr-3">Magento</div>
                                <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-600 mb-3 mr-3">Shopware</div>
                            </div>
                            <div className="pointer-events-auto mb-12 px-4">
                                <a className="font-bold border border-2 border-werk text-werk px-6 py-4 rounded-full hover:bg-werk hover:text-white hover:shadow-2xl" href="mailto:id@werkkasten.de?subject=Unverbindliche%20Anfrage%20">Unverbindliche Anfrage</a>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row justify-center">
                            <div className="w-full lg:w-1/2 mb-8 p-8">
                                <div className="text-4xl mb-8">Digitalisierung</div>
                                <ul className="list-disc">
                                    <li className="pb-2">Webdesign</li>
                                    <li className="pb-2">Coporate Design</li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-1/2 mb-8 p-8">
                                <div className="text-4xl mb-8">Konzept und Beratung</div>
                                <ul className="list-disc">
                                    <li className="pb-2">Omnichannel Strategie</li>
                                    <li className="pb-2">Content Strategie</li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-1/2 mb-8 p-8">
                                <div className="text-4xl mb-8">Programmierung</div>
                                <ul className="list-disc">
                                    <li className="pb-2">Technische Architektur</li>
                                    <li className="pb-2">Technische Recherche</li>
                                    <li className="pb-2">Webseite Entwicklung</li>
                                    <li className="pb-2">Data Architektur</li>
                                    <li className="pb-2">CMS Implementierung</li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-1/2 mb-8 p-8">
                                <div className="text-4xl mb-8">Marketing</div>
                                <ul className="list-disc">
                                    <li className="pb-2">Planung der Kommunikation</li>
                                    <li className="pb-2">Planung der Kampagne</li>
                                    <li className="pb-2">Soziale Medien</li>
                                    <li className="pb-2">SEO</li>
                                    <li className="pb-2">Fotografie, Art</li>
                                    <li className="pb-2">Copywriting, Editorial</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </Container>
            </Layout>
        </>
    )
}