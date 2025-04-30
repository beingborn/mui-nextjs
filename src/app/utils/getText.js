const titleMap = {
    content: '콘텐츠 관리',
    survey: '설문관리',
    task: '과제관리',

    trainer: '강사관리',
    qna: '강사 Q&A',
    pages: '강사 페이지 관리',

    online: '과정 개설',
    on_manage: '과정 운영',
    students: '수강생 관리',

    ui: 'ui',
    tab: '탭',
    table: '테이블',
};

/**
 * 로직:
 * 1. 매개변수로 Array를 넣어 updatePathKor()
 * 2. Array Item 각각의 값을 titleMap에서 찾아서 한글로 변환해서 Return
 */

const getTitleText = (title) => {
    return titleMap[title] || '';
};

const updatePathKor = (arr) => {
    return arr.map((item) => getTitleText(item));
};

export { getTitleText, updatePathKor };
