import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 flex">
        <img src={offer} alt="offer image" className="object-contain w-full" width={773} height={687}/>
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className='text-coral-red'>Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, tenetur. Delectus quaerat quas sint error, perferendis quam amet placeat vel reiciendis.</p>
        <p className="mt-6 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, tenetur. Delectus quaerat quas sint error.</p>
        <div className="flex flex-wrap gap-4 mt-11">
          <Button label="Shop now" iconUrl={arrowRight}/>
          <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer