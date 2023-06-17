"use client"
import "./globals.css";
import DefaultNavbar from '@/components/Navbar'
import Image from 'next/image'
import { useState } from "react";


export default function Home() {
  const [current_page, setCurrentPage] = useState("หน้าหลัก");
  return (
    <main className="bg-white min-h-screen min-w-screen px-20">
      <DefaultNavbar current_page="หน้าหลัก"/>
    </main>
  )
}
