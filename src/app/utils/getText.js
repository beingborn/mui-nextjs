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

export const getTitleText = (title) => {
    return titleMap[title] || '';
}

export default {
    getTitleText
}