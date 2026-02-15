
export default function FullScreenLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm z-50">
      
      <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin"></div>

    </div>
  );
}
