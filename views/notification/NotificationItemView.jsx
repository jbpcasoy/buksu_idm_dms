import moment from "moment";
import Link from "next/link";

export default function NotificationItemView({
  href,
  imgSrc,
  icon,
  time,
  children,
}) {
  return (
    <Link
      href={href}
      className='flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700'
    >
      <div className='flex-shrink-0'>
        <img className='rounded-full w-11 h-11' src={imgSrc} />
        {icon}
      </div>
      <div className='w-full pl-3'>
        <div className='text-gray-500 text-sm mb-1.5 dark:text-gray-400'>
          {children}
        </div>
        <div className='text-xs text-blue-600 dark:text-blue-500'>
          {moment(time).fromNow()}
        </div>
      </div>
    </Link>
  );
}
