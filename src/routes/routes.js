import { v4 as key } from "uuid";
import BackButton from "../components/common/BackButton";
import Countries from "../views/Countries";
import CountryDetails from "../views/CountryDetails";

const routes = [
    /*
    {
        name: '',
        path: '',
        element: </>
    }
    */
    {
        name: 'Countries',
        path: '',
        element: <Countries />
    },
    {
        name: '',
        path: ':country',
        element: [
            <BackButton key={key()} />,
            <CountryDetails key={key()} />
        ]
    },
]

export default routes