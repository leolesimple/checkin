import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="w-full bg-none text-stone-400 py-16 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 text-sm">
                <div className="md:col-span-2 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-stone-700 flex items-center justify-center">
                            <Image
                                src="/img/apple-plume.png"
                                alt="Feathered In logo"
                                width={40}
                                height={40}
                                className="h-8 w-8"
                                priority
                            />
                        </div>
                        <span className="text-neutral-100 font-semibold text-lg">Feathered In</span>
                    </div>
                    <p className="text-sm leading-relaxed text-stone-500">
                        An immersive event experience designed around lightness, clarity and connection. Hosted in Cupertino.
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <h6 className="text-neutral-100 font-medium mb-2">Event</h6>
                    <Link href="/" className="hover:text-white">Overview</Link>
                    <Link href="/studio" className="hover:text-white">Liquid Glass</Link>
                    <Link href="/register" className="hover:text-white">Register</Link>
                </div>

                <div className="flex flex-col gap-2">
                    <h6 className="text-neutral-100 font-medium mb-2">Legal</h6>
                    <Link href="/terms" className="hover:text-white">Terms</Link>
                    <Link href="/privacy" className="hover:text-white">Privacy</Link>
                    <Link href="/cookies" className="hover:text-white">Cookies</Link>
                </div>
            </div>

            <div className="mt-16 text-center text-xs text-stone-600">
                © 2025 Feathered In. All rights reserved.
            </div>
        </footer>
    )
}
