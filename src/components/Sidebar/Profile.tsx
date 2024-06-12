import { LogOut } from 'lucide-react';
import { Button } from '../Form/Button';

export function Profile() {
  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <img
        src="https://github.com/rafaelsanamontevechio.png"
        alt=""
        className="h-10 w-10 rounded-full"
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Rafael S. Montevechio
        </span>
        <span className="text-sm text-zinc-500 truncate">
          rafael_sana@hotmail.com
        </span>
      </div>

      <Button type="button" variant="ghost">
        <LogOut className="w-5 h-5 text-zinc-500" />
      </Button>
    </div>
  );
}
