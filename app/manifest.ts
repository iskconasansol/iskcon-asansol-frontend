import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Iskcon Project',
    short_name: 'Iskcon Project',
    description:
      'Iskcon Project is an initiate of Iskcon Asansol. It is a non-profit organization. It is a project to spread the teachings of Lord Krishna and Srila Prabhupada.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
    
  };
}
