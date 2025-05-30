import { cn } from '@/lib/utils'
import { MouseEventHandler } from 'react'

interface IconButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    icon: React.ReactElement;
    className?: string;
}

const IconButton: React.FC<IconButtonProps> = ( {
    className,
    icon,
    onClick
}) => {
  return (
    <button onClick={onClick}
    className={cn(`rounded-full felx justify-center items-center bg-white shadow-md p-2 hover:scale-110 transition`, className)}
    >
        {icon}
    </button>
  )
}

export default IconButton