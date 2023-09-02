import { ArrowUpRightIcon, ExclamationCircleIcon, MapPinIcon } from "@heroicons/react/24/solid"
import { Alert, Button, Card, Typography } from "@material-tailwind/react"
import { WarningRounded } from "@mui/icons-material"
import { Toaster, toast } from "react-hot-toast"
import { FaCopy } from "react-icons/fa"
import BgdcFooter from "~/components/BGDCFooter"
import BgdcNav from "~/components/BGDCNav"

export default function Daftar() {
    return (
        <>
            <div>
                <Toaster position="bottom-center" />
            </div>
            <BgdcNav />
            <main className="flex min-h-screen flex-col items-center gap-5 bg-magenta px-2 py-5">
                <Typography variant="h1" className="text-center font-serif font-medium">
                    Level Up with BGDC
                </Typography>
                <div className="flex flex-row flex-wrap justify-center gap-10">
                    <Card className="relative min-h-[422px] w-[90vw] max-w-sm bg-white opacity-60 shadow-2xl">
                        <Typography
                            variant="lead"
                            color="black"
                            className="absolute top-1/2 w-full text-center font-serif text-4xl opacity-100"
                        >
                            CLOSED
                        </Typography>
                        <div className="flex flex-col items-center gap-5 p-5">
                            <div className="flex flex-col items-center gap-2">
                                <Typography
                                    variant="h2"
                                    color="black"
                                    className="text-center font-serif text-2xl font-medium"
                                >
                                    Week of Welcoming (B27)
                                </Typography>
                                <Alert
                                    className="p-2"
                                    color="blue-gray"
                                    icon={<ExclamationCircleIcon className="h-5 w-5" />}
                                >
                                    <Typography variant="small" className="text-xs">
                                        - Registering onsite? Please check your WoW schedule.
                                        <br />- {"Don't forget to join the "}
                                        <a
                                            href="https://binusgdc.com/link/events"
                                            target="_blank"
                                            className="underline"
                                        >
                                            {"event server."}
                                        </a>
                                    </Typography>
                                </Alert>
                                <Alert
                                    className="p-2"
                                    color="red"
                                    icon={<WarningRounded className="h-5 w-5" />}
                                >
                                    <Typography variant="small" className="text-xs">
                                        Nomor rekening on the brochure is wrong. Please use the
                                        details below.
                                    </Typography>
                                </Alert>
                            </div>
                            <div className="w-full">
                                <Typography variant="small" className="my-1 w-full text-left">
                                    Registration fee details:
                                </Typography>
                                <div className="flex w-fit flex-col items-stretch text-left">
                                    <div className="flex flex-col text-left">
                                        <Typography variant="small">Nominal Transfer:</Typography>
                                        <Typography variant="small" className="font-bold">
                                            Rp 100.000
                                        </Typography>
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <Typography variant="small">Nomor Rekening:</Typography>
                                        <Typography variant="small" className="font-bold">
                                            BCA 5272020647
                                        </Typography>
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <Typography variant="small">Atas Nama:</Typography>
                                        <Typography variant="small" className="font-bold">
                                            IDA BAGUS K G P & MARY R
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                            <Button size="sm" className="flex flex-row items-center gap-2">
                                <FaCopy /> Copy Nomor Rekening
                            </Button>
                            <Button
                                color="deep-purple"
                                size="lg"
                                className="flex flex-row items-center gap-2"
                            >
                                Registration Form B27 <ArrowUpRightIcon className="h-4 w-4" />
                            </Button>
                        </div>
                    </Card>
                    <Card className="relative flex min-h-[450px] w-[90vw] max-w-sm flex-col items-center gap-5 bg-white p-5 opacity-60 shadow-2xl">
                        <Typography
                            variant="h2"
                            color="black"
                            className="text-center font-serif text-2xl font-medium"
                        >
                            Registration for B26 and lower
                        </Typography>
                        <div className="absolute left-0 top-1/2 flex w-full flex-grow items-center justify-center">
                            <Typography
                                variant="lead"
                                color="black"
                                className="font-serif text-4xl"
                            >
                                COMING SOON
                            </Typography>
                        </div>
                    </Card>
                </div>
            </main>
            <BgdcFooter />
        </>
    )
}
