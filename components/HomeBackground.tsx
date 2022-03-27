
import background from '../assets/images/cleanersBG.jpg'

export default function HomeBackground () {
  return (
    <div
      id="home"
      className="text-white h-screen w-full bg-cover bg-center flex pt-5"
      style={{ backgroundImage: `url(${background.src})` }}
    />
  )
};
