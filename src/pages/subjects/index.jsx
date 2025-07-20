
import {Routes} from '../../routes/index';
import { useLocation } from "react-router-dom";
import  {X} from "lucide-react";
import { useState } from "react";

export default function Subjects() {
    const location = useLocation();
    const isMaterias = location.pathname === Routes[1].path;
    const [windowInfo, setWindowInfo] = useState(true);

    const handleClose = () => {
      setWindowInfo(false);
    }


  return (
    <>

      <div className="flex flex-col items-center py-18 h-screen w-screen">
        <div className="w-full h-18 pl-21 font-semibold text-[#b3b3b6] border-b-2 border-[#00000030] flex items-center justify-start">
            <h1 >{isMaterias? "Materias" : ""}</h1>
        </div>
        <div className="flex flex-col py-10 gap-20 items-center justify-center w-full h-auto">
          <div className={`flex relative py-4 px-10 rounded-2xl border-2 border-[#ffffff30] items-start bg-[#00000025] w-[80%] ${windowInfo ? "" :"hidden" } `}>
            <p className="text-[#919191]"> En la seccion de materias podrás ver y realizar recomendaciones, proponer
               estrategias o tecnicas de estudio para cada materia. Pero no solo eso, tambien puedes incluir recomendaciones
              tanto de  grupos como de docentes o horarios para rendir las materias. Te invitamos a obtener informacion sobre
              tus materias mas importantes para conseguir mejores resultados.
            </p>
            <div>
              <X 
              className='absolute cursor-pointer top-2 text-[#414143] right-2'
              onClick={handleClose}
              />
            </div>
          </div>
          <div className='w-[80%] h-fit flex gap-4 text-[#919191] items-start justify-start'>
            <label htmlFor="Facultad">Facultad:</label>
            <select list='' className='bg-[#ffffff10] border-2 border-[#ffffff30] rounded-lg px-4'>
              <option value="Ingenieria">Ingenieria</option>
              <option value="Arquitectura">Arquitectura</option>
              <option value="Ciencias">Ciencias</option>
              <option value="Ciencias de la Salud">Ciencias de la Salud</option>
              <option value="Ciencias Sociales">Ciencias Sociales</option>
            </select>

            <input type="text" className='bg-[#ffffff10] border-2 border-[#ffffff30] rounded-lg px-4' />
          </div>
        </div>
      </div>
    </>
  );
}
