import React from 'react'

import Styles from "../styles/dashboard.module.css"

import { usePathname } from 'next/navigation'
import Link from 'next/link';

export default function Dashboard() {
  
  const path = usePathname()
  console.log(path)
  return (
   <>
    <div className={Styles.left}>

    <Link href="/admin/dashboard" style={{textDecoration:"none"}}>
      <p className={`${path === "/admin/dashboard" ? Styles.active : Styles.previous}`}>Dashboard</p>
    </Link>

    <Link href="/admin/user-profile" style={{textDecoration:"none"}}>
      <p className={`${path === "/admin/user-profile" || path === "/admin/user-create" ? Styles.active : Styles.previous}`}>User Profile</p>
    </Link>

    <Link href="/admin/category" style={{textDecoration:"none"}}>
      <p className={`${path === "/admin/category" ? Styles.active : Styles.previous}`}>Category</p>
    </Link>

    <Link href="/admin/post-news" style={{textDecoration:"none"}}>
      <p className={`${path === "/admin/post-news" ? Styles.active : Styles.previous}`}>Post (News)</p>
    </Link>

    <Link href="/admin/headlines" style={{textDecoration:"none"}}>
      <p className={`${path === "/admin/headlines" ? Styles.active : Styles.previous}`}>Headlines</p>
    </Link>

    <Link href="/admin/votes" style={{textDecoration:"none"}}>
      <p className={`${path === "/admin/votes" ? Styles.active : Styles.previous}`}>Votes</p>
    </Link>

    <Link href="/admin/social-icon" style={{textDecoration:"none"}}>
      <p className={`${path === "/admin/social-icon" ? Styles.active : Styles.previous}`}>Social icon</p>
    </Link>

    <Link href="/admin/comments" style={{textDecoration:"none"}}>
      <p className={`${path === "/admin/comments" ? Styles.active : Styles.previous}`}>Comments</p>
    </Link>

    <Link href="/admin/section-management" style={{textDecoration:"none"}}>
      <p className={`${path === "/admin/section-management" ? Styles.active : Styles.previous}`}>Section Management</p>
    </Link>

    <Link href="/admin/site-setting" style={{textDecoration:"none"}}>
      <p className={`${path === "/admin/site-setting" ? Styles.active : Styles.previous}`}>Site Setting</p>
    </Link>

   


      
      
    </div>
   </>
  )
}
