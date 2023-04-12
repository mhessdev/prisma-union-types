import "./globals.css";

export const metadata = {
    title: "Prisma Union Types Facebook Feed Example",
    description: "",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-slate-800 text-gray-300 p-6">{children}</body>
        </html>
    );
}
