import React, {useState} from 'react'

const skills = [
  { id: 'linux', title: 'Linux', cmd: 'uname -a; lsb_release -a; df -h' },
  { id: 'shell', title: 'Shell scripting', cmd: 'bash scripts/linux-check.sh' },
  { id: 'docker', title: 'Docker', cmd: 'docker build -t devops-showcase . && docker run --rm -p 8080:80 devops-showcase' },
  { id: 'k8s', title: 'Kubernetes', cmd: 'kubectl apply -f k8s/' },
  { id: 'github', title: 'GitHub Actions', cmd: 'See .github/workflows/ci.yml for CI/CD pipeline' },
  { id: 'aws', title: 'AWS', cmd: 'Use GitHub Actions to deploy to S3/ECR with secrets' },
]

function Navbar(){
  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-sky-500 rounded flex items-center justify-center text-white font-bold">D</div>
          <h1 className="text-lg font-semibold">DevOps Showcase</h1>
        </div>
        <nav className="space-x-4 text-sm text-slate-600">
          <a className="hover:text-sky-600" href="#">Home</a>
          <a className="hover:text-sky-600" href="#">Docs</a>
          <a className="hover:text-sky-600" href="#">Repo</a>
        </nav>
      </div>
    </header>
  )
}

function Footer(){
  return (
    <footer className="bg-white border-t mt-8">
      <div className="max-w-6xl mx-auto px-6 py-4 text-sm text-slate-500 flex items-center justify-between">
        <div>© {new Date().getFullYear()} Made with ❤️ by Ayesha Azad! </div>
        <div className="space-x-4">
          <a className="hover:text-sky-600" href="#">Privacy</a>
          <a className="hover:text-sky-600" href="#">License</a>
        </div>
      </div>
    </footer>
  )
}

export default function App(){
  const [active, setActive] = useState(skills[0])

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold mb-4">DevOps Skills</h2>
          <p className="text-sm text-slate-600 mb-6">A minimal React + Tailwind demo highlighting Linux, shell scripting, Docker, Kubernetes, GitHub Actions and AWS.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1">
              <ul>
                {skills.map(s => (
                  <li key={s.id} className={`p-2 rounded cursor-pointer mb-2 ${active.id===s.id? 'bg-sky-100': 'hover:bg-slate-50'}`} onClick={()=>setActive(s)}>
                    <strong>{s.title}</strong>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-2">
              <h3 className="font-semibold text-lg">{active.title}</h3>
              <pre className="bg-black text-green-200 p-4 rounded mt-3 whitespace-pre-wrap">{active.cmd}</pre>
              <p className="mt-3 text-sm text-slate-500">Helpful files: <span className="font-mono">scripts/</span>, <span className="font-mono">Dockerfile</span>, <span className="font-mono">k8s/</span>, <span className="font-mono">.github/workflows/ci.yml</span></p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
