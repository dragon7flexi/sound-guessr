import Link from "next/link";

interface LinkButtonProps {
    href: string;
    children: React.ReactNode
}

export default function LinkButton({ href, children }: LinkButtonProps) {
    return (
        <Link href={href} className="mt-10 px-4 py-2 text-4xl shadow-2xl bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg">
            {children}
        </Link>
    );
}