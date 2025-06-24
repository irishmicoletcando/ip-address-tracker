interface IPAddressProps {
  ip: string;
  location: string;
  timezone: string;
  isp: string;
}

const IPDetails = ({ip, location, timezone, isp} : IPAddressProps) => {
  return (
    <div className="bg-white mx-4 md:mx-10 px-4 md:px-8 py-6 md:py-8 rounded-lg shadow-lg">
      {/* Mobile Layout - Stacked */}
      <div className="flex flex-col md:hidden space-y-6">
        {/* IP Address */}
        <div className="text-center">
          <p className="text-xs font-bold text-dark-gray uppercase tracking-[0.15rem] mb-2">IP Address</p>
          <p className="text-xl font-semibold text-very-dark-gray">{ip}</p>
        </div>
        
        {/* Location */}
        <div className="text-center">
          <p className="text-xs font-bold text-dark-gray uppercase tracking-[0.15rem] mb-2">Location</p>
          <p className="text-xl font-semibold text-very-dark-gray">{location}</p>
        </div>

        {/* Timezone */}
        <div className="text-center">
          <p className="text-xs font-bold text-dark-gray uppercase tracking-[0.15rem] mb-2">Timezone</p>
          <p className="text-xl font-semibold text-very-dark-gray">UTC {timezone}</p>
        </div>

        {/* ISP */}
        <div className="text-center">
          <p className="text-xs font-bold text-dark-gray uppercase tracking-[0.15rem] mb-2">ISP</p>
          <p className="text-xl font-semibold text-very-dark-gray">{isp}</p>
        </div>
      </div>

      {/* Desktop Layout - Horizontal */}
      <div className="hidden md:flex justify-center content-center">
        {/* IP Address */}
        <div className="flex-1">
          <p className="text-xs font-bold text-dark-gray uppercase tracking-[0.2rem] mb-3">IP Address</p>
          <p className="text-2xl font-semibold text-very-dark-gray">{ip}</p>
        </div>
        
        {/* Divider */}
        <div className="w-px bg-gray-300 mx-4"></div>
        
        {/* Location */}
        <div className="flex-1">
          <p className="text-xs font-bold text-dark-gray uppercase tracking-[0.2rem] mb-3">Location</p>
          <p className="text-2xl font-semibold text-very-dark-gray">{location}</p>
        </div>

        {/* Divider */}
        <div className="w-px bg-gray-300 mx-4"></div>

        {/* Timezone */}
        <div className="flex-1">
          <p className="text-xs font-bold text-dark-gray uppercase tracking-[0.2rem] mb-3">Timezone</p>
          <p className="text-2xl font-semibold text-very-dark-gray">UTC {timezone}</p>
        </div>

        {/* Divider */}
        <div className="w-px bg-gray-300 mx-4"></div>

        {/* ISP */}
        <div className="flex-1">
          <p className="text-xs font-bold text-dark-gray uppercase tracking-[0.2rem] mb-3">ISP</p>
          <p className="text-2xl font-semibold text-very-dark-gray">{isp}</p>
        </div>
      </div>
    </div>
  )
}

export default IPDetails;