import {
    Button,
    Card,
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
    ClockIcon,
} from "@heroicons/react/24/solid"
import Head from "next/head"
import Image from "next/image"
import BgdcNav from "~/components/BGDCNav"
import Link from "next/link"
import BgdcFooter from "~/components/BGDCFooter"

export default function Home() {
    return (
        <>
            <Head>
                <title>Join BGDC</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <BgdcNav />
            <main>
                <div
                    id="landing"
                    className="flex max-h-[110vh] min-h-[900px] flex-col items-center justify-between bg-magenta px-8 pb-16 pt-2 lg:h-[90vh]"
                >
                    <div className="flex w-full max-w-5xl flex-col items-center lg:flex-grow lg:flex-row-reverse lg:items-center lg:justify-between">
                        <Image
                            className="hidden object-center lg:block"
                            src="/expo23totebag.webp"
                            width={408}
                            height={503}
                            alt={"BGDC sticker"}
                        />
                        <Image
                            className="object-center lg:hidden"
                            src="/expo23totebag.webp"
                            width={204}
                            height={501}
                            alt={"BGDC sticker"}
                        />
                        <div className="my-5 flex max-w-[480px] flex-grow flex-col items-center gap-4 text-center lg:justify-center lg:text-left">
                            <Typography
                                variant="h1"
                                color="white"
                                className="font-serif lg:text-7xl"
                            >
                                Games are dreams to life
                            </Typography>
                            <Typography
                                variant="lead"
                                color="amber"
                                className="w-full font-semibold"
                            >
                                Binus Game Development Club
                            </Typography>
                            <Typography variant="h5" color="white" className="text-2xl font-medium">
                                A community that celebrates games and creative passion.
                            </Typography>
                            <div className="my-1 flex w-full flex-row items-center justify-center gap-x-10 px-10">
                                <a href="#find-us" className="flex-grow">
                                    <Button fullWidth color="cyan" size="lg" className="sm:text-xl">
                                        Find Us
                                    </Button>
                                </a>
                                <Link
                                    href="https://bgdc.itch.io/"
                                    className="flex-grow"
                                    target="_blank"
                                >
                                    <Button
                                        fullWidth
                                        color="deep-orange"
                                        size="lg"
                                        className="sm:text-xl"
                                    >
                                        Our Games
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <Typography
                        variant="h2"
                        color="white"
                        className="text-center underline lg:text-5xl"
                    >
                        OPEN FOR ALL REGIONS
                    </Typography>
                    <a className="hidden" href="#">
                        <ChevronDownIcon className="h-6 w-6" />
                    </a>
                </div>
                <div
                    id="find-us"
                    className="relative flex flex-col items-center bg-[#544e67] px-5 py-20"
                >
                    <Image
                        className="left-10 top-1/3 hidden 2xl:absolute 2xl:block"
                        src={"/play.webp"}
                        width={518 / 2}
                        height={705 / 2}
                        alt=""
                    />
                    <div className="w-full max-w-4xl">
                        <div>
                            <Typography
                                variant="h2"
                                className="text-center font-serif text-5xl font-medium"
                            >
                                Find Us
                            </Typography>
                        </div>
                        <Tabs className="my-2" value="KMG">
                            <TabsHeader
                                className="bg-transparent"
                                indicatorProps={{
                                    className: "bg-cyan-90 shadow-none",
                                }}
                            >
                                {[
                                    {
                                        shortLabel: "KMG",
                                        fullLabel: "Kemanggisan",
                                    },
                                    {
                                        shortLabel: "BDG",
                                        fullLabel: "Bandung",
                                    },
                                    {
                                        shortLabel: "AS",
                                        fullLabel: "Alam Sutera",
                                    },
                                    {
                                        shortLabel: "Online",
                                        fullLabel: "Online",
                                    },
                                ].map((element) => (
                                    <Tab key={element.shortLabel} value={element.shortLabel}>
                                        <Typography
                                            variant="h5"
                                            className="font-2xl font-semibold sm:hidden"
                                        >
                                            {element.shortLabel}
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            className="hidden text-2xl font-semibold sm:block"
                                        >
                                            {element.fullLabel}
                                        </Typography>
                                    </Tab>
                                ))}
                            </TabsHeader>
                            <hr className="mx-auto my-2 h-1 max-w-md rounded border-0 bg-gray-100 md:my-4" />
                            <TabsBody>
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
                                    <Carousel className="my-4 h-[150px] lg:h-[400px]">
                                        <Image
                                            className="h-full w-full rounded-xl object-scale-down object-center shadow-xl"
                                            src={"/position-kmg.png"}
                                            alt={""}
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
                                            Bandung Campus
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            className="text-center text-gray-200"
                                        >
                                            Atrium Lantai 4 (#23)
                                        </Typography>
                                    </div>
                                    <Carousel className="my-4 h-[150px] lg:h-[400px]">
                                        <Image
                                            className="h-full w-full rounded-xl object-scale-down object-center shadow-xl"
                                            src={""}
                                            alt={""}
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
                                    <Carousel className="my-4 h-[150px] lg:h-[400px]">
                                        <Image
                                            className="h-full w-full rounded-xl object-scale-down object-center shadow-xl"
                                            src={"/position-as.png"}
                                            alt={""}
                                            width={1267}
                                            height={631}
                                        />
                                    </Carousel>
                                </TabPanel>
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
                                                        title: "Introduction to BGDC",
                                                        timeSub: "29/07/2023 | 19:00 - 20:30",
                                                        body: `The key to more success is to have a lot
                                                    of pillows. Put it this way, it took me
                                                    twenty five years to get these plants,
                                                    twenty five years of blood sweat and
                                                    tears, and I&apos;m never giving up,
                                                    I&apos;m just getting started. I&apos;m
                                                    up to something. Fan luv.`,
                                                    },
                                                    {
                                                        title: "Talent Group Showcase",
                                                        timeSub: "30/07/2023 | 19:00 - 20:30",
                                                        body: `The key to more success is to have a lot
                                                    of pillows. Put it this way, it took me
                                                    twenty five years to get these plants,
                                                    twenty five years of blood sweat and
                                                    tears, and I&apos;m never giving up,
                                                    I&apos;m just getting started. I&apos;m
                                                    up to something. Fan luv.`,
                                                    },
                                                    {
                                                        title: "Talent Group Showcase",
                                                        timeSub: "31/07/2023 | 19:00 - 20:30",
                                                        body: `The key to more success is to have a lot
                                                    of pillows. Put it this way, it took me
                                                    twenty five years to get these plants,
                                                    twenty five years of blood sweat and
                                                    tears, and I&apos;m never giving up,
                                                    I&apos;m just getting started. I&apos;m
                                                    up to something. Fan luv.`,
                                                    },
                                                    {
                                                        title: "Coffee Talk",
                                                        timeSub: "01/08/2023 | 19:00 - 20:30",
                                                        body: `The key to more success is to have a lot
                                                of pillows. Put it this way, it took me
                                                twenty five years to get these plants,
                                                twenty five years of blood sweat and
                                                tears, and I&apos;m never giving up,
                                                I&apos;m just getting started. I&apos;m
                                                up to something. Fan luv.`,
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
                                                                        <ClockIcon
                                                                            color="white"
                                                                            className="h-4 w-4"
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
                            </TabsBody>
                        </Tabs>
                    </div>
                </div>
                <div
                    id="kelas"
                    className="relative flex flex-col items-center bg-magenta px-8 py-20"
                >
                    <Image
                        className="right-10 top-1/3 hidden 2xl:absolute 2xl:block"
                        src={"/observe.webp"}
                        width={518 / 2}
                        height={705 / 2}
                        alt=""
                    />
                    <div className="flex max-w-5xl flex-col gap-2">
                        <Typography
                            variant="h2"
                            className="text-center font-serif text-6xl font-medium"
                        >
                            Skill Up!
                        </Typography>
                        <Typography variant="small" color="light-gray" className="text-center">
                            Class
                        </Typography>
                        <Typography
                            variant="lead"
                            className="my-2 text-center sm:text-3xl lg:text-4xl"
                        >
                            One-time price. Unlimited access to mentors and classes for{" "}
                            <strong>all</strong> skillsets, forever*.
                        </Typography>
                        <Typography variant="small" className="w-full text-center text-gray-400">
                            *As long as BGDC exists.
                        </Typography>
                        <hr className="mx-auto my-2 h-1 max-w-md rounded border-0 bg-gray-100 md:my-4" />
                        <div className="flex flex-row flex-wrap justify-center">
                            {[
                                {
                                    icon: BeakerIcon,
                                    title: "Game Design",
                                    imageRef: "/class-prog-1.png",
                                },
                                {
                                    icon: CodeBracketIcon,
                                    title: "Game Programming",
                                    imageRef: "/class-prog-1.png",
                                },
                                {
                                    icon: PaintBrushIcon,
                                    title: "2D Art & Animation",
                                    imageRef: "/class-prog-1.png",
                                },
                                {
                                    icon: CubeIcon,
                                    title: "3D Art & Animation",
                                    imageRef: "/class-prog-1.png",
                                },
                                {
                                    icon: SpeakerWaveIcon,
                                    title: "Game Sound",
                                    imageRef: "/class-prog-1.png",
                                },
                            ].map((element) => (
                                <figure key={element.title} className="relative h-96 w-96 p-5">
                                    <Image
                                        className="h-full w-full rounded-xl object-cover object-center shadow-xl"
                                        src={element.imageRef}
                                        alt={element.title}
                                        width={250}
                                        height={140}
                                    />
                                    <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 flex-row items-center justify-between gap-2 rounded-xl border border-white bg-white/75 px-6 py-4 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                                        <element.icon className="h-6 w-6" color="black" />
                                        <Typography
                                            variant="h5"
                                            color="blue-gray"
                                            className="flex-grow"
                                        >
                                            {element.title}
                                        </Typography>
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    </div>
                </div>
                <div
                    id="talent-group"
                    className="relative flex flex-col items-center bg-[#544e67] px-5 py-20"
                >
                    <Image
                        className="left-10 top-1/3 hidden 2xl:absolute 2xl:block"
                        src={"/develop.webp"}
                        width={518 / 2}
                        height={705 / 2}
                        alt=""
                    />
                    <div className="flex max-w-5xl flex-col gap-2">
                        <Typography
                            variant="h2"
                            className="text-center font-serif font-medium sm:text-6xl"
                        >
                            Create and Publish Games
                        </Typography>
                        <Typography variant="small" color="light-gray" className="text-center">
                            Talent Group
                        </Typography>
                        <Typography
                            variant="lead"
                            className="my-2 text-center sm:text-3xl lg:text-4xl"
                        >
                            Develop a game with a team from ideation to publishing. No experience
                            required.
                        </Typography>
                    </div>
                    <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 md:my-10" />
                    <div className="max-w-xl">
                        {[
                            {
                                gameTitle: "Highway Core",
                                studioName: "Lifelessplay Productions",
                                batch: "5",
                                screenshotRefs: [
                                    "/highway-core-1.png",
                                    "/highway-core-1.png",
                                    "/highway-core-3.png",
                                ],
                                description:
                                    "You are in the middle of a busy highway filled with trucks and cars. Shoot your way through an infinite horde of enemies with the various weapons that you can use! Can you set the highest score out of everyone else?",
                                itchIoLink: "https://bgdc.itch.io/highway-core",
                            },
                            {
                                gameTitle: "Wobble",
                                studioName: "Studio Name",
                                batch: "X",
                                screenshotRefs: ["/wobble-1.png", "/wobble-2.png"],
                                description:
                                    "Welcome to Wobble where your life is on the edge, literally. You are on an ever-changing platform. Your goal is to keep the platform relatively stable by moving around to different spots on the platform until all of the blocks are set in stone.",
                                itchIoLink: "https://bgdc.itch.io/",
                            },
                            {
                                gameTitle: "Ruins of the Schecnavian",
                                studioName: "Protecat",
                                batch: "X",
                                screenshotRefs: ["/ruins-1.png", "/ruins-2.png"],
                                description:
                                    "You are Upin, an adventurous scavenger for ScavenGo Inc. One day, you received a task from the higher-ups to scavenge the Ruins of the Schecnavians. In order to complete the task, you are given a device that allows you to warp between worlds. With a blazing adventurous spirit, you set off to the Ruins of the Schecnavians, unaware of the horrors within. Ruins of the Schecnavians is a tile-based puzzle game where you must use a warping device to pass through obstacles to win the game.",
                                itchIoLink: "https://bgdc.itch.io/",
                            },
                        ].map((element, i) => (
                            <div key={i}>
                                <div className="flex flex-col items-center gap-3 text-center">
                                    <div>
                                        <Typography
                                            variant="h3"
                                            className="text-center font-serif font-medium sm:text-5xl"
                                        >
                                            {element.gameTitle}
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            className="sm:text-xl"
                                        >{`${element.studioName} | Batch ${element.batch}`}</Typography>
                                    </div>
                                    <Carousel
                                        className="rounded-xl"
                                        autoplayDelay={8000 + i * 1000}
                                        autoplay
                                        loop
                                    >
                                        {element.screenshotRefs.map((ssRef, i) => (
                                            <Image
                                                key={i}
                                                src={ssRef}
                                                alt={`${
                                                    element.gameTitle
                                                }-screenshot${i.toString()}`}
                                                className="h-full w-full object-cover"
                                                width={1200}
                                                height={680}
                                            />
                                        ))}
                                    </Carousel>
                                    <Typography variant="paragraph" className="w-full text-left">
                                        {element.description}
                                    </Typography>
                                    <a href={element.itchIoLink}>
                                        <Button className="my-2" color="orange">
                                            Try on Itch.io
                                        </Button>
                                    </a>
                                </div>
                                <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 md:my-10" />
                            </div>
                        ))}
                    </div>
                </div>
                <div id="footer"></div>
            </main>
            <BgdcFooter />
        </>
    )
}
