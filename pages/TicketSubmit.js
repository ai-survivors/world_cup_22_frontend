import Header from "../components/Header";
import Footer from "../components/Footer";

const features = [

  

  { name: "Match Teams", description: "Designed by Good Goods, Inc." },
  {
    name: "Match Date",
    description:
      "Solid walnut base with rare earth magnets and powder coated steel card cover",
  },
  { name: "Ticket class", description: '6.25" x 3.55" x 1.15"' },
  {
    name: "Ticket price",
    description: "Hand sanded and finished with natural oil",
  },
  { name: "Discount value", description: "Wood card tray and 3 refill packs" },
];

const TicketSubmit = (props) => {

  //  console.log(props.handleSubmit)
  return (
    <>
      <Header />

      <div className="ml-80 ">
        <div className="bg-yellow-100 mt-10 w-2/3 mr-50 h-80  rounded-3xl ">
          <div>
            <div className="bg-red-100 pt-5 pb-5 pl-20 pr-20 rounded-3xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mt-50">
                Football Ticket{" "}
              </h2>
            </div>
            <div className=" mt-5 border-t-2 border-b-2 border-rose-600 bg-white-100 rounded-3xl mb-5">
              <ul className=" flex justify-evenly ...">
                <li>Match between: China-America</li>
                <li>Price: 500</li>
                <li>Class: Gold one</li>
              </ul>
            </div>
			<div className="border-t-2 border-b-2 border-rose-600 bg-white-100 rounded-3xl">
              <ul className=" flex justify-evenly ...">
                <li>Name: Omar</li>
                <li>Date:4/4/2022</li>
                <li>Seat:19-Zone:A</li>
              </ul>
            </div>
		<div className= "float-right pr-10 pt-10">
				<img  width="100" height="100"  src="https://www.pinclipart.com/picdir/big/2-26320_free-football-clipart-free-clipart-images-graphics-football.png"/>
				</div>
            {/* <dl className= "bg-white-100 mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
			  {features.map((feature) => (
				<div key={feature.name} className="border-t border-gray-200 pt-4">
				  <dt className="font-medium text-gray-900">{feature.name}</dt>
				  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>

				
				</div>
			
			  ))}
			</dl> */}
            <button class="mt-24 ml-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center bt-10 mt-7">
              <svg
                class="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Download</span>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default TicketSubmit;
