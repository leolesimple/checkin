import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type ParamsContext = {
    params: { id: string }
}

export async function GET(req: NextRequest, context: any) {
    const { id } = (context as ParamsContext).params
    const apiKey = req.headers.get('authorization')?.replace('Bearer ', '')

    if (!apiKey) {
        return NextResponse.json({ error: 'Missing API key' }, { status: 401 })
    }

    const { data: keyRecord, error } = await supabase
        .from('api_key')
        .select('id_user')
        .eq('api_key', apiKey)
        .single()

    if (error || !keyRecord) {
        return NextResponse.json({ error: 'Unauthorized - invalid API key' }, { status: 403 })
    }

    const { data, error: dbError } = await supabase
        .from('registrations')
        .select('*')
        .eq('id', id)
        .single()

    if (dbError) {
        return NextResponse.json({ error: dbError.message }, { status: 404 })
    }

    return NextResponse.json(data)
}
