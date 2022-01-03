import * as React from "react";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
const pdf = () => {
    const pdfExportComponent = React.useRef(null);

    const exportPDFWithComponent = () => {
        if (pdfExportComponent.current) {
            pdfExportComponent.current.save();
        }
    };
    return (
        <div>
            <div className="example-config">
                <br/>
                <button className="k-button" onClick={exportPDFWithComponent}>
                    Export with component
                </button>    
            </div>
            <div className="border rounded p-2">
               

                    <div className="bg-[url('https://images.assetsdelivery.com/compings_v2/gavrby/gavrby2104/gavrby210400021.jpg')]  mt-10  h-80  rounded-3xl bg-cover " >
                    <PDFExport
                    ref={pdfExportComponent}
                    paperSize="auto"
                    margin={40}
                    fileName={`Report for ${new Date().getFullYear()}`}
                    author="KendoReact Team"
                    
                >
                        <div>
                            <div className="pt-5 pb-5 pl-20 pr-20 rounded-3xl">
                                <img className='hover:scale-110 cursor-grab' src='https://github.com/ai-survivors/world_cup_22_frontend/raw/main/assest/logo.png' width='100' />
                              
                                <h2 className="font-mono text-3xl font-extrabold tracking-tight text-white sm:text-4xl mt-50">
                                    World Cup Ticket

                                </h2>
                                <div className="text-white"> Match between: </div>
                            </div>
                            <div className="float-right pr-6">

                            </div>
                            <div className="flex flex-row w-auto ml-20 font-mono text-white ">

                                <div className="basis-1/2"> Price: </div>
                                <div className="basis-1/2">Class: Gold one</div>



                            </div>

                            <div className="flex flex-row w-auto mt-2 ml-20 font-mono text-white ">
                                <div className="basis-1/2" > Date : </div>
                                <div className="basis-1/2">Seat:19-Zone: A</div>
                            </div>
                        </div>
                        </PDFExport>
                    </div>

              
            </div>
        </div>
    );


}


export default pdf;

