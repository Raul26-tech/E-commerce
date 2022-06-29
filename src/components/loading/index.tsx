import loading from '../../assets/loading.gif';
import { Spinner } from './styles';

export function Loading() {
    return (
        <>
            <Spinner>
                <img src={loading} alt="" />
            </Spinner>
        </>
    );
}
