import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export function App() {
  const [passViw, setPassViw] = useState(true);

  function togglePassViw() {
    setPassViw(!passViw);
  }

  return (
    <div className="w-full h-screen flex justify-center items-center px-96">
      <div className="w-full h-96 bg-slate-600 flex flex-col items-center justify-center gap-14 rounded-xl">
        <h1 className="text-4xl font-semibold text-white">Mostrar senha</h1>
        <div className="w-full flex items-center justify-center">
          <input
            type={passViw ? 'password' : 'text'}
            id="password"
            placeholder="Digite sua senha..."
            className="w-[50%] h-10 border-none outline-none rounded-lg pl-2"
          />
          {passViw ? (
            <Eye
              className="absolute right-[calc(100vw-950px)] cursor-pointer text-slate-500"
              size={25}
              onClick={togglePassViw}
            />
          ) : (
            <EyeOff
              className="absolute right-[calc(100vw-950px)] cursor-pointer text-slate-500"
              size={25}
              onClick={togglePassViw}
            />
          )}
        </div>
      </div>
    </div>
  );
}
