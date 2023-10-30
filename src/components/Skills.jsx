

export default function Skills() {
  return (
    <>
    <div id='skills' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
    <h1 className='py-8 text-4xl font-bold text-center text-[#000]'>Skills</h1>
    <p className="pb-2">Javascript</p>
      <div className=" mb-8 h-4 bg-[#ffcc26] w-8/12"> 
          <div className="h-8 bg-primary" style={{ width: "66%"}}></div>
      </div>
      <p className="pb-2">SQL</p>
      <div className="h-4 mb-8 bg-[#7e9bfa] w-8/12">
          <div className="h-8 bg-primary" style={{ width: "66%" }}></div>
      </div>
      <p className="pb-2">UI/UX Design</p>
      <div className="mb-8 h-4 bg-[#ff4bd2] w-9/12">
          <div className="h-8 bg-primary" style={{ width: "75%" }}></div>
      </div>
      <p className="pb-2">CSS</p>
      <div className="mb-8 h-4 bg-[#0888fe] w-10/12"> 
          <div className="h-8 bg-primary" style={{ width: "80%" }}></div>
      </div>
      <p className="pb-2">HTML</p>
      <div className="mb-8 h-4 bg-[#f55d5d] w-10/12">
          <div className="h-8 bg-primary" style={{ width: "80%" }}></div>
      </div>
</div>
    </>
  );
}