interface IPAddressProps {
  ip: string;
  location: string;
  timezone: string;
  isp: string;
}

const IPDetails = ({ip, location, timezone, isp} : IPAddressProps) => {

  return (
    <div className="flex bg-white mx-10 px-5 py-6 rounded-lg justify-center content-center">
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
  )
}

export default IPDetails;