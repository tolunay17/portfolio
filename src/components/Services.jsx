
const ServiceCard = ({ icon, title, details }) => {
    return (
      <>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mb-8 rounded-[10px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
            <div
              className={`mb-12 flex h-[40px] w-[8] p-3 items-center justify-center rounded-2xl bg-primary`}
            >
              <img className="w-20" src="../../src/assets/design.png" alt="" />
              {icon}
            </div>
            <h4 className="mb-3 text-xl font-semibold text-dark">{title}</h4>
            <p className="text-body-color">{details}</p>
          </div>
        </div>
      </>
    );
  };
  

const Services = () => {
  return (
    <div id='service' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
    <h1 className='py-8 text-4xl font-bold text-center text-[#000]'>Services</h1>
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <p className="text-base text-body-color">
              I have worked on a number of projects, they are all described separately but they belong to a full-stack developer.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          
          <ServiceCard
            title="Web Designer"
            details="I made some websites as school projects that mainly had to do with design. that websites include: Arne quinze, Gentse feesten, Ailiv."
            /> 

          <ServiceCard
            title="Front/Back-end Developer"
            details="This part, contains more attention on coding, but also effective coding with javascript. I also made a number of school projects such as: Tinder, Spotify-api, Movie-app."
          />
          <ServiceCard
            title="UI IX Designer"
            details="As a UI/UX designer I also had a number of copies that I had to make for school projects such as: Walking-app."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
