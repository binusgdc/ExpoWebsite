import { ArrowsPointingInIcon } from "@heroicons/react/24/solid"
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Typography,
    Card,
} from "@material-tailwind/react"
import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import BgdcNav from "~/components/BGDCNav"

export default function Faq() {
    const [aboutOpen, setAboutOpen] = useState(false)
    const [registrationOpen, setRegistrationOpen] = useState(false)
    const [classOpen, setClassOpen] = useState(false)

    return (
        <>
            <Head>
                <title>Join BGDC</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <BgdcNav />
            <main className="flex min-h-screen flex-col items-center bg-magenta 2xl:min-h-[1200px]">
                <div id="content" className="relative mt-16 h-full w-full max-w-[1920px]">
                    <Image
                        className="left-20 top-0 hidden translate-y-[100px] 2xl:absolute 2xl:block"
                        src={"/play.webp"}
                        width={518 / 2}
                        height={705 / 2}
                        alt=""
                    />
                    <Image
                        className="right-20 top-0 hidden translate-y-[300px] 2xl:absolute 2xl:block"
                        src={"/observe.webp"}
                        width={518 / 2}
                        height={705 / 2}
                        alt=""
                    />
                    <Image
                        className="left-20 top-0 hidden translate-y-[600px]  2xl:absolute 2xl:block"
                        src={"/develop.webp"}
                        width={518 / 2}
                        height={705 / 2}
                        alt=""
                    />
                    <Typography
                        variant="h1"
                        color="white"
                        className="mx-auto w-full text-center font-serif font-medium"
                    >
                        Frequently Asked Questions
                    </Typography>
                    <div id="faq" className="mx-auto w-full max-w-4xl px-16 py-6">
                        <Accordion open={aboutOpen}>
                            <AccordionHeader onClick={() => setAboutOpen(!aboutOpen)}>
                                <Typography variant="h2" color="white">
                                    Tentang BGDC
                                </Typography>
                            </AccordionHeader>
                            <AccordionBody>
                                <Card className="bg-purple-90 p-5">
                                    <Typography variant="h6" color="white">
                                        Apa itu BGDC?
                                    </Typography>
                                    <Typography
                                        variant="paragraph"
                                        color="white"
                                    >{`BINUS Game Development Club merupakan organisasi kemahasiswaan BINUS yang bergerak dalam memberikan pembelajaran dan aktivitas kepada mahasiswa BINUS untuk mengembangkan game. BGDC memiliki komunitas aktif di server Discord yang menjadi pusat interaksi para anggota. Berbagai channel tersedia di server Discord BGDC untuk membahas berbagai topik menarik, mulai dari dunia game, anime, 2D/3D art dan design, musik, event-event BGDC, serta informasi penting seputar BINUS dan perkuliahan.`}</Typography>
                                    <br />
                                    <Typography variant="h6" color="white">
                                        Apakah BGDC itu gaming club?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        {" "}
                                        <strong className="font-bold">BUKAN.</strong> BGDC merupakan
                                        organisasi kemahasiswaan yang fokus pada pembelajaran dan
                                        pengembangan game, bukan kegiatan gaming.
                                    </Typography>
                                    <br />
                                </Card>
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={registrationOpen}>
                            <AccordionHeader onClick={() => setRegistrationOpen(!registrationOpen)}>
                                <Typography variant="h2" color="white">
                                    Registrasi
                                </Typography>
                            </AccordionHeader>
                            <AccordionBody>
                                <Card className="bg-purple-90 p-5">
                                    <Typography variant="h6" color="white">
                                        Berapa biaya pendaftaran member BGDC?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Biaya pendaftaran member BGDC adalah sebesar 100 ribu
                                        rupiah.
                                    </Typography>
                                    <br />
                                    <Typography variant="h6" color="white">
                                        Apakah diperbolehkan untuk mendaftar lebih dari satu orang
                                        dengan angkatan yang berbeda?
                                    </Typography>

                                    <Typography variant="paragraph" color="white">
                                        Iya, potongan tetap berlaku.
                                    </Typography>
                                    <br />
                                </Card>
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={classOpen}>
                            <AccordionHeader onClick={() => setClassOpen(!classOpen)}>
                                <Typography variant="h2" color="white">
                                    Kelas
                                </Typography>
                            </AccordionHeader>
                            <AccordionBody>
                                <Card className="bg-purple-90 p-5">
                                    <Typography variant="h6" color="white">
                                        Berapa besar biaya yang diperlukan untuk bergabung dengan
                                        kelas BGDC?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Rp 50.000,00
                                    </Typography>
                                    <br />
                                    <Typography variant="h6" color="white">
                                        Apakah biaya sudah termasuk seluruh kelas?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Iya, kalian akan diberikan akses untuk semua kelas dan
                                        rekaman kelas.
                                    </Typography>
                                    <br />
                                </Card>
                            </AccordionBody>
                        </Accordion>
                    </div>
                </div>
            </main>
        </>
    )
}
