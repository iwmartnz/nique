import Link from 'next/link';
import { menu } from '@/app/data';
import { cn } from '@/lib/utils';

type MenuBarProps = {
    className?: string;
};

export default function Menubar({ className }: MenuBarProps) {
    return (
        <nav className={cn('flex items-center gap-4', className)}>
            {menu.map((item) => (
                <Link key={item.id} href={`#${item.slug}`}>
                    {item.category}
                </Link>
            ))}
        </nav>
    );
}
