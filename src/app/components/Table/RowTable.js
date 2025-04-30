import { TableWrapper, Table } from './styles';

export default function BasicTable(props) {
    const { type = 'col', children, caption = '', otherClasses = [] } = props;

    const classes = [type, ...otherClasses].join(' ');

    return (
        <TableWrapper className={classes}>
            <Table>
                <caption>{caption}</caption>
                {children}
            </Table>
        </TableWrapper>
    );
}
