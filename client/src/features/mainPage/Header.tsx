import { LogoSurvey } from '@/features/mainPage/LogoSurvey';
import clsx from 'clsx';

export const Header = () => {
  return (
    <header className={clsx(' w-full h-16 bg-dark', 'landscape:h-13')}>
      <div className="w-full h-full px-3  flex  items-center justify-between">
        <figure className={clsx(' h-full w-auto py-3', 'landscape:py-1')}>
          <LogoSurvey
            className="h-full  font-medium aspect[3/1] font-toroka"
            textColor="#F8CB2E"
            iconColor="#F8CB2E"
            fontSizeText="2rem"
          />
        </figure>

        <div className=" w-auto h-full flex items-center justify-start text-white">
          <ul className="flex items-center w-auto h-full">
            <li
              className={clsx(
                ' text-sm h-full w-24 p-1 flex justify-center items-center',
                ' hover:bg-red-500 hover:underline hover:underline-offset-4',
                'landscape:w-32 landscape:text-base'
              )}
            >
              Nivelación
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
