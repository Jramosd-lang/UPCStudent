import { Search, User, Menu, Home } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed flex top-0 left-0 w-[100%] text-[#00000063] dark:bg-gradient-to-r dark:from-[#1e1e22] dark:to-[#232227] dark:text-white h-18 text-center bg-gradient-to-r from-[#ffffff90] backdrop-blur-2xl to-[#eff0ef] border-b-2 border-[#00000030] px-4 z-50">
        <div className="flex items-center min-xl:w-[15%] max-sm:flex-col">
            <div className="flex items-center text-transparent bg-[#00000014] hover:bg-[#00000040] min-xl:hover:w-35 min-xl:hover:text-white justify-end relative transition-all duration-300  max-lg:mr-5 h-15 w-15 rounded-4xl gap-2 pl-0 my-auto mr-auto">
                <img src="/logo.png" alt="Logo" className="h-full w-15 p-2 object-contain absolute left-0" /> 
                <h1 className="flex pr-[10%] gap-1"> <Home color="currentColor"/>Inicio</h1>
            </div>
        </div>
        <div className="max-lg:hidden flex text-12 selection-none dark:text-[#ffffff80] font-[600] mx-auto max-md: text-center h-[100%] lg:gap-5 xl:gap-18 w-[35%] items-center justify-center ">
            <a href="" className="rounded-4xl select-none p-2 hover:bg-[#00000032] hover:px-10 transition-all duration-300"><h1>Materias</h1></a>
            <a href="" className="rounded-4xl select-none p-2 hover:bg-[#00000032] hover:px-10 transition-all duration-300"><h1>Emprendimientos</h1></a>
            <a href="" className="rounded-4xl select-none p-2 hover:bg-[#00000032] hover:px-10 transition-all duration-300"><h1>Libros</h1></a>
        </div>
        <div className="flex items-center py-auto mr-auto justify-center min-w-fit ">
            <input type="text" className="bg-[#ffffff] dark:bg-transparent dark:border-white w-[30vh] max-sm:w-[30vw] hover:border-[#00000080] border-l-2 border-t-2 border-b-2 border-r-2 border-[#bfbfbf] pl-8 text-gray-700 
            rounded-bl-2xl rounded-tl-2xl h-[32px] dark:hover:border-[#ffffff70] focus:outline-0 focus:border-2 focus:border-[#00000080] dark:text-white transition-all duration-300"/>
            <div className="bg-[#fff] pl-2 content-center dark:bg-transparent dark:border-white dark:text-white h-[32px] rounded-r-2xl px-3 border-r-2 border-t-2 border-b-2 border-[#bfbfbf] text-gray-700">
                <Search color="currentColor"/>
            </div>
        </div>

        <div className="flex items-center  pl-5 justify-center  gap-5">
            <button className="bg-[#6abf5b] font-semibold max-sm:hidden text-white dark:text-[#232227] hover:bg-[#60a969] transition-all duration-300 rounded-full py-2 px-4
            ]">
                <h1>Iniciar Sesión</h1>
            </button>
            <div className="flex items-center justify-center dark:text-[#232227] dark:bg-[#ffffff60] rounded-full py-2 w-12 h-12 ">
                <User color="currentColor" height={40} width={40}/>
            </div>
        </div>      

    </header>
  );
}

