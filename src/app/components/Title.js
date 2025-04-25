import {css} from '@emotion/css'
import styled from '@emotion/styled'
import { usePathname } from "next/navigation";
import { getTitleText } from '../utils/getText'

const TitleWrap = styled.div`
    margin-bottom: 8px;
`

const MainTitle = `
    font-size: 32px;
    font-weight: 700;
`;

const SubTitle = `
    font-size: 24px;
    font-weight: 500;
`;

function getTitle(tit){
    switch (tit) {
        case 'main':
        return MainTitle;
        case 'sub':
        return SubTitle;
        default:
        return MainTitle;
    }
}

// props로 variant main > 받으면 MainTitle sub > SubTitle 반환
export default function Title({children, tit}) {
    const paths = usePathname();
    const lastPath = paths.split("/").filter((path) => path).pop();
    const title = getTitleText(lastPath);
    const textStyle = getTitle(tit)
    
    return (
        <TitleWrap>
            <h2 className={css` ${textStyle} `}>
                {title}
                {children}
            </h2>
        </TitleWrap>
    )      
}
