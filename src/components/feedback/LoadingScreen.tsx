const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#020304] z-9999">
      <div className="relative flex flex-col items-center">
        <div className="size-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4" />
        <p className="text-white/40 text-xs font-medium uppercase tracking-[0.2em] animate-pulse">
          Fenrir Security
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
