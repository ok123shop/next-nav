export default function Loading() {
    return (
      <div className="absolute left-0 top-0 z-50 w-screen h-screen bg-zinc-800 bg-opacity-80 flex flex-col items-center justify-center overflow-hidden gap-2">
        <span className="loading loading-infinity loading-lg text-primary"></span>
      </div>
    );
  }
  