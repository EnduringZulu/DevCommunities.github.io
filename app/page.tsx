"use client"
import "./globals.css";
import DefaultNavbar from '@/components/Navbar'
import Image from 'next/image'
import { useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion"
import Typewriter from "typewriter-effect";
import Coolbanner from "@/components/home/Coolbanner";


export default function Home() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1])
  return (
    <main className="dark:text-white bg-white text-black min-h-screen min-w-screen px-20 pb-80">
      <DefaultNavbar current_page="หน้าหลัก" />
      <section className="grid grid-cols-2 gap-4 py-10">
        <div>
          stuff
        </div>
        <Coolbanner />
      </section>
    </main>
  )
}
