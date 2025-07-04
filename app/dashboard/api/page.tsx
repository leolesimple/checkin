'use client'

import { useState } from 'react'

export default function ApiKeyGenerator() {
    const [userId, setUserId] = useState('')
    const [result, setResult] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const generateKey = async () => {
        setLoading(true)
        const res = await fetch('/api/generate-key', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id_user: userId }),
        })
        const data = await res.json()
        setResult(data.api_key || data.error)
        setLoading(false)
    }

    return (
        <main style={{ padding: 40 }}>
            <h1>Generate API Key 🗝️</h1>
            <input
                type="text"
                placeholder="Supabase user ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                style={{ padding: 10, width: '100%', maxWidth: 400, marginBottom: 20 }}
            />
            <button onClick={generateKey} disabled={loading} style={{ padding: 10 }}>
                {loading ? 'Generating...' : 'Generate Key'}
            </button>
            {result && (
                <pre
                    style={{
                        marginTop: 30,
                        padding: 20,
                        background: '#f0f0f0',
                        borderRadius: 10,
                        maxWidth: 500,
                    }}
                >
          {result}
        </pre>
            )}
        </main>
    )
}
