export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-24">
      <div>
        <p className="text-center pb-5 text-2xl">Hello! 👋</p>
        <div className="bg-white space-y-3 max-w-5xl max-auto rounded-xl p-5 border">
          <div>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full p-2 border rounded-xl"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full p-2 border rounded-xl"
            />
          </div>
          <div>
            <label htmlFor="email">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full p-2 border rounded-xl"
            />
          </div>
          <div>
            <button className="w-full bg-black p-3 rounded-xl text-white" type="submit">Submit</button>
          </div>
        </div>
      </div>
    </main>
  );
}
