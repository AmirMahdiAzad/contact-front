// components/Loader.tsx
const Loader = () => {
  return (
 
    <div className="flex min-h-[50vh] items-center justify-center bg-transparent">
      <div
        className="relative h-24 w-24 rounded-full shadow-lg shadow-fuchsia-500/30"
        style={{
          animation: "pulse 1.5s infinite cubic-bezier(0.45, 0, 0.3, 1)",
        }}
      >
        <div
          className="absolute inset-0 rounded-full border-8 border-solid border-transparent animate-spin"
          style={{
            animation: "spin 2s linear infinite",
            borderTopColor: "#d946ef", // fuchsia-500
            borderRightColor: "#ec4899", // pink-500
          }}
        ></div>

        <div
          className="absolute inset-2 rounded-full border-4 border-solid border-transparent animate-spin"
          style={{
            animation: "spin 1.5s linear infinite reverse",
            borderTopColor: "#a855f7", // purple-500
            borderLeftColor: "#d946ef", // fuchsia-500
          }}
        ></div>

        <div
          className="absolute inset-5 rounded-full border-2 border-solid border-transparent animate-spin"
          style={{
            animation: "spin 1s linear infinite",
            borderTopColor: "#f472b6", // pink-400
          }}
        ></div>
      </div>

      <style>{`
        @keyframes pulse {
          0% {
            transform: scale(0.95);
            box-shadow:
              0 0 0 8px rgba(217, 70, 239, 0.18),
              0 0 0 16px rgba(168, 85, 247, 0.12);
          }
          70% {
            transform: scale(1);
            box-shadow:
              0 0 0 16px rgba(217, 70, 239, 0),
              0 0 0 28px rgba(168, 85, 247, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow:
              0 0 0 0 rgba(217, 70, 239, 0),
              0 0 0 0 rgba(168, 85, 247, 0);
          }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loader;
