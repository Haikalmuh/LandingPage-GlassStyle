export default function Speakers() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-4xl font-semibold mb-10 text-purple-400">Speakers</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {/* Speaker cards placeholder */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6">
          <div className="h-32 w-32 mx-auto rounded-full bg-slate-700"></div>
          <h3 className="mt-4 text-xl text-slate-100">Speaker Name</h3>
          <p className="text-slate-400 text-sm">Job Title</p>
        </div>
      </div>
    </section>
  );
}
