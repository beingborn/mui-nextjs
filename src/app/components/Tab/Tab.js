"use client"

import { useState } from 'react'
import styled from '@emotion/styled'

import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'

import { 
    TabWrapper,
    TabBody,
    TabStyle
} from './styles'


function allyProps(index) {
    return {
        id: `basic-tab-${index}`,
        "aria-controls": `basic-tabpanel-${index}`,
    };
}

function CustomTabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <TabWrapper
            role='tabpanel'
            hidden={value !== index}
            id={`basic-tabpanel-${index}`}
            aria-labelledby={`basic-tabpanel-${index}`}
            {...other}
        > 
            <TabBody>
                {value === index && <div>{children}</div>}
            </TabBody>
        </TabWrapper>
    )    
}

const CustomTab = styled(Tab)`
    /* 
        all : initial; : MUI 전체 스타일 초기화
    */
    ${TabStyle}
`

export default function BasicTab() {
    const [value, setValue] = useState('0') // 초기값 설정 : 1번 Active

    const handleChange = (event, newValue) => {
        console.log(event)
        setValue(newValue);
    }

    return (
        <div>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs"
            >
                <CustomTab label="Item 1" value="0" {...allyProps(0)} />
                <CustomTab label="Item 2" value="1" {...allyProps(1)} />
                <CustomTab label="Item 3" value="2" {...allyProps(2)} />
            </Tabs>
            <CustomTabPanel value={value} index={'0'}>
                안녕하세요1
            </CustomTabPanel>
            <CustomTabPanel value={value} index={'1'}>
                안녕하세요2
            </CustomTabPanel>
            <CustomTabPanel value={value} index={'2'}>
                안녕하세요3
            </CustomTabPanel>
        </div>
    );
}