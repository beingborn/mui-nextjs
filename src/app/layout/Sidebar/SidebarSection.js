import { useSearchParams } from 'next/navigation';

import {
    SidebarNav,
    SidebarDepth1List,
} from './styles'

import SidebarItem from './SidebarItem';
import useActive from '../../utils/useActive';


export default function SidebarSection({sidebarData}){
    const activeParams = useSearchParams()
    const active = activeParams.get('active')
    const active2 = activeParams.get('active2')

    const depth1Active = useActive(active)    
    const depth2Active = useActive(active2)

    const depth2Init = () => {
        depth2Active.toggleActive(null)
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
                        depth1Active={depth1Active}
                        depth2Active={depth2Active}
                        depth2Init={depth2Init}
                        />
                    ) 
                })}
            </SidebarDepth1List>
        </SidebarNav>
    )
}