import { AssignMCPs, AssignTask, AssignVehicle, ViewCalendar, AssignRoute } from "./pages/BO/task asignment/components";
import TaskAssignment from "./pages/BO/task asignment/taskAssignment";
import Collectors from "./pages/employee";
import CCalendar from "./pages/employee/view-calendar";
import Ctask from "./pages/employee/view-task";
import Login from "./pages/login/login";
import Croute from "./pages/employee/view-route";
import Home from "./pages/login/landing";
import Jtask from "./pages/employee/view-task-j";
const Routes = [
    { path: '/', exact: true, name: 'Home',element:Home },
    { path: '/login', name: 'Login', element: Login, exact: true },
    { path: '/task-assignment', name: 'TaskAssignment', element: TaskAssignment, exact: true },
    { path: '/task-assignment/view-calendar', name: 'View', element: ViewCalendar },
    { path: '/task-assignment/assign-task', name: 'AssignTask', element: AssignTask },
    { path: '/task-assignment/assign-vehicle', name: 'AssignVehicle', element: AssignVehicle },
    { path: '/task-assignment/assign-mcps', name: 'AssignMCPs', element: AssignMCPs },
    { path: '/task-assignment/assign-route', name: 'AssignRoute', element: AssignRoute },
    { path: '/c',exact:true, name: 'Collectors', element: Collectors },
    { path: '/j',exact:true, name: 'Janitors', element: Collectors },
    { path: '/c/calendar',exact:true, name: 'CCalendar', element: CCalendar },
    { path: '/j/calendar',exact:true, name: 'JCalendar', element: CCalendar },
    { path: '/c/view-task',exact:true, name: 'Ctask', element: Ctask },
    { path: '/c/view-route',exact:true, name: 'Croute', element: Croute },
    { path: 'c/view-task', name: 'Ctask', element: Ctask },
    { path: 'j/view-task', name: 'Jtask', element: Jtask }
];
export default Routes;