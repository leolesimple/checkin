'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function LogoutPage() {
    const router = useRouter()

    useEffect(() => {
        supabase.auth.signOut().then(() => {
            router.replace('/login')
        })
    }, [router])

    return (
        <div className="min-h-screen flex items-center justify-center bg-stone-900 text-white">
            Déconnexion en cours...
        </div>
    )
}