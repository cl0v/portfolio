import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "GyroMouse",
    description: "You have all the control in your hands",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`antialiased`}
            >
                {children}
            </body>
        </html>
    );
}