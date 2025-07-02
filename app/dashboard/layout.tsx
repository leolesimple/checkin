import Link from 'next/link'

export default function DashboardLayout({children}: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-stone-900 text-neutral-100">
            <div className={"fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center space-y-4 gap-4"}>
                <header
                    className=" bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-full px-4 py-2 flex items-center space-x-4 max-w-[90vw] animate-float m-0">
                    <Link href="/">Home</Link>
                    <Link href="/dashboard/">Registrations</Link>
                    <Link href="/dashboard/control">Pass Control</Link>
                </header>
                <header
                    className=" bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-full flex items-center space-x-4 max-w-[90vw] m-0 overflow-x-auto animate-bis">
                    <Link href="/logout" className={"px-4 py-2 ms-0 bg-red-400/30 text-red-400 hover:bg-red-900 hover:text-red-50 transition-all ease-in-out duration-700"}>Log Out</Link>

                </header>
            </div>
            <div className=" mx-auto px-6 py-8">
                {children}
            </div>
        </div>
    )
}