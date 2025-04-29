import { usePathname } from "next/navigation";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from '@mui/material/Link';
import {updatePathKor} from '../utils/getText'

export default function Breadcrumb(){
    const paths = usePathname();
    const pathNames = paths.split("/").filter((path) => path && !path.includes('pages'))

    // 전달 받은 array를 korea로 변경해서 반환하는 공통 함수
    // 원본 Path를 보존한 형식 진행    
    const pathNamesKor = updatePathKor(pathNames);

    return(
        <Breadcrumbs aria-label="breadcrumb" separator="›">
            <Link underline="hover" color="inherit" href="/">
                Home
            </Link>
            {
                pathNamesKor.map((link, index) => {
                    const isLast = index === pathNames.length - 1;

                    return isLast ? 
                            (
                            <span key= {index}>
                                {link}
                            </span>
                            ) : 
                            (
                                <Link
                                underline="hover"
                                color="inherit"
                                href="/material-ui/getting-started/installation/"
                                key= {index}
                                >
                                    {link}
                                </Link>
                            )
                })
            }
        </Breadcrumbs>
    )
}