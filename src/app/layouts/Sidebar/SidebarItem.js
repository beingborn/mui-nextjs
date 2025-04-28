import Link from 'next/link'

import {
    SidebarDepth1,
    SidebarDepth2,
    SidebarDepth2List
} from './styles'

export default function SidebarItem({data, idx, isActive, toggleActive}){
    return(
        <SidebarDepth1 key={idx}>
            <button 
            type="button"
            onClick={() => {toggleActive(idx)}}
            className={isActive === idx ? 'is-active' : ''}
            >
                {data.name}
            </button>
            {
                data.list && (
                    <SidebarDepth2List className={isActive === idx ? 'is-active' : ''}>
                        {
                            data.list.map((item, index) => {
                                return (
                                    <SidebarDepth2 key={index}>
                                        <Link href={item.href}>
                                            {item.name}
                                        </Link>
                                    </SidebarDepth2>
                                )
                            })
                        }
                    </SidebarDepth2List>
                )
            }
        </SidebarDepth1>
    )
}