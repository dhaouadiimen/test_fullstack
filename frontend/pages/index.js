import Head from 'next/head'
import Image from 'next/image'
import Logo from '../compnents/Layout/Logo'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import NavBar from '../compnents/Layout/NavBar'
import Header from '../compnents/Layout/header'
import Footer from '../compnents/Layout/footer'
import HomeLogo from '../compnents/Layout/HomeLogo'
export default function Home() {
  return (
    <div className={styles.container}>
      <HomeLogo></HomeLogo>
      {/* <Register></Register>
      <Login></Login> */}
    </div>
  )
}
