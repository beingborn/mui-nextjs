import { usePathname } from "next/navigation";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import {css} from '@emotion/css';
import Link from '@mui/material/Link';

export default function Breadcrumb(){
    const paths = usePathname();
    const pathNames = paths.split("/").filter((path) => path)

    return(
        <Breadcrumbs aria-label="breadcrumb" separator="›" 
        className={css`
            padding-left: 20px;
            padding-top: 20px;
        `} >
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