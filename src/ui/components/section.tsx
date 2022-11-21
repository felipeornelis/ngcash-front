import { ReactNode } from "react";

interface SectionProps {
    as?: 'div' | 'section';
    children: ReactNode | JSX.Element;
}

export function Section({ as = 'div', children }: SectionProps) {
    const Component = as;

    return (
        <Component className="max-w-4xl mx-auto">
            {children}
        </Component>
    )
}