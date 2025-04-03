import { useState } from "react";
import axios from "axios";

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleShorten = async () => {
    if (!longUrl) {
      alert("Please enter a URL!");
      return;
    }

    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}`+"/shorten", {
        originalUrl: longUrl,
      });

      setShortUrl(res.data.shortUrl);
      setShowSuccess(true);

      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to shorten URL. Make sure the backend is running.");
    }
  };

  return (

    
    <div className="relative min-h-screen flex flex-col items-center justify-center ">
      {/* Background Grid Effect */}

      <div className="absolute top-4 right-4">
  <a href="https://github.com/Kanchan3D" target="_blank" rel="noopener noreferrer">
    <svg
      className="w-10 h-10 text-white hover:text-[#e879f9] transition-colors duration-300"
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.385.6.112.793-.26.793-.577 0-.285-.01-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.09-.744.083-.728.083-.728 1.205.084 1.838 1.24 1.838 1.24 1.07 1.835 2.805 1.305 3.49.997.108-.775.418-1.305.76-1.604-2.665-.304-5.466-1.334-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.323 3.3 1.23a11.52 11.52 0 0 1 3-.403c1.018.005 2.043.137 3 .403 2.29-1.553 3.296-1.23 3.296-1.23.654 1.653.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.625-5.478 5.922.43.372.81 1.102.81 2.222 0 1.606-.015 2.9-.015 3.293 0 .32.19.694.8.577C20.565 21.796 24 17.3 24 12 24 5.373 18.627 0 12 0z"/>
    </svg>
  </a>
</div>

      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>
      
      <div className="relative bg-[#fdf2f8] p-6 rounded-lg shadow-lg w-126 text-center">
        <h2 className="text-4xl font-bold text-black mb-4">URL Shortener</h2>
        <input
          type="text"
          placeholder="Enter long URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="w-full px-4 py-2 border bg-[#f3e8ff] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />
        <button
          onClick={handleShorten}
          className="mt-4 bg-[#f0abfc] text-black pointer px-6 py-2 rounded-md hover:bg-[#d946ef] transition"
        >
          Shorten URL
        </button>
        

        {shortUrl && (
          <div className="mt-4 p-3 bg-[#f3e8ff] rounded-md">
            {showSuccess && (
              <div className="text-green-600 font-semibold text-sm animate-fade animate-scale">
                ✅ YOUR SHORT URL HAS SUCCESSFULLY GENERATED
              </div>
            )}
            <h3 className="text-lg font-semibold">Shortened URL:</h3>
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline break-words"
            >
              {shortUrl}
            </a>
          </div>
        )}
      </div>
      <div className="inline-flex">

      <a
        href="https://github.com/Kanchan3D/url_shortener"
        className="inline-flex items-center mt-4 bg-[#020617] text-[#fff1f2] pointer px-4 py-2 rounded-md hover:bg-[#27272a] transition"
        >
          Go to GitHub
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="pl-0.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </a>

        </div>
      {/* Footer */}
      <footer className="absolute bottom-4 text-gray-400 text-sm">
        Built by 
        <a
          href="https://kkd-portfolio.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline ml-1"
        >
          @Kanchan_Dasila
        </a>
      </footer>
    </div>
  );
}

export default App;
