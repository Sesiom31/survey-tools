import { Header } from '@/features/mainPage/Header';
import { MainPage } from '@/pages/MainPage';

export const App = () => {
  return (
    <div className="w-screen h-dvh bg-main font-toroka">
      <div className="w-full h-full">
        <Header />
        <MainPage />
      </div>
    </div>
  );
};
