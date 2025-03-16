# My Personal Website

This is my personal website built with Next.js and styled with Tailwind CSS. It serves as my portfolio, blog (hopefully), and a place to showcase my projects and skills. 

# Tech Stack
- Frontend: Next.js, React, Tailwind CSS
- Deployment: Vercel 

# What About the Backend? 
Next.js is a full-stack React framework, meaning it comes with both frontend and backend capabilities out of the box. It allows for server-side rendering (SSR), API routes, and backend logic all within the same project, without needing a separate backend service. This is what makes Next.js so cool!

Initially, I stored my blog posts in Google Firestore, fetching them dynamically. However, I decided to remove the database dependency–and thus, the backend aspect of Next.js—and instead store my blog data directly in the codebase. This backend logic was removed around commit `1af0e57`, where I deleted the `/pages/api` directory that previously handled dynamic fetching. Since I don’t have that many blog posts yet, I thought it made more sense to serve everything at once rather than making extra requests to an external database.

Some might argue this is a bad approach because every time I want to add a blog post, I have to redeploy the entire app. However, this is very easy with modern hosting platforms like Vercel, where all I need to do is push to the main branch, and the app is automatically redeployed since it’s connected to GitHub.

That said, if my blog grows, I might reconsider using a database again for better scalability.