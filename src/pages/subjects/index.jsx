
import {Routes} from '../../routes/index';
import { useLocation } from "react-router-dom";
import  {X,Heart,RefreshCw, Plus} from "lucide-react";
import { useState } from "react";
import {Carrers} from "../../lists/carrers.js"
import CustomListBox from "../../components/customListBox/index.jsx";
import ListOfSubjects from '../../components/listOfSubjects/index.jsx';


export default function Subjects() {
    const faculties = Carrers.map(Carrers => Carrers.name);
    const [faculty, setFaculty] = useState();
    const [programs, setPrograms] = useState([]);
    const location = useLocation();
    const isMaterias = location.pathname === Routes[1].path;
    const [windowInfo, setWindowInfo] = useState(true);

    const handleClose = () => {
      setWindowInfo(false);
    }

    const handleFaculty = (value) => {
      setFaculty(value);
      handleFilterPrograms(value);
    }

    const handleFilterPrograms = (faculty) => {
      const filteredPrograms = Carrers.filter(carrers => carrers.name === faculty).map(item => item.programs).flat();
      setPrograms(filteredPrograms);
      console.log(filteredPrograms);
    }
  return (
    <>

      <div className="flex flex-col items-center py-18 h-screen w-screen">
        <div className="w-full h-18 pl-21 py-8 font-semibold text-[#b3b3b6] border-b-2 border-[#00000030] flex items-center justify-start">
            <h1 >{isMaterias? "Materias" : ""}</h1>
        </div>
        <div className="flex flex-col py-10 gap-12 items-center justify-center w-full h-auto">
          <div className={`flex relative py-4 px-10 select-none rounded-2xl border-2 border-[#ffffff30] items-start bg-[#6d7119a3] w-[80%] ${windowInfo ? "" :"hidden" } `}>
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
          <div className='w-[80%] h-fit flex flex-col gap-5 rounded-4xl bg-[#00000025] py-12 text-[#888889] items-center justify-center'>
            <div className='flex w-full items-center justify-center text-[#888889]'>
                <input type="text" className='w-[90%] select-none hover:outline-1 hover:outline-[#ffffff30] bg-[#0e0e10] py-5 px-5 rounded-2xl' placeholder='Buscar por codigo o nombre...' />
            </div>
            <div className='flex items-center justify-start w-[90%] gap-3 mb-5 nowrap'>
              <div className='py-2 px-4 flex items-center justify-center bg-[#0e0e10] rounded-md select-none gap-2' ><Heart className='w-5 h-5 text-[#888889]' />Materias favoritas</div>
              <div className='py-2 px-4 flex items-center justify-center bg-[#0e0e10] rounded-md select-none gap-2 mr-auto'><RefreshCw className='w-5 h-5 text-[#888889]' /> Remover filtros</div>
              <button style={{ filter: "drop-shadow(0 0 6px #006d49)" }} className='py-2 px-4 flex font-semibold text-white items-center justify-center bg-[#006d49] rounded-md drop-shadow-lg drop-shadow-[#006d49] select-none gap-2'><Plus className='w-5 h-5 text-white' /> Aplicar filtros</button>
            </div>
            <div className='flex items-center justify-between w-[90%]'>

              <div className='flex gap-2'>
                <label htmlFor="Facultad" className="select-none">Facultad:</label>
                <div className='w-60 '>
                  <CustomListBox
                  options={faculties}
                  placeholder="Selecciona una facultad"
                  disabled={false}
                  onChange={handleFaculty}
                />
                </div>
              </div>
              <div className='flex gap-4'>
                  <label htmlFor="Programa" className='select-none'>Programa: </label>
                  <div className='w-60'>
                    <CustomListBox
                    options={programs}
                    placeholder='Seleccione un programa'
                    disabled={false}
                    />
                  </div>
              </div>
              <div className='flex gap-2'>
                <label htmlFor="Materia" className='select-none'>Semestre: </label>
                <div className='w-60'>
                  <CustomListBox
                    options={[1,2,3,4,5,6,7,8,9,10]}
                    placeholder='Seleccione una semestre'
                    disabled={false}
                  />
                </div>
              </div>
            </div>
          </div>

            <ListOfSubjects />

        </div>
      </div>
    </>
  );
}
