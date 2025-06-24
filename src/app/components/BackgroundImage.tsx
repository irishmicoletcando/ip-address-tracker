import Image from "next/image"

const BackgroundImage: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      {/* Desktop background */}
      <Image 
        src="/assets/pattern-bg-desktop.png" 
        alt="background image"
        width={1920}
        height={1080}
        className="hidden md:block w-full h-full object-cover"
      />
      {/* Mobile background */}
      <Image 
        src="/assets/pattern-bg-mobile.png" 
        alt="background image"
        width={375}
        height={300}
        className="block md:hidden w-full h-full object-cover"
      />
    </div>
  )
}

export default BackgroundImage;