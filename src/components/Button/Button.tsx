import React, { useState } from "react";

import styles from "../../assets/css/global.css";

import buttonstyles from "./button.css";

import { css, stylesheet } from "astroturf";

// const height = 2;
// const styles = stylesheet`
//   .btn {
//     appearance: none;
//     height: ${height}rem;
//     display: inline-block;
//     padding: .5rem 1rem;
//   }
//   .primary {
//     color: white;
//     border: 1px solid white;
//     background-color: taupe;
//     &:hover {
//       color: taupe;
//       border-color: taupe;
//       background-color: white;
//     }
//   }
// `;

type ButtonComponent = React.ElementType<{
    variant?: string;
    children: React.ReactNode;
}>;

export const Button: ButtonComponent = ({ variant = "primary", children }) => {
    const bgColor = "red";
    // const padding = 2;
    const [padding, setPadding] = useState(1);
    console.log(styles);
    return (
        <div className={styles["p-5"]}>
            <h1 className="p-5">hoi</h1>
            <button
                css={css`
                    color: black;
                    border: 1px solid black;
                    background-color: ${bgColor};
                    padding: ${padding}rem;
                `}
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
            <button
                css={css`
                    border: 1px solid transparent;
                    ${variant === "primary" &&
                    css`
                        color: blue;
                        border-color: blue;
                        &:hover {
                            color: blue;
                            border-color: yellow;
                            background-color: purple;
                        }
                    `}
                `}
            >
                {children}
            </button>
        </div>
    );
};
