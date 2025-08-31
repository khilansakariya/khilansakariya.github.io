'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons';

interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

export function Breadcrumbs() {
  const pathname = usePathname();
  
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const paths = pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', href: '/' }
    ];

    if (paths.length === 0) {
      return breadcrumbs;
    }

    let currentPath = '';
    paths.forEach((path, index) => {
      currentPath += `/${path}`;
      
      // Convert path to readable label
      const label = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
      
      breadcrumbs.push({
        label,
        href: currentPath,
        current: index === paths.length - 1
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't show breadcrumbs on home page
  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="py-4 px-6 bg-navy-800/50 border-b border-navy-700">
      <ol className="flex items-center space-x-2 text-sm">
        {breadcrumbs.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && (
              <FontAwesomeIcon 
                icon={faChevronRight} 
                className="mx-2 text-navy-400 text-xs" 
              />
            )}
            
            {item.current ? (
              <span 
                className="text-green-400 font-medium"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-navy-300 hover:text-green-400 transition-colors duration-200 flex items-center"
              >
                {index === 0 && (
                  <FontAwesomeIcon icon={faHome} className="mr-1 text-xs" />
                )}
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
} 