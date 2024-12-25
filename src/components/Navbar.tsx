import Link from 'next/link'
import React from 'react'
import Form from "next/form";
import Image from 'next/image'
import { auth, signIn, signOut } from '@/auth'

const Navbar = async() => {
  const session = await auth()
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className='flex justify-between items-center'>
        
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={180} height={51} className="m-0 p-0 cursor-pointer" />
        </Link>
        <div className="flex items-center gap-5 text-black">
          {session && session?.user? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>
              <Form action={async()=>{
                "use server";
                await signOut({redirectTo: "/"});
              }}>
                <button type='submit'>Logout</button>
              </Form>
              <Link href={`user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : 
          (
            <Form action={async () => {
              "use server"
              await signIn("github");
              }}>
                  <button type='submit'>LogIn</button>
            </Form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar