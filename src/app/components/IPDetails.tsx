interface IPAddressProps {
  ip: string;
  location: string;
  timezone: string;
  isp: string;
}

const IPDetails = ({ip, location, timezone, isp} : IPAddressProps) => {

  return (
    <div>
      <div>
        <p className="text-md font-bold text-dark-gray uppercase tracking-[0.2rem]">IP Address</p>
        <p className="text-3xl font-semibold text-very-dark-gray">{ip}</p>
      </div>

      <div>
        <p className="text-md font-bold text-dark-gray uppercase tracking-[0.2rem]">Location</p>
        <p className="text-3xl font-semibold text-very-dark-gray">{location}</p>
      </div>

      <div>
        <p className="text-md font-bold text-dark-gray uppercase tracking-[0.2rem]">Timezone</p>
        <p className="text-3xl font-semibold text-very-dark-gray">{timezone}</p>
      </div>

      <div>
        <p className="text-md font-bold text-dark-gray uppercase tracking-[0.2rem]">ISP</p>
        <p className="text-3xl font-semibold text-very-dark-gray">{isp}</p>
      </div>
    </div>
  )
}

export default IPDetails;