import {css} from '@emotion/css'
import styled from '@emotion/styled'
import { usePathname } from "next/navigation";

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

const titleMap = {

    content  : '콘텐츠 관리',
    survey   : '설문관리',
    task     : '과제관리',

    trainer  : '강사관리',
    qna      : '강사 Q&A',
    pages    : '강사 페이지 관리',

    online   : '과정 개설',
    on_manage: '과정 운영',
    students : '수강생 관리'

}

function getTitleText(title) {
    return titleMap[title] || '';
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
