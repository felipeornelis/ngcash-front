import Link from "next/link"
import { Balance } from "../ui/components/balance"
import { Header } from "../ui/components/header"
import { Section } from "../ui/components/section"



export default function HomePage() {
  return (
    <>
      <Header />
      <main className="mt-[-40px]">
          <Section>
            <Balance />
            <div className="grid grid-cols-content mt-10 grid-col gap-10">
              <aside>
                <nav className="w-full">
                  <ul className="w-full flex flex-col gap-3">

                  <li>
                      <Link
                        href="/"
                        className="w-full rounded-md px-8 py-3 text-white block border border-[#803dfc] bg-gradient-to-r from-[#7631f5] to-[#7c39f7]"
                      >
                        Overview
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/dashboard/transacao"
                        className="w-full rounded-md px-8 py-3 text-white block bg-[#0d0d0d] border border-[#2b2b2b]"
                      >
                        Realizar transação
                      </Link>
                    </li>

                  </ul>
                </nav>
              </aside>

              <div>
                <h2 className="font-semibold text-4xl tracking-tighter text-white">Últimas transações</h2>

                <div className="w-full items-center justify-center text-white">
                  <span>Nenhuma transação registrada.</span>
                </div>
              </div>

            </div>
          </Section>
      </main>
    </>
  )
}