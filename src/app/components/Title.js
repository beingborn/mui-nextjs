import Typography from '@mui/material/Typography'
import {css} from '@emotion/css'

export const mainTitle = `
  font-size: 32px;
  font-weight: 700;
`;

export const subTitle = `
  font-size: 24px;
  font-weight: 500;
`;

// props로 variant main > 받으면 mainTitle sub > subTitle 반환
export default function Title({children , ...props}) {
    const textStyle = props.tit === 'mainTitle' ? mainTitle : subTitle;
    
    return (
            <h2 className={css`
                    ${textStyle}
                `
                }
            >
                {subTitle}
                {props.tit}
                {children}
            </h2>
    )      
}
