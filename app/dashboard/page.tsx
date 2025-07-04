'use client'

import {useEffect, useState} from 'react'
import {createClient} from '@supabase/supabase-js'
import {PencilIcon, TrashIcon} from '@heroicons/react/24/outline'
import Image from 'next/image'
import {CheckCircleIcon, ClockIcon, XCircleIcon} from '@heroicons/react/24/solid'


const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function DashboardPage() {
    const [data, setData] = useState<any[]>([])
    const [showToast, setShowToast] = useState(false)
    const [toastType, setToastType] = useState<'delete' | 'update' | null>(null)
    const [selectedParticipant, setSelectedParticipant] = useState<any>(null)
    const [showModal, setShowModal] = useState(false)
    const [deleteCandidate, setDeleteCandidate] = useState<any>(null)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        job: '',
        status: 'pending',
        notes: '',
        flight: '',
        consent: false,
    })
    const [showInsertModal, setShowInsertModal] = useState(false)

    function confirmDelete(p: any) {
        setDeleteCandidate(p)
    }

    useEffect(() => {
        supabase.from('registrations').select('*').then(({data, error}) => {
            if (error) console.error('Erreur Supabase :', error.message)
            else setData(data ?? [])
        })
    }, [])

    useEffect(() => {
        if (selectedParticipant) {
            setFormData({
                firstName: selectedParticipant.firstName || '',
                lastName: selectedParticipant.lastName || '',
                email: selectedParticipant.email || '',
                company: selectedParticipant.company || '',
                phone: selectedParticipant.phone || '',
                job: selectedParticipant.job || '',
                status: selectedParticipant.status || 'pending',
                notes: selectedParticipant.notes || '',
                flight: selectedParticipant.flight || '',
                consent: !!selectedParticipant.consent,
            })
        }
    }, [selectedParticipant])

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault()
        if (selectedParticipant) {
            const {error} = await supabase.from('registrations').update(formData).eq('id', selectedParticipant.id)
            if (!error) {
                setData(prev => prev.map(p => p.id === selectedParticipant.id ? {...p, ...formData} : p))
                setShowModal(false)
                setToastType('update')
                setShowToast(true)
                setTimeout(() => {
                    setShowToast(false)
                    setToastType(null)
                }, 3000)
            } else {
                console.error('Erreur mise à jour :', error)
            }
        } else {
            const {data: newEntry, error} = await supabase.from('registrations').insert([formData]).select().single()
            if (!error && newEntry) {
                setData(prev => [...prev, newEntry])
                setShowModal(false)
                setToastType('update')
                setShowToast(true)
                setTimeout(() => {
                    setShowToast(false)
                    setToastType(null)
                }, 3000)
            } else {
                console.error('Erreur ajout :', error)
            }
        }
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
        <div className="max-w-[1560px] mx-auto">
            <h1 className="text-4xl font-semibold text-center mb-10">Participants</h1>

            <div className="flex justify-end mb-6">
                <button
                    onClick={() => setShowInsertModal(true)}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-2xl font-bold transition backdrop-blur-md"
                    aria-label="Ajouter un participant"
                >
                    +
                </button>
            </div>
            <div
                className="overflow-hidden rounded-2xl backdrop-blur bg-white/5 ring-1 ring-white/10 shadow-xl max-w-[1560px]">
                <table className="min-w-full divide-y divide-white/10">
                    <thead className="bg-white/5">
                    <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-300">Nom</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-300">Entreprise</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-300">Email</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-300">Téléphone</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-300">Poste</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-300">Statut</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-300">Vol</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-300">Consentement</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-300">Notes</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-300">Actions</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                    {data.map((p) => (
                        <tr key={p.id} className="hover:bg-white/5 transition">
                            <td className="px-6 py-4 whitespace-nowrap">{p.firstName} {p.lastName}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{p.company}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{p.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{p.phone}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{p.job}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <StatusBadge status={p.status}/>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">{p.flight}</td>
                            <td className="px-6 py-4 whitespace-nowrap flex items-center justify-center gap-2">
                                {p.consent ? (
                                    <CheckCircleIcon className="h-4 w-4 text-emerald-500"
                                                     aria-label="Consentement donné"/>
                                ) : (
                                    <XCircleIcon className="h-4 w-4 text-red-500" aria-label="Consentement non donné"/>
                                )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">{p.notes}</td>
                            <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                                <button
                                    onClick={() => {
                                        setSelectedParticipant(p)
                                        setShowModal(true)
                                    }}
                                    className="hover:bg-sky-700/30 p-1.5 rounded"
                                >
                                    <PencilIcon className="h-5 w-5 text-sky-400"/>
                                </button>
                                <button
                                    onClick={() => confirmDelete(p)}
                                    className="hover:bg-red-700/30 p-1.5 rounded"
                                >
                                    <TrashIcon className="h-5 w-5 text-red-400"/>
                                </button>
                            </td>
                        </tr>
                    ))}
                    {data.length === 0 && (
                        <tr>
                            <td colSpan={10} className="text-center py-10 text-neutral-400">Aucun participant inscrit.
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>

            {showToast && toastType === 'update' && (
                <div
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-green-600/60 backdrop-blur-md text-white px-5 py-3 rounded-xl shadow-lg z-50 animate-fade-in">
                    Modifications enregistrées
                </div>
            )}
            {showToast && toastType === 'delete' && (
                <div
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-red-600/60 backdrop-blur-md text-white px-5 py-3 rounded-xl shadow-lg z-50 animate-fade-in">
                    Le participant a été supprimé
                </div>
            )}

            {showModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity">
                    <div
                        className="relative bg-white/10 backdrop-blur-2xl border border-white/20 text-white rounded-xl shadow-2xl p-6 w-full max-w-md animate-fade-in-up">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-3 right-3 text-white/60 hover:text-white transition"
                        >
                            ✕
                        </button>
                        <h2 className="text-2xl font-semibold mb-6 text-center">Modifier le participant</h2>
                        <form
                            onSubmit={handleUpdate}
                            className="flex flex-col gap-4 text-sm"
                        >
                            <div className="flex flex-col gap-1">
                                <label htmlFor="firstName" className="text-white/80 text-sm">Prénom</label>
                                <input
                                    id="firstName"
                                    type="text"
                                    value={formData.firstName}
                                    onChange={e => setFormData({...formData, firstName: e.target.value})}
                                    className="bg-white/10 text-white px-4 py-2 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="lastName" className="text-white/80 text-sm">Nom</label>
                                <input
                                    id="lastName"
                                    type="text"
                                    value={formData.lastName}
                                    onChange={e => setFormData({...formData, lastName: e.target.value})}
                                    className="bg-white/10 text-white px-4 py-2 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="email" className="text-white/80 text-sm">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={e => setFormData({...formData, email: e.target.value})}
                                    className="bg-white/10 text-white px-4 py-2 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="company" className="text-white/80 text-sm">Entreprise</label>
                                <input
                                    id="company"
                                    type="text"
                                    value={formData.company}
                                    onChange={e => setFormData({...formData, company: e.target.value})}
                                    className="bg-white/10 text-white px-4 py-2 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="phone" className="text-white/80 text-sm">Téléphone</label>
                                <input
                                    id="phone"
                                    type="text"
                                    value={formData.phone}
                                    onChange={e => setFormData({...formData, phone: e.target.value})}
                                    className="bg-white/10 text-white px-4 py-2 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="job" className="text-white/80 text-sm">Poste</label>
                                <input
                                    id="job"
                                    type="text"
                                    value={formData.job}
                                    onChange={e => setFormData({...formData, job: e.target.value})}
                                    className="bg-white/10 text-white px-4 py-2 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="status" className="text-white/80 text-sm">Statut</label>
                                <select
                                    id="status"
                                    value={formData.status}
                                    onChange={e => setFormData({...formData, status: e.target.value})}
                                    className="bg-white/10 text-white px-4 py-2 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                                >
                                    <option value="pending">En attente</option>
                                    <option value="confirmed">Confirmé</option>
                                    <option value="cancelled">Annulé</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="flight" className="text-white/80 text-sm">Vol</label>
                                <input
                                    id="flight"
                                    type="text"
                                    value={formData.flight}
                                    onChange={e => setFormData({...formData, flight: e.target.value})}
                                    className="bg-white/10 text-white px-4 py-2 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="notes" className="text-white/80 text-sm">Notes</label>
                                <textarea
                                    id="notes"
                                    value={formData.notes}
                                    onChange={e => setFormData({...formData, notes: e.target.value})}
                                    className="bg-white/10 text-white px-4 py-2 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                                    rows={2}
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    id="consent"
                                    type="checkbox"
                                    checked={formData.consent}
                                    onChange={e => setFormData({...formData, consent: e.target.checked})}
                                    className="accent-sky-600 h-4 w-4"
                                />
                                <label htmlFor="consent" className="text-white/80 text-sm">Consentement</label>
                            </div>
                            <div className="flex justify-end gap-3 pt-4">
                                <button type="button" onClick={() => setShowModal(false)}
                                        className="px-4 py-2 rounded bg-white/10 hover:bg-white/20 border border-white/20 transition">Annuler
                                </button>
                                <button type="submit"
                                        className="px-4 py-2 rounded bg-sky-600 hover:bg-sky-700 text-white border border-white/20 transition">Enregistrer
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {showInsertModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity">
                    <div
                        className="relative bg-white/10 backdrop-blur-2xl border border-white/20 text-white rounded-xl shadow-2xl p-6 w-full max-w-md animate-fade-in-up">
                        <button
                            onClick={() => setShowInsertModal(false)}
                            className="absolute top-3 right-3 text-white/60 hover:text-white transition"
                        >
                            ✕
                        </button>
                        <h2 className="text-2xl font-semibold mb-6 text-center">Ajouter un participant</h2>
                        <form
                            onSubmit={async (e) => {
                                e.preventDefault()
                                const {
                                    data: newEntry,
                                    error
                                } = await supabase.from('registrations').insert([formData]).select().single()
                                if (!error && newEntry) {
                                    setData(prev => [...prev, newEntry])
                                    setShowInsertModal(false)
                                    setToastType('update')
                                    setShowToast(true)
                                    setTimeout(() => {
                                        setShowToast(false)
                                        setToastType(null)
                                    }, 3000)
                                } else {
                                    console.error('Erreur ajout :', error)
                                }
                            }}
                            className="flex flex-col gap-4 text-sm"
                        >
                            <div className="flex flex-col gap-1">
                                <label htmlFor="firstName" className="text-white/80 text-sm">Prénom</label>
                                <input
                                    id="firstName"
                                    type="text"
                                    value={formData.firstName}
                                    onChange={e => setFormData({...formData, firstName: e.target.value})}
                                    className="bg-white/10 text-white px-4 py-2 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="lastName" className="text-white/80 text-sm">Nom</label>
                                <input
                                    id="lastName"
                                    type="text"
                                    value={formData.lastName}
                                    onChange={e => setFormData({...formData, lastName: e.target.value})}
                                    className="bg-white/10 text-white px-4 py-2 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="email" className="text-white/80 text-sm">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={e => setFormData({...formData, email: e.target.value})}
                                    className="bg-white/10 text-white px-4 py-2 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="company" className="text-white/80 text-sm">Entreprise</label>
                                <input
                                    id="company"
                                    type="text"
                                    value={formData.company}
                                    onChange={e => setFormData({...formData, company: e.target.value})}
                                    className="bg-white/10 text-white px-4 py-2 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="phone" className="text-white/80 text-sm">Téléphone</label>
                                <input
                                    id="phone"
                                    type="text"
                                    value={formData.phone}
                                    onChange={e => setFormData({...formData, phone: e.target.value})}
                                    className="bg-white/10 text-white px-4 py-2 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="job" className="text-white/80 text-sm">Poste</label>
                                <input
                                    id="job"
                                    type="text"
                                    value={formData.job}
                                    onChange={e => setFormData({...formData, job: e.target.value})}
                                    className="bg-white/10 text-white px-4 py-2 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="status" className="text-white/80 text-sm">Statut</label>
                                <select
                                    id="status"
                                    value={formData.status}
                                    onChange={e => setFormData({...formData, status: e.target.value})}
                                    className="bg-white/10 text-white px-4 py-2 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                                >
                                    <option value="pending">En attente</option>
                                    <option value="confirmed">Confirmé</option>
                                    <option value="cancelled">Annulé</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="flight" className="text-white/80 text-sm">Vol</label>
                                <input
                                    id="flight"
                                    type="text"
                                    value={formData.flight}
                                    onChange={e => setFormData({...formData, flight: e.target.value})}
                                    className="bg-white/10 text-white px-4 py-2 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="notes" className="text-white/80 text-sm">Notes</label>
                                <textarea
                                    id="notes"
                                    value={formData.notes}
                                    onChange={e => setFormData({...formData, notes: e.target.value})}
                                    className="bg-white/10 text-white px-4 py-2 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                                    rows={2}
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    id="consent"
                                    type="checkbox"
                                    checked={formData.consent}
                                    onChange={e => setFormData({...formData, consent: e.target.checked})}
                                    className="accent-emerald-600 h-4 w-4"
                                />
                                <label htmlFor="consent" className="text-white/80 text-sm">Consentement</label>
                            </div>
                            <div className="flex justify-end gap-3 pt-4">
                                <button type="button" onClick={() => setShowInsertModal(false)}
                                        className="px-4 py-2 rounded bg-white/10 hover:bg-white/20 border border-white/20 transition">Annuler
                                </button>
                                <button type="submit"
                                        className="px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-white border border-white/20 transition">Ajouter
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {deleteCandidate && (
                <div
                    className="fixed inset-0 z-50 flex items-end justify-end sm:items-center sm:justify-center bg-black/50 backdrop-blur-sm transition-opacity animate-fade-in">
                    <div
                        className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-2xl text-white px-6 py-5 w-[340px] animate-fade-in-up">
                        <h2 className="text-lg font-semibold">Supprimer ce participant ?</h2>
                        <p className="text-sm text-white/80 mt-2 mb-4">
                            {deleteCandidate.firstName} {deleteCandidate.lastName} sera définitivement supprimé.
                        </p>
                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => setDeleteCandidate(null)}
                                className="text-sm px-4 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
                            >
                                Annuler
                            </button>
                            <button
                                onClick={() => {
                                    supabase.from('registrations').delete().eq('id', deleteCandidate.id).then(({error}) => {
                                        if (!error) {
                                            setData(prev => prev.filter(p => p.id !== deleteCandidate.id))
                                            setToastType('delete')
                                            setShowToast(true)
                                            setTimeout(() => {
                                                setShowToast(false)
                                                setToastType(null)
                                            }, 3000)
                                        } else {
                                            console.error('Erreur suppression :', error)
                                        }
                                        setDeleteCandidate(null)
                                    })
                                }}
                                className="text-sm px-4 py-1.5 rounded-md bg-red-500/30 hover:bg-red-500/50 text-white border border-white/20 transition-all"
                            >
                                Supprimer
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
