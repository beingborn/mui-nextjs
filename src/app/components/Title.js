import {css} from '@emotion/css'
import styled from '@emotion/styled'
import { usePathname } from "next/navigation";

export const TitleWrap = styled.div`
    margin-bottom: 8px;
`

export const MainTitle = `
  font-size: 32px;
  font-weight: 700;
`;

export const SubTitle = `
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

function getTitleText(title) {
  switch (title) {
    case 'about':
      return '어바웃';
    case 'ui':
      return '컴포넌트';
    case 'icons':
      return '아이콘';
    default:
      return '';
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
