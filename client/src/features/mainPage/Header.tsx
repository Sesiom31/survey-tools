import { LogoSurvey } from '@/features/mainPage/LogoSurvey';
import clsx from 'clsx';

export const Header = () => {
  return (
    <header className=" w-full h-14 bg-dark">
      <div className="w-full h-full px-4  flex  items-center">
        <div className=" h-full aspect-[4/1] py-3">
          <LogoSurvey
            className="w-full h-full font-semibold"
            textColor="orange"
            iconColor="cyan"
          />
        </div>
        <div className=" ml-4 w-auto h-full flex text-white">
          <ul className="flex items-center w-auto h-full">
            <li
              className={clsx(
                ' text-sm h-full w-24 p-2 flex justify-center items-center',
                ' hover:bg-red-500'
              )}
            >
              Nivelación
            </li>
            <li
              className={clsx(
                ' text-sm h-full w-24 p-2 flex justify-center items-center',
                ' hover:bg-red-500'
              )}
            >
              Poligonales
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
