import Link from "next/link";
import { Section } from "./section";

import NgcashImg from '../../../public/ngcash.svg';

export function Header() {
    return (
        <header className="w-full text-white">
            <Section>
                <div className="w-full h-[100px] flex items-center justify-between">
                    <Link href="/">
                        <img src="/ngcash.svg" alt="NG.Cash logo" className="h-full w-20"/>
                    </Link>

                    <div className="flex items-center gap-10">
                        <span>Boa tarde, Felipe</span>

                        <div className="w-[48px] h-[48px] bg-[#7631f5] rounded-full flex items-center justify-center">
                            <span>FE</span>
                        </div>
                    </div>
                </div>
            </Section>

            <div className="w-full h-[65px]  bg-gradient-to-r from-[#7631f5] to-[#7c39f7]"></div>
        </header>
    )
}