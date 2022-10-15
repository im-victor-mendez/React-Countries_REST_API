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
        element: <CountryDetails />
    },
]

export default routes