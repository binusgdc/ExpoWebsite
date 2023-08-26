import { type Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { type AppType } from "next/app"
import { api } from "~/utils/api"
import "~/styles/globals.css"
import { ThemeProvider } from "@material-tailwind/react"
import Head from "next/head"
import { Analytics } from "@vercel/analytics/react"

const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    const theme: object = {
        tab: {
            styles: {
                base: {
                    tab: {
                        initial: {
                            color: "text-white",
                        },
                    },
                },
            },
        },
    }

    return (
        <>
            <SessionProvider session={session}>
                <ThemeProvider value={theme}>
                    <Head>
                        <title>Join BGDC</title>
                        <link rel="icon" href="/favicon.ico" />
                        <meta
                            name="description"
                            content="Meet Binus Game Development Club at Expo 2023"
                        />
                        <meta property="og:image" content="/thumb.webp" />
                    </Head>
                    <Component {...pageProps} />
                </ThemeProvider>
            </SessionProvider>
            <Analytics />
        </>
    )
}

export default api.withTRPC(MyApp)
