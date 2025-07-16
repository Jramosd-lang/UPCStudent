import { Search, User, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed flex top-0 left-0 w-[100%] h-18 text-center bg-gradient-to-r from-white to-[#eff0ef] shadow-xl px-4 z-50">
        <div className="flex items-center min-xl:w-[15%] max-sm:flex-col">
            <div className="flex items-center bg-[#00000014] hover:bg-[#00000040] hover:w-[100%] relative transition-all duration-300  max-lg:mr-5 h-15 w-15 rounded-4xl gap-2 pl-0 my-auto mr-auto">
                <img src="/logo.png" alt="Logo" className="h-full w-15 p-2 object-contain absolute" />
                <h1 className=" h-full max-xl:hidden content-center font-semibold absolute left-15 text-white text-[20px]">ESTUDIANTES</h1>
                <div className="hidden max-lg:flex absolute top-19 w-15 h-full items-center justify-center rounded-full">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-2xl shadow-black">
                        <Menu color="#338225"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="max-lg:hidden flex text-[18px] font-[600] mx-auto max-md: text-center h-[100%] w-[35%] items-center justify-center text-[#00000063] gap-18">
            <a href="" className="rounded-4xl p-2 hover:bg-[#00000032] hover:px-10 transition-all duration-300"><h1>Materias</h1></a>
            <a href="" className="rounded-4xl p-2 hover:bg-[#00000032] hover:px-10 transition-all duration-300"><h1>Emprendimientos</h1></a>
            <a href="" className="rounded-4xl p-2 hover:bg-[#00000032] hover:px-10 transition-all duration-300"><h1>Libros</h1></a>
        </div>
        <div className="flex items-center py-auto mr-auto justify-center min-w-fit ">
            <input type="text" className="bg-[#ffffff] w-[30vh] max-sm:w-[30vw] hover:border-[#00000080] border-l-2 border-t-2 border-b-2 border-r-2 border-[#bfbfbf] pl-8 text-gray-700 
            rounded-bl-2xl rounded-tl-2xl h-[32px]  focus:outline-0 focus:border-2 focus:border-[#00000080] transition-all duration-300"/>
            <div className="bg-[#fff] pl-2 content-center h-[32px] rounded-r-2xl px-3 border-r-2 border-t-2 border-b-2 border-[#bfbfbf] text-gray-700">
                <Search color="#bfbfbf"/>
            </div>
        </div>

        <div className="flex items-center  pl-5 justify-center  gap-2">
            <button className="bg-[#74c665] max-sm:hidden text-white hover:bg-[#60a969] transition-all duration-300 rounded-full py-2 px-4
            ]">
                <h1>Iniciar Sesión</h1>
            </button>
            <div className="flex items-center justify-center rounded-full py-2 bg-gradient-to-r from-[#74c665]  to-[#79ad70] w-12 h-12 ">
                <User color="white" height={40} width={40}/>
            </div>
        </div>      

    </header>
  );
}

