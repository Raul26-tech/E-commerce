import { InputSeach } from './styles';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

interface ISearchProps {
    children?: string;
    icon?: string;
}

export function InputSearch({ children }: ISearchProps) {
    return (
        <>
            <InputSeach>
                <input
                    type="search"
                    placeholder="Pesquisar"
                    name="search"
                    id=""
                />
                <SearchTwoToneIcon sx={{ marginLeft: 2 }} />
            </InputSeach>
        </>
    );
}
