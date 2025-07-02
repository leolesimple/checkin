'use client'

import {useState} from 'react'
import {createClient} from '@supabase/supabase-js'
import {CheckCircleIcon, ClockIcon, XCircleIcon} from '@heroicons/react/24/solid'

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function ControlPage() {
    const [form, setForm] = useState({id: '', firstName: '', lastName: ''})
    const [results, setResults] = useState<any[]>([])
    const [loading, setLoading] = useState(false)

    async function handleSearch(e: React.FormEvent) {
        e.preventDefault()
        setLoading(true)

        let query = supabase.from('registrations').select('*')

        if (form.id.trim()) query = query.eq('id', form.id.trim())
        if (form.firstName.trim()) query = query.ilike('firstName', `%${form.firstName.trim()}%`)
        if (form.lastName.trim()) query = query.ilike('lastName', `%${form.lastName.trim()}%`)

        const {data, error} = await query

        if (error) {
            console.error('Erreur de recherche :', error)
            setResults([])
        } else {
            setResults(data || [])
        }
        setLoading(false)
    }

    function StatusBadge({status}: { status: string }) {
        const baseClasses = "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold"

        switch (status) {
            case 'confirmed':
                return (
                    <span className={baseClasses + " bg-emerald-600 text-white"}>
          <CheckCircleIcon className="h-4 w-4"/>
          Confirmé
        </span>
                )
            case 'pending':
                return (
                    <span className={baseClasses + " bg-gray-600 text-white"}>
          <ClockIcon className="h-4 w-4"/>
          En attente
        </span>
                )
            case 'cancelled':
                return (
                    <span className={baseClasses + " bg-red-600 text-white"}>
          <XCircleIcon className="h-4 w-4"/>
          Annulé
        </span>
                )
            default:
                return <span className="text-sm text-neutral-300">{status}</span>
        }
    }

    return (
        <main className="max-w-[1560px] mx-auto px-6 py-12 text-white">
            <h1 className="text-3xl font-semibold mb-8">Contrôle des inscriptions</h1>
            <form onSubmit={handleSearch}
                  className="max-w-md space-y-4 bg-white/10 p-6 rounded-xl backdrop-blur-md border border-white/20">
                <div>
                    <label htmlFor="id" className="block mb-1 text-sm font-medium">ID</label>
                    <input
                        id="id"
                        type="text"
                        value={form.id}
                        onChange={e => setForm({...form, id: e.target.value})}
                        className="w-full rounded-md bg-white/10 px-3 py-2 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
                        placeholder="ID exact"
                    />
                </div>
                <div>
                    <label htmlFor="firstName" className="block mb-1 text-sm font-medium">Prénom</label>
                    <input
                        id="firstName"
                        type="text"
                        value={form.firstName}
                        onChange={e => setForm({...form, firstName: e.target.value})}
                        className="w-full rounded-md bg-white/10 px-3 py-2 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
                        placeholder="Partie du prénom"
                    />
                </div>
                <div>
                    <label htmlFor="lastName" className="block mb-1 text-sm font-medium">Nom</label>
                    <input
                        id="lastName"
                        type="text"
                        value={form.lastName}
                        onChange={e => setForm({...form, lastName: e.target.value})}
                        className="w-full rounded-md bg-white/10 px-3 py-2 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
                        placeholder="Partie du nom"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-sky-600 hover:bg-sky-700 rounded-md py-2 text-white font-semibold transition disabled:opacity-50"
                >
                    {loading ? 'Recherche...' : 'Rechercher'}
                </button>
            </form>

            <section className="mt-10">
                {results.length > 0 ? (
                    <table
                        className="w-full text-left border-collapse border border-white/20 rounded-lg overflow-hidden">
                        <thead className="bg-white/10">
                        <tr>
                            <th className="px-4 py-2 border border-white/20">ID</th>
                            <th className="px-4 py-2 border border-white/20">Prénom</th>
                            <th className="px-4 py-2 border border-white/20">Nom</th>
                            <th className="px-4 py-2 border border-white/20">Email</th>
                            <th className="px-4 py-2 border border-white/20">Entreprise</th>
                            <th className="px-4 py-2 border border-white/20">Statut</th>
                        </tr>
                        </thead>
                        <tbody>
                        {results.map((p) => (
                            <tr key={p.id} className="odd:bg-white/5 even:bg-white/10">
                                <td className="px-4 py-2 border border-white/20">{p.id}</td>
                                <td className="px-4 py-2 border border-white/20">{p.firstName}</td>
                                <td className="px-4 py-2 border border-white/20">{p.lastName}</td>
                                <td className="px-4 py-2 border border-white/20">{p.email}</td>
                                <td className="px-4 py-2 border border-white/20">{p.company}</td>
                                <td className="px-4 py-2 border border-white/20">
                                    <StatusBadge status={p.status}/>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="mt-6 text-white/70">Aucun résultat</p>
                )}
            </section>
        </main>
    )
}