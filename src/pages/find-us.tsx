import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Carousel,
    Tab,
    TabPanel,
    Tabs,
    TabsBody,
    TabsHeader,
    Timeline,
    TimelineBody,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineItem,
    Typography,
} from "@material-tailwind/react"
import {
    BeakerIcon,
    CodeBracketIcon,
    PaintBrushIcon,
    CubeIcon,
    SpeakerWaveIcon,
    ChevronDownIcon,
    MapPinIcon,
    CalendarDaysIcon,
} from "@heroicons/react/24/solid"
import Image from "next/image"
import BgdcNav from "~/components/BGDCNav"
import Link from "next/link"
import BgdcFooter from "~/components/BGDCFooter"
import { useState } from "react"
import { FaCopy, FaDiscord, FaLine, FaWhatsapp } from "react-icons/fa"
import toast, { Toaster } from "react-hot-toast"

export default function FindUs() {
    const [lineHover, setLineHover] = useState(false)
    const [whatsAppHover1, setWhatsAppHover1] = useState(false)
    const [whatsAppHover2, setWhatsAppHover2] = useState(false)
    const [discordHover1, setDiscordHover1] = useState(false)
    const [discordHover2, setDiscordHover2] = useState(false)
    
    return(
        <>
            <BgdcNav />
                <main>
                    <div
                    id="find-us"
                    className="relative flex flex-col items-center px-5 py-20"
                    >
                    <div className="w-full max-w-4xl">
                        <div>
                            <Typography
                                variant="h2"
                                className="text-center font-serif text-5xl font-medium outline-text"
                            >
                                {"Find Us at Expo!"}
                            </Typography>
                        </div>
                        <Tabs className="my-2" value="Online">
                            <TabsHeader
                                className="bg-background"
                                indicatorProps={{
                                    className: "bg-cyan-90 shadow-none",
                                }}
                            >
                                {[
                                    {
                                        shortLabel: "Online",
                                        fullLabel: "Online",
                                    },
                                    {
                                        shortLabel: "KMG",
                                        fullLabel: "Kemanggisan",
                                    },
                                    {
                                        shortLabel: "BDG",
                                        fullLabel: "Senayan",
                                    },
                                    {
                                        shortLabel: "AS",
                                        fullLabel: "Alam Sutera",
                                    },
                                ].map((element) => (
                                    <Tab key={element.shortLabel} value={element.shortLabel}>
                                        <Typography
                                            variant="h5"
                                            className="font-2xl font-semibold md:hidden"
                                        >
                                            {element.shortLabel}
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            className="hidden text-2xl font-semibold md:block"
                                        >
                                            {element.fullLabel}
                                        </Typography>
                                    </Tab>
                                ))}
                            </TabsHeader>
                            <hr className=" my-2 h-1 w-full rounded border-0 bg-gray-100 md:my-4" />
                            <TabsBody>
                                <TabPanel value={"Online"} className="p-2">
                                    <div className="flex flex-col items-center">
                                        <div className="flex flex-col items-center gap-2">
                                            <Typography
                                                variant="h4"
                                                className="text-center"
                                                color="white"
                                            >
                                                Online
                                            </Typography>
                                            <a
                                                href="https://binusgdc.com/link/events"
                                                target="_blank"
                                            >
                                                <Button
                                                    size="lg"
                                                    color="orange"
                                                    className="m-1 flex items-center gap-1"
                                                >
                                                    <MapPinIcon className="h-4 w-4" />
                                                    BGDC Event Server
                                                </Button>
                                            </a>
                                        </div>
                                        <Card className="my-4 max-w-lg bg-purple-90 px-5 py-2">
                                            <Timeline className="my-4">
                                                {[
                                                    {
                                                        title: "Get to Know BGDC",
                                                        timeSub: "29th August 2023 | 19:00 - 20:30",
                                                        body: `BGDC-curious? Have all your questions answered in this live online session with us!`,
                                                    },
                                                    {
                                                        title: "Talent Group Showcase I",
                                                        timeSub: "30th August 2023 | 19:00 - 20:30",
                                                        body: `Talent Group is BGDC's ultimate game dev program. 
                                                        Three teams will share how they went from drawing board to finished game in just three months, and how you could do it too. 
                                                        Ask them anything!`,
                                                    },
                                                    {
                                                        title: "Talent Group Showcase II",
                                                        timeSub: "31st August 2023 | 19:00 - 20:30",
                                                        body: `Talent Group is BGDC's ultimate game dev program. 
                                                        Three teams will share how they went from drawing board to finished game in just three months, and how you could do it too. 
                                                        Ask them anything!`,
                                                    },
                                                    {
                                                        title: "Coffee Talk",
                                                        timeSub:
                                                            "1st September 2023 | 19:00 - 20:30",
                                                        body: `Grab a coffee (or tea) and tune in to our expo finale. Coffee Talk is a gathering format where we come together to chat, share experiences and have a good time. Come sit with us?`,
                                                    },
                                                ].map((element, i, arr) => (
                                                    <TimelineItem key={i}>
                                                        {i == arr.length - 1 ? (
                                                            <></>
                                                        ) : (
                                                            <TimelineConnector />
                                                        )}
                                                        <TimelineHeader className="h-3">
                                                            <TimelineIcon />
                                                            <div>
                                                                <Typography
                                                                    variant="h6"
                                                                    color="white"
                                                                    className="leading-none"
                                                                >
                                                                    {element.title}
                                                                </Typography>
                                                            </div>
                                                        </TimelineHeader>
                                                        <TimelineBody className="pb-8">
                                                            <div className="flex flex-col justify-between">
                                                                <div className="">
                                                                    <div className="flex flex-row items-center gap-1">
                                                                        <CalendarDaysIcon
                                                                            color="white"
                                                                            className="h-5 w-5 -translate-y-0.5"
                                                                        />
                                                                        <Typography
                                                                            variant="small"
                                                                            color="white"
                                                                        >
                                                                            {element.timeSub}
                                                                        </Typography>
                                                                    </div>

                                                                    <Typography
                                                                        variant="small"
                                                                        color="white"
                                                                    >
                                                                        {element.body}
                                                                    </Typography>
                                                                </div>
                                                            </div>
                                                        </TimelineBody>
                                                    </TimelineItem>
                                                ))}
                                            </Timeline>
                                        </Card>
                                    </div>
                                </TabPanel>
                                <TabPanel value={"KMG"} className="p-2">
                                    <div className="flex flex-col items-center gap-2">
                                        <Typography
                                            variant="h4"
                                            className="text-center"
                                            color="white"
                                        >
                                            Anggrek Campus
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            className="text-center text-gray-200"
                                        >
                                            Balkon Lantai 3 (#8)
                                        </Typography>
                                    </div>
                                    <Carousel className="my-4 w-full">
                                        <Image
                                            className="h-full w-full rounded-xl object-scale-down object-center shadow-xl"
                                            src={"/position-kmg-m.webp"}
                                            alt={"position of BGDC in kemanggisan expo"}
                                            width={1213}
                                            height={559}
                                        />
                                    </Carousel>
                                </TabPanel>
                                <TabPanel value={"BDG"} className="p-2">
                                    <div className="flex flex-col items-center gap-2">
                                        <Typography
                                            variant="h4"
                                            className="text-center"
                                            color="white"
                                        >
                                            Senayan Campus
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            className="text-center text-gray-200"
                                        >
                                            Ur mom (#23)
                                        </Typography>
                                    </div>
                                    <Carousel className="my-4 w-full">
                                        <Image
                                            className="h-full w-full rounded-xl object-scale-down object-center shadow-xl"
                                            src={"/position-bdg-m.webp"}
                                            alt={"position of BGDC in Senayan expo"}
                                            width={880}
                                            height={495}
                                        />
                                    </Carousel>
                                </TabPanel>
                                <TabPanel value={"AS"} className="p-2">
                                    <div className="flex flex-col items-center gap-2">
                                        <Typography
                                            variant="h4"
                                            className="text-center"
                                            color="white"
                                        >
                                            Alam Sutera Campus
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            className="text-center text-gray-200"
                                        >
                                            GOR Alam Sutera (#35)
                                        </Typography>
                                    </div>
                                    <Carousel className="my-4 w-full">
                                        <Image
                                            className="h-full w-full rounded-xl object-scale-down object-center shadow-xl"
                                            src={"/position-as-m.webp"}
                                            alt={"position of BGDC in alam sutera expo"}
                                            width={1267}
                                            height={631}
                                        />
                                    </Carousel>
                                </TabPanel>
                            </TabsBody>
                        </Tabs>
                    </div>
                </div>
            </main>
        <BgdcFooter />
    </>
)
}