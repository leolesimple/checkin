"use client";
import {Slot} from "@radix-ui/react-slot";
import type {ButtonHTMLAttributes, ReactNode} from "react";

type ButtonProps = {
    asChild?: boolean;
    children: ReactNode;
    className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
                                   asChild = false,
                                   children,
                                   className = "",
                                   onClick,
                                   ...props
                               }: ButtonProps) {
    const Comp = asChild ? Slot : "button";

    return (
    <Comp
        className={`border focus:outline-none  focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 bg-stone-800 text-white border-stone-600 hover:bg-stone-700 hover:border-stone-600 focus:ring-stone-700 ${className}`}
        onClick={onClick}
        {...props}
    >
        {children}
    </Comp>
)
    ;
}
