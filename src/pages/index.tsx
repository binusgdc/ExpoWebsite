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
import { FaCopy, FaDiscord, FaLaptop, FaLine, FaWhatsapp } from "react-icons/fa"
import toast, { Toaster } from "react-hot-toast"
import { SquareOutlined } from "@mui/icons-material"
import { Hidden } from "@mui/material"

export default function Home() {
    const [lineHover, setLineHover] = useState(false)
    const [whatsAppHover1, setWhatsAppHover1] = useState(false)
    const [whatsAppHover2, setWhatsAppHover2] = useState(false)
    const [discordHover1, setDiscordHover1] = useState(false)
    const [discordHover2, setDiscordHover2] = useState(false)
    return (
        <>
            <div>
                <Toaster position="bottom-center" />
            </div>
            <BgdcNav />
            <main id="index">
                <div
                    id="landing"
                    className="flex max-h-[120vh] min-h-[800px] flex-col items-center justify-between px-6 pt-2 lg:h-[90vh]"
                >
                    <div className="flex w-full max-w-4xl flex-col items-center lg:flex-grow lg:flex-row-reverse lg:items-center lg:justify-between">
                        <Image
                            className="hidden object-center lg:block"
                            src="/BGDCFront.png"
                            width={408}
                            height={503}
                            alt={"BGDC sticker"}
                        />
                        <Image
                            className="object-center lg:hidden"
                            src="/BGDCFront.png"
                            width={204}
                            height={501}
                            alt={"BGDC sticker"}
                        />
                        <div className="my-5 flex max-w-[480px] flex-grow flex-col items-center gap-4 text-center lg:justify-center lg:text-left">
                            <Typography
                                variant="h1"
                                color="white"
                                className="font-serif font-medium lg:text-7xl outline-text-3"
                            >
                                Games are dreams to life
                            </Typography>
                            <Typography
                                variant="lead"
                                color="amber"
                                className="w-full font-semibold outline-text-2"
                            >
                                Binus Game Development Club
                            </Typography>
                            <Typography variant="h5" color="white" className="text-2xl font-medium">
                                A community that celebrates games and creative passion.
                            </Typography>
                            <div className="flex w-full flex-row items-center justify-center gap-x-10 px-10 lg:justify-start lg:px-0 lg:pr-20">
                                <Link href="/daftar" className="flex-grow">
                                    <Button fullWidth color="cyan" size="lg" className="sm:text-lg">
                                        Register Now
                                    </Button>
                                </Link>
                                <Link
                                    href="https://bgdc.itch.io/"
                                    className="flex-grow"
                                    target="_blank"
                                >
                                    <Button
                                        fullWidth
                                        color="deep-orange"
                                        size="lg"
                                        className="sm:text-lg"
                                    >
                                        Our Games
                                    </Button>
                                </Link>
                            </div>
                            <div className="flex w-full flex-col gap-1">
                                <Typography
                                    variant="small"
                                    className="mb-1 sm:text-left text-center"
                                >
                                    Contact Person:
                                </Typography>
                                <div className="flex w-full max-w-md flex-row justify-center sm:justify-start">
                                    <div className="flex flex-col items-start gap-2">
                                        <Typography
                                            variant="small"
                                            className="text-left"
                                        >
                                            Virly:
                                        </Typography>
                                        <div className="flex flex-row items-center gap-1">
                                            <FaWhatsapp />
                                            <Typography
                                                className={
                                                    whatsAppHover1
                                                        ? "hover:cursor-pointer"
                                                        : "hover:cursor-default"
                                                }
                                                variant="small"
                                                onMouseEnter={() => setWhatsAppHover1(true)}
                                                onMouseLeave={() => setWhatsAppHover1(false)}
                                                onClick={async () => {
                                                    if (!whatsAppHover1) {
                                                        return
                                                    }
                                                    await navigator.clipboard.writeText(
                                                        "081378633352"
                                                    )
                                                    setWhatsAppHover1(false)
                                                    toast.success("WhatsApp number copied")
                                                }}
                                            >
                                                081378633352
                                            </Typography>
                                            <FaCopy
                                                className={`${
                                                    whatsAppHover1 ? `opacity-100` : `opacity-0`
                                                } transition-opacity`}
                                            />
                                        </div>
                                        <div className="flex flex-row items-center gap-1">
                                            <FaDiscord />
                                            <Typography
                                                className={
                                                    discordHover1
                                                        ? "hover:cursor-pointer"
                                                        : "hover:cursor-default"
                                                }
                                                variant="small"
                                                onMouseEnter={() => setDiscordHover1(true)}
                                                onMouseLeave={() => setDiscordHover1(false)}
                                                onClick={async () => {
                                                    if (!discordHover1) {
                                                        return
                                                    }
                                                    await navigator.clipboard.writeText("hina.akhina")
                                                    setDiscordHover1(false)
                                                    toast.success("Discord username copied")
                                                }}
                                            >
                                                hina.akhina
                                            </Typography>
                                            <FaCopy
                                                className={`${
                                                    discordHover1 ? `opacity-100` : `opacity-0`
                                                } transition-opacity`}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start gap-2">
                                        <Typography
                                            variant="small"
                                            className="text-left"
                                        >
                                            Raul:
                                        </Typography>
                                        <div className="flex flex-row items-center gap-1">
                                            <FaWhatsapp />
                                            <Typography
                                                className={
                                                    whatsAppHover2
                                                        ? "hover:cursor-pointer"
                                                        : "hover:cursor-default"
                                                }
                                                variant="small"
                                                onMouseEnter={() => setWhatsAppHover2(true)}
                                                onMouseLeave={() => setWhatsAppHover2(false)}
                                                onClick={async () => {
                                                    if (!whatsAppHover2) {
                                                        return
                                                    }
                                                    await navigator.clipboard.writeText(
                                                        "085156292898"
                                                    )
                                                    setWhatsAppHover2(false)
                                                    toast.success("WhatsApp number copied")
                                                }}
                                            >
                                                085156292898
                                            </Typography>
                                            <FaCopy
                                                className={`${
                                                    whatsAppHover2 ? `opacity-100` : `opacity-0`
                                                } transition-opacity`}
                                            />
                                        </div>
                                        <div className="flex flex-row items-center gap-1">
                                            <FaDiscord />
                                            <Typography
                                                className={
                                                    discordHover2
                                                        ? "hover:cursor-pointer"
                                                        : "hover:cursor-default"
                                                }
                                                variant="small"
                                                onMouseEnter={() => setDiscordHover2(true)}
                                                onMouseLeave={() => setDiscordHover2(false)}
                                                onClick={async () => {
                                                    if (!discordHover2) {
                                                        return
                                                    }
                                                    await navigator.clipboard.writeText("yuukito2")
                                                    setDiscordHover1(false)
                                                    toast.success("Discord username copied")
                                                }}
                                            >
                                                yuukito2
                                            </Typography>
                                            
                                            <FaCopy
                                                className={`${
                                                    discordHover2 ? `opacity-100` : `opacity-0`
                                                } transition-opacity`}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="about-bgdc"
                    className="relative flex flex-col items-center px-5 pt-5"
                >
                    <Image
                        className="left-10 top-1/3 hidden 2xl:absolute 2xl:block"
                        src={"/IdolPlay.png"}
                        width={518 / 2}
                        height={705 / 2}
                        alt=""
                    />
                    <Typography
                        variant="h2"
                        className="text-center font-serif text-5xl font-medium outline-text-3"
                    >
                        About BGDC
                    </Typography>
                    <p className="text-center block antialiased font-sans text-xl leading-relaxed w-full font-semibold outline-text-2">
                        <span style={{color: '#bdbf48'}}>Play. </span> 
                        <span style={{color: '#ff8c34'}}>Observe. </span> 
                        <span style={{color: '#f66472'}}>Develop</span>
                    </p>
                    <br/>
                    <div className="w-full max-w-3xl flex-col items-center justify-start gap-14 2xl:gap-10 pt-10">
                        <div className="grid w-full grid-cols-1 place-items-stretch gap-10 2xl:h-80 2xl:grid-cols-2">
                            <div className="order-last 2xl:order-none">
                                <Typography
                                    variant="h3"
                                    className="mb-1 text-left font-serif font-medium outline-text-3"
                                >
                                    A Passion for Games
                                </Typography>
                                <Typography variant="paragraph" className="pr-5">
                                    Founded in 2013, BGDC is a welcoming and supportive place for
                                    people passionate and creative about games. We strive to unlock
                                    the potential of the game development industry in Indonesia
                                    through education, public events and member activities.
                                </Typography>
                            </div>
                            <div className="mx-auto max-h-96 w-full max-w-md">
                                <Image
                                    className="h-flex w-full object-top rounded-xl"
                                    src="/play-observe-develop-1.jpg"
                                    alt="mascots: play, observe, develop"
                                    width={1500}
                                    height={900}
                                />
                            </div>
                        </div>
                        <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-transparent md:my-10" />
                        <div
                            id="find-us"
                            className="relative flex items-top px-5"
                            >
                            <div className="w-full max-w-4xl pt-10">
                                <div>
                                    <Typography
                                        variant="h2"
                                        className="text-center font-serif text-5xl font-medium outline-text-3"
                                    >
                                        {"Find Us at Expo!"}
                                    </Typography>
                                </div>
                                <Tabs className="my-2" value="KMG">
                                    <TabsHeader
                                        className="bg-background"
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
                                                shortLabel: "SNY",
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
                                                    className="hidden text-2xl font-semibold md:block outline-text-2"
                                                >
                                                    {element.fullLabel}
                                                </Typography>
                                            </Tab>
                                        ))}
                                    </TabsHeader>
                                    <hr className="my-2 h-1 w-full rounded border-0 bg-gray-100 md:my-4" />
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
                                                    Balkon Lantai 3 (#7)
                                                </Typography>
                                            </div>
                                                <Image
                                                    className="w-full rounded-xl object-scale-down object-center"
                                                    src={"/DenahKMG2024.png"}
                                                    alt={"position of BGDC in kemanggisan expo"}
                                                    width={1213}
                                                    height={559}
                                                />
                                        </TabPanel>
                                        <TabPanel value={"SNY"} className="p-2">
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
                                                    Senayan Campus Lantai 3 (#19)
                                                </Typography>
                                            </div>
                                                <Image
                                                    className="h-max w-full rounded-xl object-center"
                                                    src={"/DenahSNY2024asli.png"}
                                                    alt={"position of BGDC in Senayan expo"}
                                                    width={1000}
                                                    height={816}
                                                />
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
                                                    GOR Alam Sutera (#37)
                                                </Typography>
                                            </div>
                                                <Image
                                                    className="h-max w-full rounded-xl object-scale-down object-center"
                                                    src={"/DenahALS2024.png"}
                                                    alt={"position of BGDC in alam sutera expo"}
                                                    width={1267}
                                                    height={631}
                                                />
                                        </TabPanel>
                                    </TabsBody>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="class"
                    className="relative flex flex-col items-center px-5 py-5"
                >
                    <Image
                        className="right-10 top-1/3 hidden 2xl:absolute 2xl:block"
                        src={"/IdolObs.png"}
                        width={518 / 2}
                        height={705 / 2}
                        alt=""
                    />
                    <hr className="flex max-w-3xl mx-auto my-4 h-1 w-48 rounded border-0 md:my-10 bg-gray-100" />
                    <div className="flex max-w-3xl flex-col gap-3 pt-5">
                        <Typography
                            variant="h2"
                            className="text-center font-serif text-6xl font-medium outline-text-3"
                        >
                            Class!
                        </Typography>
                        <Typography
                            variant="lead"
                            className="my-2 text-center sm:text-3xl lg:text-4xl"
                        >
                            One-time price. Unlimited access to mentors and classes for{" "}
                            <strong>all</strong> skillsets, forever*.
                        </Typography>
                        <p className="text-center block antialiased font-sans text-l leading-relaxed w-full">
                            <span style={{color: '#FFD349'}}>*As long as BGDC exists. </span>
                        </p>
                        <hr className="mx-auto my-4 h-1 w-48 rounded border-0 md:my-10 bg-gray-100" />
                        <div className="justify-center flex pt-10">
                            <div className="max-w-3xl"><div className="flex flex-row flex-wrap justify-center gap-10">
                            {[
                                {
                                    icon: BeakerIcon,
                                    title: "Game Design",
                                    imageRef: "/game-design-1.png",
                                    lead: "Get Creative",
                                    description:
                                        "Discover the essence of what makes games great. Learn about mechanics, story, balance and other key design concepts through vivid case studies.",
                                },
                                {
                                    icon: CodeBracketIcon,
                                    title: "Game Programming",
                                    imageRef: "/class-prog-1.png",
                                    lead: "It's Alive!",
                                    description:
                                        "Bring games to life in 2D and 3D with the Unity game engine and the C# programming language.",
                                },
                                {
                                    icon: PaintBrushIcon,
                                    title: "2D Art & Animation",
                                    imageRef: "/2d-art-1.png",
                                    lead: "Any Pen, Any Paper",
                                    description:
                                        "Our 2D class tutors on 2-dimensional fundamentals, background, character design, and implementing them into Unity.",
                                },
                                {
                                    icon: CubeIcon,
                                    title: "3D Art & Animation",
                                    imageRef: "/3d-art-1.png",
                                    lead: "Sculpt the World",
                                    description:
                                        "Our 3D class tutors modelling with Blender, from the bottom up! Includes objects, environments, characters, and how to import them in Unity.                                    ",
                                },
                                {
                                    icon: SpeakerWaveIcon,
                                    title: "Game Sound",
                                    imageRef: "/sound-1.png",
                                    lead: "Hey, Listen!",
                                    description:
                                        "Compose music and sound effects with Audacity and Ableton. Experiment with various themes and techniques for that immersive player experience.",
                                },
                                {
                                    icon: FaLaptop,
                                    title: "OOGP",
                                    imageRef: "/oogpclass.png",
                                    lead: "Type It Down!",
                                    description:
                                        "Master object-oriented principles to create robust game architectures. Design reusable systems for characters, items, and environments.",
                                },
                            ].map((element) => {
                                return (
                                    <Card
                                        key={element.title}
                                        className="w-full max-w-3xl md:flex-row"
                                    >
                                        <CardHeader
                                            shadow={false}
                                            floated={false}
                                            className="m-0 w-full flex-grow rounded-lg md:rounded-r-none"
                                        >
                                            <Image
                                                src={element.imageRef}
                                                alt={element.title}
                                                className="h-full w-full object-cover object-left"
                                                width={1920}
                                                height={1280}
                                            />
                                        </CardHeader>
                                        <CardBody className="sm:w-96">
                                            <div className="mb-4 flex flex-row items-center gap-2">
                                                <element.icon className="h-5 w-5" />
                                                <Typography
                                                    variant="h6"
                                                    color="gray"
                                                    className="uppercase"
                                                >
                                                    {element.title}
                                                </Typography>
                                            </div>
                                            <Typography
                                                variant="h4"
                                                color="blue-gray"
                                                className="mb-2"
                                            >
                                                {element.lead}
                                            </Typography>
                                            <Typography color="gray" className="mb-8 font-normal">
                                                {element.description}
                                            </Typography>
                                        </CardBody>
                                    </Card>
                                )
                            })}
                            </div>
                            <hr className="mx-auto my-4 h-1 w-48 rounded border-0 md:my-10" />
                        </div>
                        </div>
                    </div>
                </div>
                <hr className="flex max-w-3xl mx-auto my-4 h-1 w-48 rounded border-0 md:my-10 bg-gray-100" />
                <div
                    id="events"
                    className="relative flex flex-col items-center px-5"
                >
                    <Image
                        className="left-10 top-1/3 hidden 2xl:absolute 2xl:block"
                        src={"/IdolDev.webp"}
                        width={518 / 2}
                        height={705 / 2}
                        alt=""
                    />
                    <div className="flex max-w-3xl flex-col gap-3 pb-5">
                        <Typography
                            variant="h2"
                            className="text-center font-serif font-medium sm:text-6xl outline-text-3"
                        >
                            Events
                        </Typography>
                        <Typography
                            variant="lead"
                            className="my-2 text-center sm:text-3xl lg:text-4xl"
                        >
                            Events are the heartbeat of BGDC, bringing together our community in exciting and dynamic ways.{" "}
                        </Typography>
                    </div>
                    <hr className="flex max-w-3xl mx-auto my-5 h-1 w-48 rounded border-0 md:my-10 bg-gray-100" />
                    <div className="max-w-3xl pt-10">
                        <Typography
                            variant="h3"
                            className="flex-col text-center font-serif font-medium sm:text-5xl outline-text-3 pb-10"
                        >
                            Gathering
                        </Typography>
                        <Carousel
                            className="rounded-xl"
                            navigation={(_props) => <></>}
                            loop
                            autoplay
                            autoplayDelay={10000}
                        >
                        <div className="flex-w-3xl">
                            <Image
                                className="h-full w-full rounded-xl object-cover"
                                src="/WhoAmI2024.png"
                                alt="Who Am I"
                                width={1280}
                                height={720}
                            />
                            <Typography className="pl-1" variant="small" color="white">
                                {"Gathering Voice Acting (Tebak Orang)"}
                            </Typography>
                        </div>
                        <div className="flex-w-3xl">
                            <Image
                                className="h-full w-full rounded-xl object-cover"
                                src="/DrawBattle2024.png"
                                alt="DrawBattle"
                                width={1280}
                                height={720}
                            />
                            <Typography className="pl-1" variant="small" color="white">
                                {"Gathering Tebak Gambar"}
                            </Typography>
                        </div>
                        <div className="flex-w-3xl">
                            <Image
                                className="h-full w-full rounded-xl object-cover"
                                src="/Karaoke1.png"
                                alt="Karaoke1"
                                width={1280}
                                height={720}
                            />
                            <Typography className="pl-1" variant="small" color="white">
                                {"Gathering Karaoke"}
                            </Typography>
                        </div>
                        <div className="flex-w-3xl">
                            <Image
                                className="h-full w-full rounded-xl object-cover"
                                src="/Karaoke2.png"
                                alt="Karaoke2"
                                width={1280}
                                height={720}
                            />
                            <Typography className="pl-1" variant="small" color="white">
                                {"Gathering Karaoke"}
                            </Typography>
                        </div>
                    </Carousel>
                    <Typography variant="paragraph" className="pt-5">
                        {`Our club hosts a monthly gathering where members come together to share their passions and have fun. While we often focus on game development, our events cover a wide range of activities—anything that brings joy to our community counts as a gathering. Whether you're here to learn, create, or simply have a good time, there's something for everyone!`}
                    </Typography>
                </div>
                <hr className="mx-auto my-4 h-1 w-48 rounded border-0 md:my-10" />
                <div className="max-w-3xl">
                    {[
                        {
                            eventTitle: "BGDJam",
                            screenshotRefs: [
                                "/BGDJamPreview.png",
                            ],
                            description:
                                "BGDjam is a game development competition organized by BGDC, where participants are challenged to create a game within a limited time based on a specific theme. This event encourages creativity, teamwork, and technical skills, providing developers with an opportunity to bring innovative game ideas to life under time constraints.",
                        },
                        {
                            eventTitle: "Company Visit",
                            screenshotRefs: [
                                "/ComVisP12024.png",
                                "/ComVisP22024.png",
                                "/ComVisP32024.png",
                            ],
                            description:
                                "Company Visit is an annual event organized by BGDC, where members visit game companies in Indonesia. Last year, we conducted a virtual visit to Glory Jam, and this year, the event will be held offline, allowing participants to visit the companies in person. This activity offers a unique opportunity to gain insights into the game development industry and connect with professionals in the field.",
                        },
                        {
                            eventTitle: "Indienesia Game Festival",
                            screenshotRefs: [
                                "/IGFGloryJam2024.png",
                                "/IGFJitok2024.png",
                                "/IGFSamudra2024.png",
                                "/IGFWebinar2024.png",
                                "/IGFWebinar22024.png",
                                "/IGFWinners2024.png",
                            ],
                            description:
                                "Indienesia Game Festival (IGF) is BGDC's largest annual event that lasts three days. This virtual festival features game developers from across Indonesia showcasing their games, offering participants the chance to interact directly with the creators. In addition to the exhibition, the event also includes webinars that delve into various aspects of game development.",
                        },
                        {
                            eventTitle: "PKM",
                            screenshotRefs: [
                                "/PKM2024.png",
                                "/LitFli2024.png",
                                "/ITF2024.png",
                                "/DeaDec2024.png",
                            ],
                                description:
                                <>
                                    PKM is an event held by BGDC to raise awareness and teach the masses regarding global and social problems that are prevalent in our everyday life. To achieve this, we develop games that are educational-themed. They can develop soft and hard skills in the field of game development, as well as get <b>Community Service</b> Hours.
                                </>
                                ,
                        },
                    ].map((element, i) => (
                        <div key={i}>
                            <div className="flex flex-col items-center gap-3 text-center">
                                <div>
                                    <Typography
                                    variant="h3"
                                    className="text-center font-serif font-medium sm:text-5xl outline-text-3 pb-7"
                                    >
                                        {element.eventTitle}
                                    </Typography>
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
                                            alt={`${element.eventTitle}-screenshot${(
                                                i + 1
                                            ).toString()}`}
                                            className="h-full w-full object-cover"
                                            width={1280}
                                            height={720}
                                        />
                                    ))}
                                </Carousel>
                                <Typography variant="paragraph" className="w-full text-left pt-5">
                                    {element.description}
                                </Typography>
                            </div>
                            <hr className="mx-auto my-4 h-1 w-48 rounded border-0 md:my-10" />
                        </div>
                    ))}
                    </div>
                    <hr className="flex max-w-3xl mx-auto my-5 h-1 w-48 rounded border-0 md:my-10 bg-gray-100" />
                    <div className="max-w-3xl pt-10 pb-20 px-5">
                        <Typography
                            variant="h3"
                            className="flex-col text-center font-serif font-medium sm:text-5xl outline-text-3 pb-10"
                        >
                            Talent Group
                        </Typography>
                        <Typography
                            variant="lead"
                            className="my-2 text-center sm:text-3xl lg:text-4xl">
                            Develop a game with a team from ideation to publishing. No experience required.
                        </Typography>
                        <p className="text-center block antialiased font-sans text-l leading-relaxed w-full pb-12">
                            <span style={{color: '#FFFFFF'}}>more of our games can be viewed and played on our
                                <u><a href="https://bgdc.itch.io/" target="_blank">itch.io</a></u>. 
                            </span>
                        </p>
                            <div className="flex flex-wrap justify-between md:flex-row">
                                <div className="w-full md:w-1/3 pb-5 px-1">
                                    <Card className="h-96 rounded-xl overflow-hidden bg-faqbg">
                                        <CardHeader className="pt-10 bg-faqbg">
                                            <div className="relative w-full h-44">
                                                <Image
                                                    className="absolute rounded-xl w-full h-full object-cover"
                                                    src="/ProHyp2024.png"
                                                    alt="Project Hypatios"
                                                    layout="fill"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                            </div>
                                        </CardHeader>
                                        <CardBody className="p-4">
                                            <Typography
                                                as="a"
                                                href="https://bgdc.itch.io/project-hypatios"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 hover:underline text-lg font-bold"
                                            >
                                                Project Hypatios
                                            </Typography>
                                            <Typography variant="caption" color="white" className="text-sm">
                                                Welcome to Project Hypatios, a roguelite shooting game where you will play and face different challenges in a facility filled with enemy robots!
                                            </Typography>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div className="w-full md:w-1/3 px-1 pb-5">
                                    <Card className="h-96 rounded-xl overflow-hidden  bg-faqbg">
                                        <CardHeader className="pt-10  bg-faqbg">
                                            <div className="relative w-full h-44">
                                                <Image
                                                    className="absolute w-full h-full object-cover rounded-xl"
                                                    src="/AtomTrack2024.png"
                                                    alt="Atom Track"
                                                    layout="fill"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                            </div>
                                        </CardHeader>
                                        <CardBody className="p-4">
                                            <Typography
                                                as="a"
                                                href="https://bgdc.itch.io/atomtrack"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 hover:underline text-lg font-bold"
                                            >
                                                Atom Track
                                            </Typography>
                                            <Typography variant="body2" color="white" className="text-sm">
                                                Take the wheel and dominate the circuit because this Top-down racing just got a whole lot faster.
                                            </Typography>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div className="w-full md:w-1/3 px-1 pb-5">
                                    <Card className="h-96 rounded-xl overflow-hidden bg-faqbg">
                                        <CardHeader className="pt-10 bg-faqbg">
                                            <div className="relative w-full h-44">
                                                <Image
                                                    className="absolute w-full h-full object-cover rounded-xl"
                                                    src="/ChaosWeek2024.png"
                                                    alt="Chaos Weekly"
                                                    layout="fill"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                            </div>
                                        </CardHeader>
                                        <CardBody className="p-4">
                                            <Typography
                                                as="a"
                                                href="https://bgdc.itch.io/chaos-weekly"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 hover:underline text-lg font-bold"
                                            >
                                                Chaos Weekly
                                            </Typography>
                                            <Typography variant="body2" color="white" className="text-sm">
                                                Make the world chaotic with the power of hoax for raking in the cash, but going overboard will get you in trouble!
                                            </Typography>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                    </div>
                </div>
                <div id="footer"></div>
            </main>
            <BgdcFooter />
        </>
    )
}
