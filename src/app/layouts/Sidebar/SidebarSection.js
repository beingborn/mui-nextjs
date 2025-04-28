
import {useState} from 'react'
import {
    SidebarNav,
    SidebarDepth1List,
} from './styles'

import SidebarItem from './SidebarItem';

export default function SidebarSection({sidebarData}){
    const [isActive, setisActive] = useState(null);
    const toggleActive = (index) => {
        console.log(index)
        setisActive(prev => (prev === index) ? null : index)
    }

    return (
        <SidebarNav>
            <SidebarDepth1List>
                {sidebarData.map((item,index) => {
                    return (
                        <SidebarItem 
                        data={item} 
                        idx={index} 
                        key={index}
                        isActive={isActive}
                        toggleActive={toggleActive}
                        />
                    ) 
                })}
            </SidebarDepth1List>
        </SidebarNav>
    )
}