export default function Schedule() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-4xl font-semibold mb-10 text-purple-400">Schedule</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Schedule items placeholder */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-6 flex justify-between text-slate-200">
          <span>09:00 - 10:00</span>
          <span>Opening Keynote</span>
        </div>
      </div>
    </section>
  );
}
