import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login';
import ListPatient from './pages/ListPatient';
import Patient from './pages/Patient';
import NewPatient from './pages/NewPatient';
import EditPatient from "./pages/EditPatient";
import Sigin from './pages/Sigin';
import ActionAnimals from "./pages/ActionAnimals";
import Report from "./pages/Report";
import Session from "./pages/Session";
import Finaly from "./pages/Finaly";

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Patient,
        ListPatient,
        NewPatient,
        Sigin,
        Report,
        Session,
        EditPatient,
        ActionAnimals,
        Finaly
    })
);

export default Routes;