'use client';

import Image from "next/image";
import Title from "@app/ui/titles";
import Button from "@app/ui/button";
import Link from "next/link"
import Footer from "@app/ui/footer";
import { PresentationChartBarIcon, DevicePhoneMobileIcon, SparklesIcon, BeakerIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Keynote',
        description:
            'A bold introduction to our latest advancements, where breakthrough ideas meet powerful new realities.',
        icon: PresentationChartBarIcon,
    },
    {
        name: 'Hands‑on',
        description:
            'A closer look at what’s next. Experience our most refined technologies crafted to feel as good as they perform.',
        icon: DevicePhoneMobileIcon,
    },
    {
        name: 'Taste Bar',
        description:
            'Time to pause, recharge, and take it all in—with curated flavors designed to complement the experience.',
        icon: SparklesIcon,
    },
    {
        name: 'Inside Liquid Glass',
        description:
            'An exclusive journey into the design lab behind our most expressive interface yet where clarity meets intuition.',
        icon: BeakerIcon,
    },
]

export default function Home() {

    return (
        <>
            <main className="min-h-screen w-full bg-stone-900 text-neutral-100">
                <Image
                    src="/img/appleParkEntrance.webp"
                    alt=""
                    width={800}
                    height={449}
                    className=" overflow-hidden w-auto h-auto mx-auto max-h-[600px] object-fill object-center rounded-2xl"/>
                <div className={"max-w-[1140px] mx-auto mt-10 h-75 flex flex-col items-center"}>
                    <Title heading="Feathered In" tag="h1" className="text-6xl text-center"/>
                    <p className="mt-4 text-lg w-fit text-center">
                        Join us in person on September 10 at 7 p.m.<br/>
                        Steve Jobs Theater, Cupertino.<br/>
                        Learn more at apple.com.
                    </p>
                    <Link href="/register" className={"mx-auto mt-4"}>
                        <Button asChild>
                            <span>Register</span>
                        </Button>
                    </Link>
                </div>
                <Hero></Hero>
                <Bento></Bento>
            </main>
            <Footer></Footer>
        </>
    );
}

function Hero() {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base/7 font-semibold text-stone-500">In the spotlight.</h2>
                    <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-stone-300 sm:text-5xl lg:text-balance">
                        Discover what the day holds.
                    </p>
                    <p className="mt-6 text-lg/8 text-stone-400">
                        From bold announcements to immersive moments, from hands-on demos to a rare look behind the curtain, this isn’t just an event. It’s everything we’ve been working toward.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-3xl font-semibold text-stone-300">
                                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-blue-700">
                                        <feature.icon aria-hidden="true" className="size-6 text-stone-100" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base/7 text-stone-400">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

function Bento() {
    return (
        <div className="bg-stone-900 py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-center text-base/7 font-semibold text-stone-500">Come to the Apple Park</h2>
                <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-neutral-100 sm:text-5xl">
                    Welcome Inside.
                </p>
                <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-stone-800 lg:rounded-l-4xl" />
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                <p className="mt-2 text-lg tracking-tight text-neutral-100 max-lg:text-center font-bold">
                                    Wallet Pass
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-stone-500 max-lg:text-center">
                                    Your ticket to the event. Add it to your Apple Wallet for easy access.
                                </p>
                            </div>
                            <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] shadow-2xl">
                                    <Image
                                        alt="App preview on mobile device"
                                        src="/img/wallet-passes.png"
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/10 lg:rounded-l-4xl" />
                    </div>
                    {/* Performance */}
                    <div className="relative max-lg:row-start-1">
                        <div className="absolute inset-px rounded-lg bg-stone-800 max-lg:rounded-t-4xl" />
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg tracking-tight text-neutral-100 max-lg:text-center font-bold">Identity. Checked</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-stone-500 max-lg:text-center">
                                    Come with your ID and check in at the entrance. We’ll take care of the rest.
                                </p>
                            </div>
                            <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                                <Image
                                    alt="Performance chart visualization"
                                    src={"/img/identity-wallet.png"}
                                    width={600}
                                    height={400}
                                    className="w-full max-lg:max-w-xs"
                                />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/10 max-lg:rounded-t-4xl" />
                    </div>
                    {/* Security */}
                    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                        <div className="absolute inset-px rounded-lg bg-stone-800" />
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg tracking-tight text-neutral-100 max-lg:text-center font-bold">Security</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-stone-500 max-lg:text-center">
                                    In today’s global context, security is our top priority. We’ve implemented robust measures to ensure the safety of all attendees.
                                </p>
                            </div>
                            <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                                <Image
                                    alt="Security shield icon"
                                    width={600}
                                    height={400}
                                    src="/img/privacy.webp"
                                    className="h-[130px] w-auto m-auto object-cover"
                                />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/10" />
                    </div>
                    {/* Powerful APIs */}
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-stone-800 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                <p className="mt-2 text-lg tracking-tight text-neutral-100 max-lg:text-center font-bold">
                                    Arrival Essentials
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-stone-500 max-lg:text-center">
                                    Pick up your essentials upon check-in. A curated kit to help you settle in—and take a little something home.
                                </p>
                            </div>
                            <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                                <Image
                                    alt="Security shield icon"
                                    width={600}
                                    height={400}
                                    src="/img/goodies.png"
                                    className="h-[130px] w-auto m-auto object-cover"
                                />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/10 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}

