import {Heart, Plus} from "lucide-react";

export default function SubjectTarget({name, codeSubject, semester, faculty, program}){
    return(
        <div className="w-full h-fit flex bg-[#00000030] rounded-2xl overflow-hidden text-[#888889] select-none">
            {/* Contenedor de imagen con ancho fijo */}
            <div className="w-32 h-full flex items-center py-3 justify-center bg-[#ffffff10] flex-shrink-0">
                <img src="logo.png" className="h-16 aspect-square" alt="" />
            </div>

            {/* Contenedor principal con flex-1 para usar espacio restante */}
            <div className="py-6 px-5 flex flex-col gap-3 flex-1 min-w-0">
                {/* Primera fila con elementos que pueden contraerse */}
                <div className="flex gap-4 items-center">
                    <div className="bg-[#00000040] border rounded-md px-2 py-1 flex items-center justify-center flex-shrink-0">
                        <p className="text-sm">{codeSubject}</p>
                    </div>
                    
                    {/* Título con truncate para evitar overflow */}
                    <h1 className="font-semibold text-[#ffffff] mr-auto truncate min-w-0">
                        {name}
                    </h1>
                    
                    {/* Botones con flex-shrink-0 para mantener tamaño */}
                    <button className="flex items-center text-white px-4 py-1 gap-2 rounded-2xl bg-[#006d49] flex-shrink-0 text-sm">
                        <Plus size={16} color="white"/> Ver mas
                    </button>
                    
                    <div className="flex-shrink-0">
                        <Heart className="w-5 h-5 text-[#888889] cursor-pointer" />
                    </div>
                </div>
                
                {/* Segunda fila con texto que puede truncarse */}
                <div className="flex gap-4 text-sm flex-wrap">
                    <p className="truncate">{faculty}</p>
                    <p className="truncate">{program}</p>
                    <p className="flex-shrink-0">Semestre: {semester}</p>
                </div>
            </div>
        </div>
    );
}