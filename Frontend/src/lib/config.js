const isLocal = typeof window !== "undefined" && window.location.hostname === "localhost";
export const API_URL = process.env.NEXT_PUBLIC_API_URL || (isLocal ? "http://localhost:5001" : "https://gymlogix-kcta.onrender.com");
