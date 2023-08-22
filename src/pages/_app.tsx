import { type Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { type AppType } from "next/app"
import { api } from "~/utils/api"
import "~/styles/globals.css"
import { ThemeProvider } from "@material-tailwind/react"

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
                <Component {...pageProps} />
            </ThemeProvider>
        </SessionProvider>
    )
}

export default api.withTRPC(MyApp)
