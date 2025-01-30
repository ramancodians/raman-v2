import { TbArrowDown } from "react-icons/tb"
import MyImage from "./../assets/khushbu-tamershwari.png"
import Amex from "./../assets/amex.svg"

const Company = ({
  image = Amex,
  imageAlt = "American Express",
  companyName = "American Express",
  duration = "Aug 2022 - Present",
  role = "Senior Engineer I",
  list = [
    "Led a team of 10 members, driving collaboration and project success in a fast-paced environment.",
    "Developed and enhanced a customer-facing application enabling seamless American Express card applications.",
    "Worked on the UK market, the highest revenue-generating international segment, ensuring optimal performance and user experience.",
    "Contributed to significant revenue growth by implementing strategic improvements and optimizing application workflows.",
  ]
}) => {
  return (
    <div>
      {/* Header */}
      <div className="flex gap-4 mt-4 items-center ">
        <div>
          <img src={image} alt={imageAlt} className="w-12 rounded-md" />
        </div>
        <div>
          <p className="font-semibold text-lg">
            {companyName}
          </p>
          <h5 className="text-sm text-slate-400 relative -top-1">
            {duration}
          </h5>
          <h4 className="relative -top-2">
            {role}
          </h4>
        </div>
      </div>
      <div className="border-t borde-2"></div>
      <ul className="list-disc px-4 flex flex-col gap-4 mt-4">
        {list.map((str, idx) => (
          <li key={idx} className="">
            {str}
          </li>
        ))}
      </ul>
    </div>
  )
}


const App = () => {
  return (
    <div>
      <div className="container mx-auto min-h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center  md:flex-row">
          <div>
            <img src={MyImage} alt="Khushbu Tameshwari" className="rounded-full max-w-[200px]" />
          </div>
          <div className="px-10">
            <h1 className="text-2xl font-semibold mt-4">
              Hi,
              <br />
              I am Khushbu Tameshwari
            </h1>
            <h2 className="text-lg mt-2 max-w-lg">
              I am a Seniour Full Stack Engineer, with more than 8 years of
              experience in building web applications at scale.
            </h2>
          </div>
        </div>
        <div className="mt-20 flex flex-col justify-center items-center">
          <span className="mb-4 text-slate-400">
            Scroll down to see my work
          </span>
          <TbArrowDown className="text-3xl animate-bounce text-slate-400" />
        </div>
      </div>
      <div className="container mx-auto min-h-screen flex flex-col px-10">
        <h2 className="text-2xl font-semibold">
          Experience
        </h2>
        <Company />
        <Company
          companyName=""
        />
      </div>
    </div>
  )
}

export default App