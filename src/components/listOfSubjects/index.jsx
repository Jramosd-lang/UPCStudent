import {List,Grid3x3} from 'lucide-react';


export default function ListOfSubjects() {
    return(
        
        <div className='w-[80%] h-fit flex flex-col gap-5 rounded-4xl bg-[#00000025] py-12 text-[#888889] items-center justify-between'>
            <div className='flex items-center justify-between w-[90%]'>
              <h1 className='text-2xl font-semibold'>Materias</h1>
              <div className='flex items-center gap-2'>
                <button className='bg-[#0e0e10] rounded-md py-2 px-4 flex items-center justify-center gap-2 select-none'><List/> Lista</button>
                <button className='bg-[#0e0e10] rounded-md py-2 px-4 flex items-center justify-center gap-2 select-none'><Grid3x3/> Cuadrícula</button>
              </div>
            </div>
            <div className='w-[90%] h-fit flex flex-col gap-5'>
              {/* Aquí se mostrarían las materias filtradas */}
            </div>
          </div>
        
    );
}