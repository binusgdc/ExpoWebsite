import { ArrowUpRightIcon, ExclamationCircleIcon } from "@heroicons/react/24/solid"
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
                    <Card className="flex min-h-[422px] w-[90vw] max-w-sm flex-col items-center gap-5 bg-white p-5 shadow-2xl">
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
                                    - We can only give merch if you register on-the-spot (onsite).<br/>
                                    - If your region is ALAM SUTERA,<span className="font-bold"> please make sure you register on the right day.</span>
                                </Typography>
                            </Alert>
                            <Alert
                                className="p-2"
                                color="red"
                                icon={<WarningRounded className="h-5 w-5" />}
                            >
                                <Typography variant="small" className="text-xs">
                                    Nomor rekening on the brochure is wrong. Please use the one below.
                                </Typography>
                            </Alert>
                        </div>
                        <div className="w-full">
                            <Typography variant="small" className="my-1 w-full text-left">
                                You will be asked for a registration fee:
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
                        <Button
                            size="sm"
                            className="flex flex-row items-center gap-2"
                            onClick={() => {
                                void navigator.clipboard.writeText("5272020647")
                                toast.success(`Copied "5272020647"`)
                            }}
                        >
                            <FaCopy /> Copy Nomor Rekening
                        </Button>
                        <a
                            href="https://bit.ly/StudentOrganizationsRegistrationB2027"
                            target="_blank"
                        >
                            <Button
                                color="deep-purple"
                                size="lg"
                                className="flex flex-row items-center gap-2"
                            >
                                Registration Form B27 <ArrowUpRightIcon className="h-4 w-4" />
                            </Button>
                        </a>
                    </Card>
                    <Card className="relative flex min-h-[422px] w-[90vw] max-w-sm flex-col items-center gap-5 bg-white p-5 opacity-60 shadow-2xl">
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
