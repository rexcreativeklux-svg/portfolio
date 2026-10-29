import { ArrowUpRight, Mail } from "lucide-react";

const projects = [
  { title: "Northwind Rebrand", tag: "Branding", color: "bg-amber-100" },
  { title: "Pulse Mobile App", tag: "Product design", color: "bg-sky-100" },
  { title: "Atlas Dashboard", tag: "UI / UX", color: "bg-emerald-100" },
  { title: "Bloom Packaging", tag: "Packaging", color: "bg-rose-100" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <span className="font-semibold">Maya Chen</span>
        <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 text-sm"><Mail className="h-4 w-4" /> Say hello</a>
      </header>
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-20">
        <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight">Brand & product designer helping startups look as good as they are.</h1>
        <p className="mt-6 max-w-xl text-lg text-stone-500">Currently open for new projects.</p>
      </section>
      <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-24 md:grid-cols-2">
        {projects.map((project) => (
          <a key={project.title} className="group block">
            <div className={"aspect-[4/3] rounded-3xl " + project.color} />
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="font-medium">{project.title}</p>
                <p className="text-sm text-stone-500">{project.tag}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </a>
        ))}
      </section>
    </div>
  );
}
