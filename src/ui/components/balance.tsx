import { AiOutlineEye } from "react-icons/ai";

const balance = 10000 / 100

export function Balance() {
    return (
        <div className="w-full grid grid-cols-3 gap-10">

              <div className="w-full bg-[#0d0d0d] border border-[#2b2b2b] rounded-md p-8 text-white ">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <p>Saldo:</p>
                      <span>
                        {new Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL' }).format(balance)}
                      </span>
                    </div>

                    <div>
                      <AiOutlineEye size={25} />
                    </div>
                </div>
              </div>

              <div className="w-full bg-[#0d0d0d] border border-[#2b2b2b] rounded-md p-8 text-white">
                <p>cash in</p>
              </div>

              <div className="w-full bg-[#0d0d0d] border border-[#2b2b2b] rounded-md p-8 text-white">
                <p>cash out</p>
              </div>

            </div>
    )
}