"use client"

import styled from '@emotion/styled'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

const TempUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 18px;
`

export default function Home() {
  return (
    <div className="main">
        <Grid container spacing={2} sx={{alignItems: 'stretch'}}>
          <Grid size={6}>
            <Card variant='outlined' sx={{height: '100%'}}>
              <CardContent>
                <h2 style={{fontSize: '28px', marginBottom: '20px'}}>실습 목록</h2>
                <TempUl>
                  <li>컴포넌트 설계</li>
                  <li>라이브 서버</li>
                  <li>프론트 폴더 구조 생성</li>
                  <li>Layout 페이지 공통 출력</li>
                  <li>라우팅 페이지 이동</li>
                  <li>라우팅별 브레드크럼브, 타이틀 동적 출력</li>
                  <li>임시 데이터 사용 아코디언 기능 구현</li>
                  <li>SVG 공통 컴포넌트 라이브러리 사용</li>
                  <li>MUI 컴포넌트 커스텀 사용</li>
                </TempUl>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={6}>
              <Card variant='outlined' sx={{height: '100%'}}>
                <CardContent>
                  <h2 style={{fontSize: '28px', marginBottom: '20px'}}>Next Step</h2>
                  <TempUl>
                    <li>예정..</li>
                  </TempUl>
                </CardContent>
              </Card>
          </Grid>
        </Grid>
    </div>
  );
}
