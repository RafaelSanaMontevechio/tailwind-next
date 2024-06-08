import { Cog, LifeBuoy, Search } from 'lucide-react';

import * as Input from '../Input';

import { Logo } from './Logo';
import { Profile } from './Profile';
import { MainNavigation } from './MainNavigation';
import { NavItem } from './MainNavigation/NavItem';
import { UserSpaceWidget } from './UserSpaceWidget';

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>

      <MainNavigation />

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>

        <UserSpaceWidget />

        <div className="h-px bg-zinc-200"></div>

        <Profile />
      </div>
    </aside>
  );
}
