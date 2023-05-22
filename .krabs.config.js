module.exports = {
    tenants: [
      {
        name: 'scripts',
        domains: [
          {
            development: 'scripts.personal-fgl1juy8z-0w9.vercel.app', // Regex supported!
            stage: 'scripts.personal-fgl1juy8z-0w9.vercel.app',
            production: 'website-1.com',
          },
        ],
      },
      {
        name: 'portfolios',
        domains: [
          {
            development: 'personal-fgl1juy8z-0w9.vercel.app',
            stage: 'personal-fgl1juy8z-0w9.vercel.app',
            production: 'personal-fgl1juy8z-0w9.vercel.app'
          },
        ],
      },
    ],
  };