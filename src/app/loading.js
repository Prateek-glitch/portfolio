export default function Loading() {
  return (
    <div className="flex flex-col gap-24 py-16 px-6 max-w-6xl mx-auto w-full min-h-[80vh] justify-center">
      
      {/* Hero Section Skeleton */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">
        
        {/* Left Column (Text & Buttons) */}
        <div className="flex-1 w-full space-y-8">
          {/* Subtitle pulse */}
          <div className="h-6 w-48 bg-[#c94b4b]/10 rounded-md animate-pulse border border-[#c94b4b]/5"></div>
          
          {/* Main Giant Title pulse */}
          <div className="space-y-4">
            <div className="h-20 md:h-28 w-3/4 bg-red-900/20 rounded-md animate-pulse"></div>
            <div className="h-20 md:h-28 w-1/2 bg-red-900/20 rounded-md animate-pulse"></div>
          </div>
          
          {/* Paragraph pulse */}
          <div className="space-y-3 pt-4">
            <div className="h-4 w-full bg-gray-800/50 rounded animate-pulse"></div>
            <div className="h-4 w-5/6 bg-gray-800/50 rounded animate-pulse"></div>
            <div className="h-4 w-4/6 bg-gray-800/50 rounded animate-pulse"></div>
          </div>
          
          {/* Action Buttons & Socials pulse */}
          <div className="flex flex-col sm:flex-row items-center gap-8 pt-6">
            <div className="h-14 w-44 bg-[#c94b4b]/20 rounded-lg animate-pulse shadow-[0_0_15px_rgba(201,75,75,0.1)]"></div>
            <div className="flex gap-5">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-14 h-14 rounded-full bg-red-900/20 border border-red-900/30 animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (Portrait Card Skeleton) */}
        <div className="w-64 h-80 md:w-72 md:h-96 bg-black/40 rounded-2xl border border-[#c94b4b]/10 animate-pulse relative overflow-hidden flex items-center justify-center">
          {/* Inner loading scanner effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#c94b4b]/5 to-transparent h-[200%] animate-[spin_3s_linear_infinite]"></div>
          
          {/* Central loading dot */}
          <div className="w-4 h-4 rounded-full bg-[#c94b4b]/40 animate-ping"></div>
        </div>
      </div>

      {/* Terminal Block Skeleton (Gives the page depth while loading) */}
      <div className="max-w-4xl w-full mx-auto h-48 bg-black/40 border border-red-950/30 rounded-xl animate-pulse flex flex-col overflow-hidden">
         <div className="h-10 w-full bg-[#1a0505] border-b border-red-950/30 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-[#c94b4b]/30"></div>
            <div className="w-3 h-3 rounded-full bg-red-900/20"></div>
            <div className="w-3 h-3 rounded-full bg-red-900/20"></div>
         </div>
         <div className="flex-1 p-8 space-y-4">
            <div className="h-3 w-1/3 bg-gray-800/40 rounded"></div>
            <div className="h-3 w-1/2 bg-gray-800/40 rounded"></div>
            <div className="h-3 w-1/4 bg-[#c94b4b]/20 rounded"></div>
         </div>
      </div>

    </div>
  );
}