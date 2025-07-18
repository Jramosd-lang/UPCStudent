import NavBar from "../../components/navbar/Index";
import Header from "../../components/header/Index";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Calendar, Coins, Wind, BookMarked, BookCheck, BookUser } from "lucide-react";

function Home() {
  const calendaryRef = useRef(null);
  const moneyIconRef = useRef(null);
  const WindIconRef = useRef(null);
  const bookCheckRef = useRef(null);
  const bookMarkedRef = useRef(null);
  const BookUserRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      calendaryRef.current,
      { y: -160, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        rotate: 34,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(calendaryRef.current, {
            rotate: 20,
            duration: 1.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        },
      }
    );

    gsap.fromTo(
      moneyIconRef.current,
      { x: -150 },
      {
        x: 100,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(moneyIconRef.current, {
            scale: 1.1,
            duration: 1.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        },
      }
    );

    gsap.fromTo(
      WindIconRef.current,
      { x: -150, opacity: 1 },
      {
        x: 0,
        opacity: 0,
        duration: 2,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      bookMarkedRef.current,
      { x: 150, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        rotate: 20,
        duration: 2,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(bookMarkedRef.current, {
            scale: 1.1,
            duration: 1.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        },
      }
    );

    gsap.fromTo(
      BookUserRef.current,
      { x: -80, y: -150 },
      {
        x: 0,
        y: 0,
        rotate: -20,
        duration: 2,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(BookUserRef.current, {
            rotate: -10,
            duration: 1.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        },
      }
    );

    gsap.fromTo(
      bookCheckRef.current,
      { x: -150, y: -100, opacity: 0 },
      {
        x: 0,
        y: 0,
        rotate: -20,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        onComplete: () => {
          const shake = () => {
            gsap.to(bookCheckRef.current, {
              x: gsap.utils.random(-8, 8),
              y: gsap.utils.random(-8, 8),
              ease: "sine.inOut",
              duration: 1,
              onComplete: shake,
            });
          };
          shake();
        },
      }
    );
  }, []);

  return (
    <>

        <Header />
        <NavBar />
        <section className="relative flex gap-8 text-xl font-[700] dark:text-[#ffffff80] h-screen w-full justify-start items-center pl-[15%] dark:bg-[#00000080]">
            <div ref={calendaryRef} className="absolute top-[20%] left-[50%] z-[-1]">
                <Calendar className="text-[#45454d] max-md:w-30 max-lg:h-30 w-35 h-35" />
            </div>
            <div ref={moneyIconRef} className="absolute top-[70%] left-[44%] z-[-1]">
                <Coins className="text-[#45454d] max-lg:w-30 max-lg:h-30 w-35 h-35" />
            </div>
            <div ref={WindIconRef} className="absolute top-[70%] left-[35%] z-[-1]">
                <Wind className="text-[#45454d] rotate-180 max-lg:w-30 max-lg:h-30 w-40 h-40" />
            </div>
            <div ref={bookCheckRef} className="absolute top-[15%] left-[4%] z-[-1]">
                <BookCheck className="text-[#45454d] max-lg:w-30 max-lg:h-30 w-40 h-40" />
            </div>
            <div ref={bookMarkedRef} className="absolute top-[72%] left-[33%] z-[-1]">
                <BookMarked className="text-[#45454d] max-lg:w-30 max-lg:h-30 w-40 h-40" />
            </div>
            <div ref={BookUserRef} className="absolute top-[67%] left-[3rem] z-[-1]">
                <BookUser className="text-[#45454d] max-lg:w-30 max-lg:h-30 w-40 h-40" />   
            </div>

            <div className="flex flex-col gap-4 w-[60%] select-none">
                <h1 className="bg-[#64d17124] w-fit py-2 px-4 border border-[#64d171] rounded-3xl">
                Bienvenido a <span className="text-[#64d171]">UPCStudent</span>
                </h1>
                <p className="w-[30ch] max-w-[100%] text-[#45454d] text-3xl">
                    Tu página para <span className=" text-[#64d171]">conectar</span> con otros estudiantes de la <span className="text-[#64d171]">UPC</span> y tu aliado de confianza
                </p>
                <button className="bg-[#36f04f] text-white w-52 py-2 px-4 border-2 rounded-3xl">
                    Fase BETA
                </button>
            </div>
            <div className="flex flex-col items-center max-lg:hidden justify-center gap-4 h-full w-[40%] dark:bg-[#0d0d0e]">
                
  
            </div>
        </section>

    </>
  );
}

export default Home;
