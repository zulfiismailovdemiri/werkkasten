import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'
import Layout from "../../components/layout";
import Container from "../../components/container";

export default function WhatWeDo(props) {
    return (
        <>
            <Layout>
                <Head>
                    <title>Test</title>
                </Head>
                <Container>
                    What we Do
                </Container>
            </Layout>
        </>
    )
}