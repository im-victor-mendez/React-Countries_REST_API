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
            <BackButton />,
            <CountryDetails />
        ]
    },
]

export default routes