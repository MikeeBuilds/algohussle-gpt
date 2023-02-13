'use client';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

function Login() {
  return (
    <div >
        <Image 
            src="https://links.papareact.com/2i6"
            width={300}
            height={300}
            alt="logo"
        />
        <button>
            Sign in to use AlgoGPT
        </button>
    </div>
  )
}

export default Login
