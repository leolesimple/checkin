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

    const { data, error } = await supabase
        .from('registrations')
        .select('*')
        .eq('id', id)
        .single()

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 404 })
    }

    return NextResponse.json(data)
}
