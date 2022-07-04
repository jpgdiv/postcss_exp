import React, { useState } from "react";

import styles from "../../assets/css/global.css";
import buttonstyles from "./button2.css";

import { css, stylesheet } from "astroturf";
import styled from "astroturf/react";

type Button2Component = React.ElementType<
    {
        variant?: string;
        children: React.ReactNode;
    } & HTMLButtonElement
>;

type Button3Props = {
    variant?: string;
};

const Button3 = styled("button")`
    border: 1px solid transparent;
    &.disabled {
        opacity: 0.6;
    }
    &.variant-primary {
        color: blue;
        border-color: blue;
    }
    &:hover {
        color: orange;
        border-color: orange;
        background-color: white;
    }
`;

export const Button2: Button2Component = ({
    variant = "primary",
    children,
}) => {
    const bgColor = "red";
    // const padding = 2;
    const [padding, setPadding] = useState(1);

    console.log(styles);

    return (
        <div className="container-sm">
            test2
            <h1 className={styles["p-5"]}>Buttons for test 2</h1>
            <button
                className={buttonstyles.primary}
                css={css`
                    color: black;
                    border: 1px solid black;
                    background-color: ${bgColor};
                    padding: ${padding}rem;
                `} // dymaic updates get set on styles prop any way via var()...  bgColor get's renderd as class set on prop.
                // nice for adding in prerender custom vars.
                style={{
                    padding: `${padding}px`,
                }}
                onClick={() => {
                    console.log("hooi");
                }}
            >
                {children}
            </button>
            <button
                className={buttonstyles.primary}
                onClick={() => {
                    setPadding(padding + 1);
                }}
            >
                ++
            </button>
            <button
                className={buttonstyles.primary}
                onClick={() => {
                    setPadding(padding - 1);
                }}
            >
                --
            </button>
            {/* Why its showing an type error :O.... it's their demo component... https://4catalyzer.github.io/astroturf/introduction/ */}
            {/* The styled helper will infer component props from the nested classes you define. Create boolean props with simple class names, and cover more complex cases using a - to differentiate the name from value. .color-red becomes color="red"!
            We recommend this pattern for simple cases, where you value less boilerplate over customizability. */}
            <Button3 variant="primary" disabled>
                {" "}
                test button 3
            </Button3>
            <button
                css={css`
                    border: 1px solid transparent;
                    ${variant === "primary" &&
                    css`
                        color: blue;
                        border-color: blue;
                    `}
                `}
            >
                {children}
            </button>
        </div>
    );
};
