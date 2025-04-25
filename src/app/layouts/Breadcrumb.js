import { usePathname } from "next/navigation";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from '@mui/material/Link';
import {getTitleText} from '../utils/getText'

export default function Breadcrumb(){
    const paths = usePathname();
    const pathNames = paths.split("/").filter((path) => path && !path.includes('pages'))

    const updatePathKor = (arr) => {
        arr.map((item,i) => {
            const pathKor = getTitleText(item);
            arr[i] = pathKor;
        })

        return arr;
    }
    updatePathKor(pathNames)

    return(
        <Breadcrumbs aria-label="breadcrumb" separator="›">
            <Link underline="hover" color="inherit" href="/">
                Home
            </Link>
            {
                pathNames.map((link, index) => {
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