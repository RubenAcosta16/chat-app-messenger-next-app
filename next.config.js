/** @type {import('next').NextConfig} */
const nextConfig = {
  // cosas del package next-superjson
    experimental: {
      appDir: true,
      swcPlugins: [["next-superjson-plugin", {}]]
    },
    images: {
      domains: [
        // creo que de dondev vienen algunas imagenes de los perfiles
        'res.cloudinary.com', 
        // de donde pueden venir las imagenes
        'avatars.githubusercontent.com',
        'lh3.googleusercontent.com'
      ]
    }
  }
  
  module.exports = nextConfig
//   hay cosas cambiadas por el package next-superjson