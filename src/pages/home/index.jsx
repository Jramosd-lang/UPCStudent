import NavBar  from "../../components/navbar/Index";
import Header  from "../../components/header/Index";
import { gsap } from "gsap";


function Home(){


    return(
        <>
            <NavBar/>
            <Header/>
            <section className="flex flex-col gap-8 text-xl font-[700] text-[#ffffff80] h-screen w-full justify-center items-left pl-62 bg-[#00000080]">
                <h1 id="hero-title" className="bg-[#64d17124] w-fit py-2 px-4 border-1 border-[#64d171] rounded-3xl">Bienvenido a <span className="text-[#64d171]">UPCStudent</span> </h1>
                <p id="hero-subtitle" className="w-[30ch] text-3xl">Tu pagina para <span className="text-[#64d171]">conectar</span> con otros estudiantes de la <span className="text-[#64d171]">UPC</span> y
                tu aliado de confianza</p>
                <button className="bg-[#e61e1ee1] text-[#ffffff] w-52 py-2 px-4 rounded-3xl">Fase BETA</button>
            </section>
        </>
    );
}

export default Home