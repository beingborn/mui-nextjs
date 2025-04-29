import Link from 'next/link'

import {
    SidebarDepth1,
    SidebarDepth2,
    SidebarDepth2List
} from './styles'

export default function SidebarItem({data, idx, depth1Active, depth2Active, depth2Init}){
    return(
        <SidebarDepth1 key={idx}>
            <button type="button" 
                onClick={() => {depth1Active.toggleActive(idx); depth2Init();}}
                className={depth1Active.isActive === idx ? 'is-active' : ''}
            >
                {data.name}
            </button>
                {
                    data.list && (    
                        <SidebarDepth2List className={depth1Active.isActive === idx ? 'is-active' : ''}>
                            {
                                data.list.map((item, index) => {
                                    return (
                                        <SidebarDepth2 key={index} className={depth2Active.isActive === index ? 'is-active' : ''}>
                                            <Link 
                                            href={item.href + `?active=${idx}&active2=${index}`}
                                            onClick={()=>{depth2Active.toggleActive(index)}}
                                            >
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