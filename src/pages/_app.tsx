import { type Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { type AppType } from "next/app"
import { api } from "~/utils/api"
import "~/styles/globals.css"
import { ThemeProvider } from "@material-tailwind/react"
import Head from "next/head"

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
        <SessionProvider session={session}>
            <ThemeProvider value={theme}>
                <Head>
                    <title>Join BGDC</title>
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="description" content="Binus Game Development Club in Expo 2023" />
                </Head>
                <Component {...pageProps} />
            </ThemeProvider>
        </SessionProvider>
    )
}

export default api.withTRPC(MyApp)
