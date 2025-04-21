import Title from "../components/Title"

export default function Container(){
    return (
        <div className="container">
            <div>
                <Title tit="mainTitle">
                    페이지 제목
                </Title>
                <Title tit="subTitle">
                    페이지 설명
                </Title>
            </div>
            

        </div>
    )
}