import Head from 'next/head'
import { useState } from 'react'
import Container from '../components/container'
import Layout from '../components/layout'
import Intro from "../components/intro";
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Index() {
  return(
      <>
        <Layout>
          <Head>
            <title>Test</title>
          </Head>
          <Container>
            <Intro />
          </Container>
        </Layout>
      </>
      )

}
