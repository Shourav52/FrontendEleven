const Newsletter = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="card shadow-lg rounded-2xl p-8 md:p-12">
        {/* Heading */}
        <div className="mb-6 max-w-2xl">
          <h2 className="text-3xl font-bold text-red-600">
            Stay Updated. Save Lives.
          </h2>
          <p className="opacity-75 dark:text-gray-300 mt-3">
            Subscribe to receive emergency blood requests, donation tips,
            upcoming blood drives, and life-saving updates directly in your
            inbox.
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col sm:flex-row gap-4 max-w-xl">
          <input
            type="email"
            required
            placeholder="Enter your email address"
            className="w-full border rounded-lg px-4 py-3 
                       focus:outline-none focus:ring-2 focus:ring-red-400
                       dark:bg-transparent dark:border-gray-600
                       dark:text-gray-100"
          />

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-500 text-white
                       px-6 py-3 rounded-lg font-semibold transition"
          >
            Subscribe
          </button>
        </form>

        {/* Trust Note */}
        <p className="text-sm opacity-75 dark:text-gray-400 mt-4">
          We respect your privacy. No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
