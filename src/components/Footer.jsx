import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-stretch">
      <div className="bg-zinc-950 flex w-full flex-col justify-center items-stretch max-md:max-w-full">
        <div className="flex-col overflow-hidden relative flex w-full items-stretch pb-12 max-md:max-w-full">
          <div className="self-center flex w-full max-w-[1139px] flex-col items-stretch mt-14 px-5 max-md:max-w-full max-md:mt-10">
            <div className="max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col items-start max-md:max-w-full max-md:mt-10">
                    {/* <img
                      loading="lazy"
                      srcSet="..."
                      className="aspect-[3.21] object-contain object-center w-[125px] overflow-hidden max-w-full"
                    /> */}
                    <div className="text-amber-500 text-2xl font-bold whitespace-nowrap mb-2">
                      <span style={{color: "#FF822D"}}>CitrusCinema</span>&#127818;
                    </div>
                    <div className="text-white text-xs font-medium leading-5 self-stretch max-md:max-w-full text-justify">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolores consectetur similique nostrum voluptate aliquam
                      fuga, ut maiores aperiam nobis error rem necessitatibus
                      mollitia magni expedita sit culpa quidem modi quam
                      repellendus est praesentium nesciunt assumenda? Voluptas
                      iure officia neque perspiciatis?
                      <br />
                    </div>
                  </div>
                </div>{" "}
                <div className="flex flex-col items-stretch  ml-5 max-md:w-full max-md:ml-0">
                  <div className="max-md:max-w-full max-md:mt-10">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 space-x-10">
                      <div className="flex flex-col items-stretch  max-md:w-full max-md:ml-0 ml-20">
                        <ul className="flex grow flex-col items-stretch max-md:mt-10 list-disc text-left">
                          <li className="text-white text-sm font-semibold leading-5 list-none">
                            Pages
                          </li>{" "}
                          <li className="text-white text-xs font-medium leading-5 whitespace-nowrap mt-3">
                            The most watched movies
                          </li>{" "}
                          <li className="text-white text-xs font-medium leading-5">
                            Top Rated Movies
                          </li>{" "}
                          <li className="text-white text-xs font-medium leading-5">
                            Movies
                          </li>{" "}
                          <li className="text-white text-xs font-medium leading-5">
                            Serials
                          </li>
                        </ul>
                      </div>{" "}
                      <div className="flex flex-col items-stretch  ml-5 max-md:w-full max-md:ml-0">
                        <ul className="flex grow flex-col items-stretch max-md:mt-10 list-disc text-left">
                          <li className="text-white text-sm font-semibold leading-5 whitespace-nowrap list-none">
                            Our social networks
                          </li>{" "}
                          <li className="text-white text-xs font-medium leading-5 mt-3">
                            Telegram
                          </li>{" "}
                          <li className="text-white text-xs font-medium leading-5">
                            Instagram
                          </li>{" "}
                          <li className="text-white text-xs font-medium leading-5">
                            Facebook
                          </li>{" "}
                          <li className="text-white text-xs font-medium leading-5">
                            YouTube
                          </li>
                        </ul>
                      </div>{" "}
                      <div className="flex flex-col items-stretch ml-5 max-md:w-full max-md:ml-0">
                        <ul className="flex grow flex-col items-stretch max-md:mt-10 list-disc text-left">
                          <li className="text-white text-sm font-semibold leading-5 whitespace-nowrap list-none">
                            For reference
                          </li>{" "}
                          <li className="text-white text-xs font-medium leading-5 whitespace-nowrap mt-3">
                            Telegram
                          </li>{" "}
                          <li className="text-white text-xs font-medium leading-5 whitespace-nowrap">
                            Instagram
                          </li>{" "}
                          <li className="text-white text-xs font-medium leading-5 whitespace-nowrap">
                            Whatsapp
                          </li>{" "}
                          <li className="text-white text-xs font-medium leading-5">
                            Skype
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="text-white text-sm font-medium leading-8 mt-36 max-md:mt-10">
              © CitrusCinema.com - 2023
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
