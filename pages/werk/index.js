import Head from 'next/head'
import Link from "next/link";
import { useState } from 'react'
import Image from 'next/image'
import Layout from "../../components/layout"
import Container from "../../components/container"

import PromotionWerk from '/public/promotionWerkBW-01.jpg'
import promotionAvidon from '/public/avidon-01.jpg'
import promotionFuss from '/public/fuss-kompetenz.jpg'

export default function Werk(props) {
    return (
        <>
            <Layout>
                <Head>
                    <title>werkkasten | Werk</title>
                </Head>
                <Container>
                    <div className="promotion relative overflow-hidden flex w-full bg-gray-100 px-8 after:absolute before:content-[''] after:bg-werk after:top-0 after:left-0 after:w-full after:h-full after:bg-opacity-75" style={{
                        height: "64vh",
                        minHeight: "600px"
                    }}>
                        <Image
                            src={PromotionWerk}
                            alt="Kreative Hintergrundbild"
                            layout="fill"
                            objectPosition="top"
                            objectFit="cover"
                            priority
                        />
                        <div className="flex w-full lg:w-8/12 mx-auto items-center z-20">
                            <div className="w-full lg:w-2/3 font-bold text-white text-5xl lg:text-6xl drop-shadow-md">Unsere Kunden sind unsere Partner.</div>
                        </div>
                    </div>
                    <div className="w-full lg:w-10/12 mx-auto py-20">

                        <div className="mb-20 flex items-center justify-center">
                            <div className="text-5xl lg:text-6xl">Case Study</div>
                        </div>

                        <div className="flex flex-col lg:flex-row mb-20">
                            <div className="w-full lg:w-1/2 overflow-hidden">
                                <Image
                                    src={promotionAvidon}
                                    alt=""
                                    priority
                                />
                            </div>
                            <div className="w-full lg:w-1/2 p-8">
                                <div className="text-3xl lg:text-4xl mb-8">Avidon Art & Design Hotel</div>
                                <div className="text-xl mb-8">
                                    <Link href="https://avidon.de/"><a className="text-werk hover:text-opacity-75" target="_blank">Avidon Art & Design Hotel</a></Link> ist in der Nähe zum Düsseldorf-Flughafen. Wir haben zusammen mit Avidon ein Konzept und Content Strategie entworfen. Mit den neuen Internetauftritt haben wir geholfen ein besseres und angenehmes Gefühl den Kunden / Gästen zu vermitteln.
                                </div>
                                <div className="flex flex-wrap items-center mb-12">
                                    <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-600 mb-3 mr-3">Fotografie</div>
                                    <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-600 mb-3 mr-3">Content Strategie</div>
                                    <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-600 mb-3 mr-3">Web-Entwicklung</div>
                                    <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-600 mb-3 mr-3">WordPress</div>
                                    <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-600 mb-3 mr-3">Booking API Integration</div>
                                </div>
                                <Link href="https://avidon.de/" ><a className="text-werk hover:text-opacity-75" target="_blank">Avidon Art & Design Hotel</a></Link>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row mb-8">
                            <div className="w-full lg:w-1/2 overflow-hidden lg:order-last">
                                <Image
                                    src={promotionFuss}
                                    alt=""
                                    priority
                                />
                            </div>
                            <div className="w-full lg:w-1/2 lg:ml-auto p-8">
                                <div className="text-3xl lg:text-4xl mb-8">Orthopädieschuhtechnik Fuß- Kompetenz</div>
                                <div className="text-xl mb-8">
                                    Innovative junges Unternehmen mitten in Hafenstadt Emden. Als Meisterbetrieb ist <Link href="https://os-fuss-kompetenz.de/"><a className="text-werk hover:text-opacity-75" target="_blank">Orthopädieschuhtechnik Fuß- Kompetenz</a></Link> sehr vorkommen und angefragt bei deren Kunden. Mit einfachen technischen Voraussetzungen und soliden Design haben wir geholfen das Unternehmen ein kompetenter Eindruck zu bekommen. Deren Kunden sind begeistert.
                                </div>
                                <div className="flex flex-wrap items-center mb-12">
                                    <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-600 mb-3 mr-3">Fotografie</div>
                                    <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-600 mb-3 mr-3">Content Strategie</div>
                                    <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-600 mb-3 mr-3">Web-Entwicklung</div>
                                    <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-600 mb-3 mr-3">WordPress</div>
                                </div>
                                <Link href="https://os-fuss-kompetenz.de/"><a className="text-werk hover:text-opacity-75" target="_blank">Orthopädieschuhtechnik Fuß- Kompetenz</a></Link>
                            </div>
                        </div>

                    </div>
                </Container>
            </Layout>
        </>
    )
}