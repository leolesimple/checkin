'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    useEffect(() => {
        supabase.auth.getUser().then(({ data }) => {
            if (data?.user) router.replace('/dashboard')
        })
    }, [])

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        const { data, error } = await supabase.auth.signInWithPassword({ email, password })

        if (error) {
            alert('Erreur de connexion : ' + error.message)
        } else if (data.session) {
            const { access_token, refresh_token } = data.session

            document.cookie = `sb-access-token=${access_token}; path=/;`
            document.cookie = `sb-refresh-token=${refresh_token}; path=/;`

            router.replace('/dashboard')
        } else {
            alert('Connexion réussie mais aucune session active.')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-stone-900 text-white">
            <form onSubmit={handleLogin} className="bg-white/10 backdrop-blur-xl rounded-xl p-8 shadow-xl w-full max-w-sm">
                <h1 className="text-xl font-bold mb-6 text-center">Connexion admin</h1>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mb-4 px-4 py-2 rounded bg-white/10 border border-white/20"
                />
                <input
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full mb-6 px-4 py-2 rounded bg-white/10 border border-white/20"
                    autoComplete="current-password"
                />
                <button type="submit" className="w-full py-2 rounded bg-sky-600 hover:bg-sky-700 transition text-white">
                    Se connecter
                </button>
            </form>
        </div>
    )
}
