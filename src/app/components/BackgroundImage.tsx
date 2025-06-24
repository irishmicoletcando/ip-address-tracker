import Image from "next/image"

const BackgroundImage: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <Image 
        src="/assets/pattern-bg-desktop.png" 
        alt="background image"
        width={1920}
        height={1080}
        className="w-full h-full object-cover"
      />
    </div>
  )
}

export default BackgroundImage;