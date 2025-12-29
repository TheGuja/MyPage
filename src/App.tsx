function App() {
  const personal_project_links: NavLink[] = [
    {name: 'DearSoup', href: 'https://github.com/TheGuja/Dear-Soup', summary: 'A collaborative journaling app'},
    {name: 'Movie Recommender Systems', href: 'https://github.com/TheGuja/Movie-Recommender-Systems', summary: 'Developed using collaborative fitlering techniques as well as neural network matrix factorization to recommend movies based on user preferences'},
    {name: 'Marching Band Score Tracker', href: 'https://github.com/TheGuja/Score-Tracker-Website', summary: 'A centralized source of marching band scores across the United States'},
  ]

  const other_project_links: NavLink[] = [
    {name: 'ReciSearch', href: 'https://github.com/TheGuja/Recisearch', summary: 'Contributed to the development of a recipe search engine based on several factors, including ingredients, allergies, and more'},
    {name: 'Python Coding Assistant', href: 'https://github.com/TheGuja/383Project---Python-Coding-Assistant', summary: 'Contributed to the developoment of a Python Coding Assistant utilizing OpenAI APi'}, 
    {name: 'UMass Showdown', href: 'https://github.com/TheGuja/UMassShowdown', summary: 'Contributed to a hackathon project with mechanics similar to Pokemon games but with UMass professors'},
  ]

  return (
    <div className='min-h-screen bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950 text-stone-100'>
      {/* Header */}
      <header className='sticky top-0 z-50 backdrop-blur-md bg-stone-950/80 border-b border-stone-800'>
        <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
          <h2 className='text-xl font-semibold text-emerald-400'>Eric Gu</h2>
          <nav className='flex gap-8'>
            <a href='#about' className='text-stone-300 hover:text-emerald-400'>About</a>
            <a href='#projects' className='text-stone-300 hover:text-emerald-400'>Projects</a>
          </nav>
        </div>
      </header>

      <main className='max-w-6xl mx-auto px-6'>
        <section className='py-20 text-center'>
          <h1 className='text-6xl font-bold mb-4 text-emerald-400'>Welcome</h1>
        </section>

        <section id='about' className='py-16 mb-16'>
          <div className='bg-stone-900/50 border border-stone-800 rounded-lg p-8 backdrop-blur'>
            <h2 className='text-3xl font-semibold mb-6 text-emerald-400'>About Me</h2>
            <p className='text-lg text-stone-300 leading-relaxed mb-4'>
              Hi! My name is Eric Gu. I am currently a junior studying computer science and applied mathematics at the University of Massachusetts Amherst. I have taken a broad range of courses at UMass Amherst, from software engineering and databases to artificial intelligence and natural language processing, as well as graduate courses in algorithms and machine learning. My interests lie in developing web applications, both frontend and backend, as well as developing machine learning models to predict future trends in uncertain environments. I am always looking to learn new skills through personal projects, classes, and my peers.
            </p>
          </div>
        </section>

        <section id='projects' className='py-16 mb-20'>
          <h2 className='text-3xl font-semibold mb-12 text-emerald-400'>Personal Projects</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
            {personal_project_links.map((link: NavLink) => (
              <a
                key={link.href}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                className='group bg-stone-900/50 border border-stone-800 rounded-lg p-6 hover:border-emerald-400 hover:bg-stone-900/80 transition-all duration-300'
              >
                <h3 className='text-lg font-semibold text-emerald-400 mb-2 group-hover:text-cyan-400'>{link.name}</h3>
                <p className='text-sm text-stone-400 leading-relaxed'>{link.summary}</p>
              </a>
            ))}
          </div>

          <h2 className='text-3xl font-semibold mb-12 text-emerald-400'>Collaborative Projects</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='bg-stone-900/50 border border-stone-800 rounded-lg p-6 hover:border-emerald-400 hover:bg-stone-900/80 transition-all duration-300'>
              <h3 className='text-lg font-semibold text-emerald-400 mb-2'>StackOverflow Question Tagging</h3>
              <p className='text-sm text-stone-400 leading-relaxed'>Contributed to the development of automatic programming language detection and topic tag identification of StackOverflow questions through traditional machine learning models - decision trees, support vector machines, neural networks - as well as small language models - QWen2.5.</p>
            </div>
            {other_project_links.map((link: NavLink) => (
              <a
                key={link.href}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                className='group bg-stone-900/50 border border-stone-800 rounded-lg p-6 hover:border-emerald-400 hover:bg-stone-900/80 transition-all duration-300'
              >
                <h3 className='text-lg font-semibold text-emerald-400 mb-2 group-hover:text-cyan-400'>{link.name}</h3>
                <p className='text-sm text-stone-400 leading-relaxed'>{link.summary}</p>
              </a>
            ))}
          </div>
        </section>

        <footer className='border-t border-stone-800 py-8 text-center text-stone-500'>
          <p>© 2025 Eric Gu. All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}

export default App