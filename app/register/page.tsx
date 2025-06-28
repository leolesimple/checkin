'use client'

import RegisterForm from "@app/ui/registerForm";
import Footer from "@app/ui/footer";

export default function Register() {
    return <>
        <main className={"flex flex-col max-w-[960px] mx-auto min-h-screen text-white p-6"}>
            <IntroRegister></IntroRegister>
            <RegisterForm></RegisterForm>
        </main>
        <Footer></Footer>
    </>
}

function IntroRegister() {
    return (
        <>
            <section>
                <div className="py-13 px-6 mx-auto max-w-4xl text-center">
                    <h1 className="mb-6 text-5xl font-semibold tracking-tight text-neutral-100 leading-tight">
                        Come in-person.
                    </h1>
                    <p className="mb-10 text-lg text-stone-400">
                        Join us in Cupertino and be part of something remarkable. Registration is limited—secure your
                        spot today and prepare for a day built around clarity, lightness, and innovation.
                    </p>
                </div>
            </section>
        </>
    )
}
