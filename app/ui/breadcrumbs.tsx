import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean);

    const items = segments.map((segment, idx) => {
        const href = "/" + segments.slice(0, idx + 1).join("/");
        // Capitalize and replace dashes/underscores for label
        const label = segment
            .replace(/[-_]/g, " ")
            .replace(/\b\w/g, c => c.toUpperCase());
        return { href, label };
    });

    return (
        <div className={"bg-stone-900/30 backdrop-blur-sm sticky text-neutral-100 mb-5 border-b border-stone-500/20 saturate-200 top-0 z-50"}>
            <nav className={"max-w-[960px] mx-auto py-4 px-5"}>
                <ol className="list-none flex space-x-2">
                    <li>
                        <Link href="/" className="text-stone-400 hover:text-white">
                            Home
                        </Link>
                        {items.length > 0 && (
                            <span className="mx-2 text-stone-600">/</span>
                        )}
                    </li>
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center">
                            <Link href={item.href} className="text-stone-400 hover:text-white">
                                {item.label}
                            </Link>
                            {index < items.length - 1 && (
                                <span className="mx-2 text-stone-600">/</span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    );
}

// Usage in a page component
// import Breadcrumbs from "@app/ui/breadcrumbs";
//
// export default function SomePage() {
//     return (
//         <>
//             <Breadcrumbs />
//             <div className="p-5">
//                 <h1 className="text-2xl font-bold">Some Page</h1>
//                 <p>This is some content for the page.</p>
//             </div>
//         </>
//     );
// }