import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { randomUUID } from 'crypto'

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(req: NextRequest) {
    const body = await req.json()
    const id_user = body?.id_user

    if (!id_user) {
        return NextResponse.json({ error: 'Missing user_id' }, { status: 400 })
    }

    const newKey = randomUUID()

    const { error } = await supabase
        .from('api_key')
        .upsert({ id_user, api_key: newKey }, { onConflict: 'id_user' })

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ api_key: newKey })
}
