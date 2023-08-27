import { ArrowsPointingInIcon, ChevronDownIcon } from "@heroicons/react/24/solid"
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
import BgdcFooter from "~/components/BGDCFooter"
import BgdcNav from "~/components/BGDCNav"

export default function Faq() {
    const [aboutOpen, setAboutOpen] = useState(false)
    const [registrationOpen, setRegistrationOpen] = useState(false)
    const [classOpen, setClassOpen] = useState(false)

    return (
        <>
            <BgdcNav />
            <main className="flex min-h-screen flex-col items-center bg-magenta 2xl:min-h-[1200px]">
                <div id="content" className="relative mt-16 h-full w-full max-w-[1920px] px-5">
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
                    <div id="faq" className="mx-auto w-full max-w-4xl py-6">
                        <Accordion open={aboutOpen}>
                            <AccordionHeader className="" onClick={() => setAboutOpen(!aboutOpen)}>
                                <div className="flex w-full flex-row justify-between">
                                    <Typography variant="h2" color="white">
                                        Tentang BGDC
                                    </Typography>
                                    <ChevronDownIcon
                                        className="h-12 w-12"
                                        color="white"
                                        style={{
                                            transform: `rotate(${aboutOpen ? 180 : 0}deg)`,
                                            transition: "transform 0.2s",
                                        }}
                                    />
                                </div>
                            </AccordionHeader>
                            <AccordionBody>
                                <Card className="bg-purple-90 p-5">
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Apa itu BGDC?
                                    </Typography>
                                    <Typography
                                        variant="paragraph"
                                        color="white"
                                    >{`BINUS Game Development Club merupakan organisasi kemahasiswaan BINUS yang bergerak dalam memberikan pembelajaran dan aktivitas kepada mahasiswa BINUS untuk mengembangkan game. BGDC memiliki komunitas aktif di server Discord yang menjadi pusat interaksi para anggota. Berbagai channel tersedia di server Discord BGDC untuk membahas berbagai topik menarik, mulai dari dunia game, anime, 2D/3D art dan design, musik, event-event BGDC, serta informasi penting seputar BINUS dan perkuliahan.`}</Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Apakah BGDC itu gaming club?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        {" "}
                                        <strong className="font-semibold">BUKAN.</strong> BGDC
                                        merupakan organisasi kemahasiswaan yang fokus pada
                                        pembelajaran dan pengembangan game, bukan kegiatan gaming
                                        itu sendiri.{" "}
                                        <strong className="font-semibold">Meskipun begitu,</strong>{" "}
                                        kami mempunyai subkomunitas gaming yang aktif serta sering
                                        mengadakan gathering <i>gametime</i> untuk member.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        BGDC membuka cabang di kampus mana saja?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        BGDC terbuka di setiap cabang, namun cabang terbesar kami
                                        ada di Kemanggisan, Alam Sutera, dan Bandung.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        BGDC aktif di platform mana saja?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        BGDC paling aktif di server Discord BGDC, kemudian di
                                        platform lain seperti Instagram, Twitter, YouTube, dan
                                        itch.io (wadah publikasi game BGDC).
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Jika saya sudah berpengalaman dalam game development, apa
                                        yang BGDC bisa tawarkan untuk saya?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Jika kalian sudah memiliki pengalaman dalam game
                                        development, BGDC memiliki penawaran yang menarik untuk
                                        kalian. Bergabunglah dengan Talent Group dan Jam Buddies
                                        untuk bertemu dengan rekan-rekan sesama game developer. Di
                                        sini, kalian dapat menerapkan dan menguji ilmu serta
                                        pengalaman kalian dalam praktik game development yang nyata.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Apakah BGDC terbuka untuk member baru yang tidak memiliki
                                        pengalaman di bidang game development?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Tentu saja, BGDC sangat terbuka untuk member baru, bahkan
                                        yang belum memiliki pengalaman dalam game development. Kami
                                        menyambut binusian yang ingin mempelajari ilmu game
                                        development melalui kelas-kelas yang BGDC sediakan. Ini
                                        adalah kesempatan bagus bagi kalian untuk belajar dan
                                        mengembangkan diri dalam dunia Game Development bersama
                                        BGDC.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Apakah bisa mendapatkan SAT dan comserv jika bergabung
                                        dengan BGDC?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Jika kalian mengikuti kegiatan BGDC, maka kalian
                                        berkesempatan untuk mendapatkan SAT ataupun comserv.
                                    </Typography>
                                </Card>
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={registrationOpen}>
                            <AccordionHeader onClick={() => setRegistrationOpen(!registrationOpen)}>
                                <div className="flex w-full flex-row justify-between">
                                    <Typography variant="h2" color="white">
                                        Registrasi
                                    </Typography>
                                    <ChevronDownIcon
                                        className="h-12 w-12"
                                        color="white"
                                        style={{
                                            transform: `rotate(${registrationOpen ? 180 : 0}deg)`,
                                            transition: "transform 0.2s",
                                        }}
                                    />
                                </div>
                            </AccordionHeader>
                            <AccordionBody>
                                <Card className="bg-purple-90 p-5">
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Berapa biaya pendaftaran member BGDC?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Biaya pendaftaran member BGDC adalah sebesar 100 ribu
                                        rupiah.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Apakah binus online learning diperbolehkan untuk mendaftar?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Iya. Binus online learning dapat mendaftar menjadi member
                                        BGDC.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Apakah alumni BINUS diperbolehkan untuk mendaftar?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Tidak. Alumni secara resmi sudah lulus dari Binus dan
                                        pendaftaran tidak terbuka untuk mahasiswa yang telah lulus.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Apakah alumni BINUS diperbolehkan untuk mengikuti kegiatan
                                        BGDC?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Apabila alumni merupakan anggota BGDC, maka alumni
                                        diperbolehkan untuk tetap aktif dalam acara dan discord
                                        server BGDC.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Apakah pendaftaran BGDC hanya terbuka untuk jurusan
                                        tertentu?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Tidak. Semua jurusan dapat mendaftar menjadi member BGDC.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Jika sudah bergabung dengan UKM lain atau himpunan, apakah
                                        tetap diperbolehkan untuk mendaftar menjadi member BGDC?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Iya, pendaftaran tetap dapat dilakukan meskipun telah
                                        bergabung dengan UKM lain atau himpunan.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Apakah diperbolehkan untuk meninggalkan BGDC setelah
                                        mendaftar?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Secara resmi, anggota UKM tidak dapat keluar dari UKM.
                                        Namun, jika ada member yang ingin keluar dari BGDC, member
                                        diperbolehkan untuk keluar dari server discord BGDC.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Apakah uang pendaftaran akan dikembalikan jika meninggalkan
                                        BGDC?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Tidak. Jika ada member yang keluar dari BGDC, maka uang
                                        pendaftaran tidak dapat dikembalikan.
                                    </Typography>
                                </Card>
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={classOpen}>
                            <AccordionHeader onClick={() => setClassOpen(!classOpen)}>
                                <div className="flex w-full flex-row justify-between">
                                    <Typography variant="h2" color="white">
                                        Kelas
                                    </Typography>
                                    <ChevronDownIcon
                                        className="h-12 w-12"
                                        color="white"
                                        style={{
                                            transform: `rotate(${classOpen ? 180 : 0}deg)`,
                                            transition: "transform 0.2s",
                                        }}
                                    />
                                </div>
                            </AccordionHeader>
                            <AccordionBody>
                                <Card className="bg-purple-90 p-5">
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Berapa besar biaya yang diperlukan untuk bergabung dengan
                                        kelas BGDC?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Biaya kelas BGDC adalah sebesar Rp50.000,-.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Apakah biaya kelas sudah termasuk seluruh kelas?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Iya. Jika kalian telah membayar uang kelas, maka kalian akan
                                        mendapatkan akses untuk seluruh kelas dan rekaman kelas
                                        melalui server Discord BGDC.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Apakah kelas BGDC akan diadakan secara online atau onsite?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Untuk saat ini, kelas BGDC akan diadakan secara online
                                        melalui server Discord BGDC.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Kapan kelas BGDC akan dimulai?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Kelas BGDC akan dimulai dari awal semester baru, dan
                                        penentuan jadwal akan disesuaikan dengan jadwal para member
                                        BGDC.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Apakah semua kelas BGDC wajib diikuti?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Tidak. Kalian bisa mengikuti kelas yang sesuai dengan minat
                                        kalian.
                                    </Typography>
                                </Card>
                            </AccordionBody>
                        </Accordion>
                    </div>
                </div>
            </main>
            <BgdcFooter />
        </>
    )
}
