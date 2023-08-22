import {
    Avatar,
    Button,
    Carousel,
    IconButton,
    MobileNav,
    Navbar,
    Tab,
    TabPanel,
    Tabs,
    TabsBody,
    TabsHeader,
    Typography,
} from "@material-tailwind/react"
import {
    BeakerIcon,
    CodeBracketIcon,
    PaintBrushIcon,
    GlobeAltIcon,
    WifiIcon,
    CubeIcon,
    SpeakerWaveIcon,
} from "@heroicons/react/24/solid"
import Head from "next/head"
import Image from "next/image"
import { useState } from "react"

export default function Home() {
    const [openNav, setOpenNav] = useState(false)

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 text-center lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4">
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <a href="#kelas" className="flex items-center">
                    Learn
                </a>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <a href="#talent-group" className="flex items-center">
                    Talent Group
                </a>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <a href="#jam-buddies" className="flex items-center">
                    Jam Buddies
                </a>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <a href="#" className="flex items-center">
                    Community
                </a>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <a href="#" className="flex items-center">
                    Find Us
                </a>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <a href="#" className="flex items-center">
                    FAQ
                </a>
            </Typography>
        </ul>
    )

    return (
        <>
            <Head>
                <title>Join BGDC</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <div className="flex flex-row items-center gap-5">
                        <a>
                            <Image
                                className=""
                                src="/bgdc-logo_small.png"
                                width={50}
                                height={50}
                                alt="BGDC Logo"
                            />
                        </a>
                        <Typography
                            as="a"
                            href="#"
                            className="mr-4 cursor-pointer py-1.5 font-medium"
                        >
                            Binus Game Development Club
                        </Typography>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <Button variant="gradient" size="sm" className="hidden lg:inline-block">
                            <span>Join Up</span>
                        </Button>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                    <Button variant="gradient" size="sm" fullWidth className="mb-2">
                        <span>Join Up</span>
                    </Button>
                </MobileNav>
            </Navbar>
            <main>
                <div
                    id="landing"
                    className="flex h-[90vh] min-h-[700px] flex-col items-center bg-magenta p-8"
                >
                    <div className="flex w-full flex-grow">
                        <div className="flex max-w-[500px] flex-grow flex-col items-center justify-center gap-10">
                            <Typography variant="h1" color="white" className="font-serif">
                                Games are dreams to life
                            </Typography>
                            <Typography variant="h5" color="white">
                                A community that celebrates games and their development.
                            </Typography>
                            <div className="flex flex-row items-center justify-center gap-x-10 px-5">
                                <Button color="orange">Join Up</Button>
                                <Button color="orange">Find Us</Button>
                            </div>
                        </div>
                    </div>
                    <Typography variant="h2" color="white" className="text-center">
                        OPEN FOR ALL REGIONS
                    </Typography>
                    <a href="#">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="white"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </a>
                </div>
                <div id="kelas" className="flex flex-col items-center bg-magenta px-5 py-16">
                    <Typography variant="h2">Skill Up!</Typography>
                    <Typography variant="paragraph" className="my-2">
                        One-time price. Unlimited access to mentors and classes for{" "}
                        <strong>all</strong> skillsets, forever*.
                    </Typography>
                    <br></br>
                    <div className="flex flex-col">
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
                            <figure key={element.title} className="relative h-96 w-full p-5">
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
                    <Typography variant="small" className="w-full text-left text-gray-400">
                        *As long as BGDC exists.
                    </Typography>
                </div>
                <div id="talent-group" className="flex flex-col items-center bg-magenta px-5 py-16">
                    <Typography variant="h2" className="text-center font-serif">
                        Create and Publish Games
                    </Typography>
                    <Typography variant="paragraph" className="my-2">
                        Talent Group lorem ipsum ap simet
                    </Typography>
                    <br></br>
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
                            itchIoLink: "https://bgdc.itch.io/highway-core",
                        },
                        {
                            gameTitle: "Game 2",
                            studioName: "Studio Name",
                            batch: "X",
                            screenshotRefs: [
                                "/highway-core-1.png",
                                "/highway-core-1.png",
                                "/highway-core-3.png",
                            ],
                            itchIoLink: "https://bgdc.itch.io/",
                        },
                        {
                            gameTitle: "Game 3",
                            studioName: "Studio Name 3",
                            batch: "X",
                            screenshotRefs: [
                                "/highway-core-1.png",
                                "/highway-core-1.png",
                                "/highway-core-3.png",
                            ],
                            itchIoLink: "https://bgdc.itch.io/",
                        },
                    ].map((element, i, arr) => (
                        <>
                            <div
                                key={`${element.gameTitle}-${element.studioName}`}
                                className="flex flex-col items-center gap-3"
                            >
                                <div>
                                    <Typography variant="h3" className="text-center font-serif">
                                        {element.gameTitle}
                                    </Typography>
                                    <Typography variant="small">{`${element.studioName} | Batch ${element.batch}`}</Typography>
                                </div>
                                <Carousel
                                    className="rounded-xl"
                                    autoplayDelay={8000 + i * 1000}
                                    autoplay
                                    loop
                                >
                                    {element.screenshotRefs.map((ssRef, i) => (
                                        <img
                                            key={i}
                                            src={ssRef}
                                            alt="image 1"
                                            className="h-full w-full object-cover"
                                            width={250}
                                            height={235}
                                        />
                                    ))}
                                </Carousel>
                                <a href={element.itchIoLink}>
                                    <Button className="my-2" color="cyan">
                                        Try on Itch.io
                                    </Button>
                                </a>
                            </div>
                            {i === arr.length - 1 ? (
                                <></>
                            ) : (
                                <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 md:my-10" />
                            )}
                        </>
                    ))}
                    <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 md:my-10" />
                    <a href="https://bgdc.itch.io/">
                        <Button color="orange">Check Out All BGDC Games</Button>
                    </a>
                </div>
                <div
                    id="jam-buddies"
                    className="flex flex-col items-center bg-magenta px-5 py-16"
                ></div>
            </main>
        </>
    )
}
