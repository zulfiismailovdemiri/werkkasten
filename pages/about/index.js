import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'
import Layout from "../../components/layout";
import Container from "../../components/container";
import Intro from "../../components/intro";

export default function About(props) {
    return (
        <>
            <Layout>
                <Head>
                    <title>Test</title>
                </Head>
                <Container>
                   About
                </Container>
            </Layout>
        </>
    )
}