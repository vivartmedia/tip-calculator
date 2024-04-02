
'use client'
import { Button } from "flowbite-react";
import { Container } from "postcss";
import { Card } from "flowbite-react";

export default function Home() {
  return (<>
    <main className="flex min-h-screen flex-col items-center p-20 bg-LGcyan">

      <header className="my-14">
        <h1 className="space-mono-bold text-3xl text-VDcyan">S P L I</h1>
        <h1 className="space-mono-bold text-3xl text-VDcyan">T T E R</h1>
      </header>

      <Card className="w-900px h-600px rounded-3xl overflow-hidden">
        <div className="grid grid-cols-2 h-full ">
          <div className="flex flex-col justify-between p-8">
            <div>
              <div className="mb-5 grid">
                <label className="space-mono-bold text-xl text-VDcyan" htmlFor="">Bill</label>

                <div className="relative flex items-center bg-slate-100 rounded-md hover:border-2 hover:border-Scyan">
                  <span className="absolute left-0 pl-3 text-gray-500"></span>
                  <input
                    type="text"
                    className="w-full text-2xl text-VDcyan space-mono-regular  rounded-md border-0 bg-slate-100 pl-5 pr-3 py-2 text-right hover:border-2  hover:border-Scyan"
                    style={{
                      backgroundImage: `url('/assets/icon-dollar.svg')`, // Using the public folder path
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'left 10px center', // Adjust as needed
                      backgroundSize: '11px 17px', // Adjust based on the size of your icon
                    }}
                    placeholder="0"
                    step="0.01"
                    min="0"
                    onInput={(e) => {
                      e.currentTarget.value = e.currentTarget.value.replace(/[^0-9.]/g, '').replace(/(\..*)\..*/g, '$1')
                    }}
                  />

                </div>
              </div>
            </div>

            <div className="">
              <label className="space-mono-bold text-xl text-VDcyan" htmlFor="">Select Tip %</label>
              <div className="flex justify-between mb-4">
                <Button className="w-28">5%</Button>
                <Button className="w-28">10%</Button>
                <Button className="w-28">15%</Button>
              </div>

              <div>
                <div className="flex justify-between">
                  <Button className="w-28">25%</Button>
                  <Button className="w-28">50%</Button>
                  <input className="w-28 text-xl text-VDcyan space-mono-bold  rounded-md border-0 bg-slate-100 pl-5 pr-3 py-2 text-center hover:border-2  hover:border-Scyan" type="text" placeholder="Custom"
                    step="1"
                    min="0"
                    onInput={(e) => {
                      // Only allow numbers (and optionally a single decimal point)
                      e.currentTarget.value = e.currentTarget.value.replace(/[^0-9.]/g, '').replace(/(\..*)\..*/g, '$1');
                    }}
                  />
                </div>
              </div>

            </div>

            <div>
              <div className="mb-5 grid">
                <label className="space-mono-bold text-xl text-VDcyan" htmlFor="">Number of People</label>
                <input
                  type="text"
                  className="w-full text-2xl text-VDcyan space-mono-regular  rounded-md border-0 bg-slate-100 pl-5 pr-3 py-2 text-right hover:border-2  hover:border-Scyan"
                  style={{
                    backgroundImage: `url('/assets/icon-person.svg')`, // Using the public folder path
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'left 10px center', // Adjust as needed
                    backgroundSize: '15px 17px', // Adjust based on the size of your icon
                  }}
                  onInput={(e) => {
                    // Ensure only whole numbers greater than 0 are allowed
                    e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '').replace(/^0+/g, '');
                  }}
                  placeholder="0"
                />
              </div>
            </div>
          </div>


          <div className="bg-VDcyan rounded-2xl m-4 p-">
            {/* <div className="grid grid-cols-2 h-full "> */}
              {/* <div className="flex flex-col justify-between p-8"> */}
                
                <div>

                  <div className="flex justify-between w-full">
                    <div>
                      <div>
                        <p className="text-xl text-slate-200">Tip Amount</p>
                      </div>
                      <div><p className="text-md text-Gcyan">/ person</p></div>
                    </div>
                    <div><p className="text-md text-Gcyan">$0.00</p></div>
                  </div>

                  <div className="flex justify-between w-full">
                    <div>
                      <div>
                        <p className="text-xl text-slate-200">Tip Amount</p>
                      </div>
                      <div><p className="text-md text-Gcyan">/ person</p></div>
                    </div>
                    <div><p className="text-md text-Gcyan">$0.00</p></div>
                  </div>
                  
                </div>
                <div>

                </div>
              {/* </div> */}

            {/* </div> */}
          </div>
        </div>
      </Card>

    </main>
  </>

  );
}


