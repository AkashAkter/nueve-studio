export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center p-8">
      <h1 className="text-4xl font-semibold mb-4">
        Welcome to <span className="text-[var(--accent)]">Nueve Studio</span>
      </h1>
      <p className="max-w-xl text-[var(--text-secondary)]">
        Capture timeless memories with our professional photographers. Book your session today.
      </p>
      <button className="mt-6 px-6 py-3 rounded-full bg-[var(--accent)] text-white font-medium hover:bg-[#a87e4f]">
        Book a Session
      </button>
    </main>
  );
}
