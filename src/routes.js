import { AssignMCPs, AssignTask, AssignVehicle, ViewCalendar } from "./pages/BO/task asignment/components";
import TaskAssignment from "./pages/BO/task asignment/taskAssignment";

const Routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/task-assignment', name: 'TaskAssignment', element: TaskAssignment, exact: true },
    { path: '/task-assignment/view-calendar', name: 'View', element: ViewCalendar },
    { path: '/task-assignment/assign-task', name: 'AssignTask', element: AssignTask },
    { path: '/task-assignment/assign-vehicle', name: 'AssignVehicle', element: AssignVehicle },
    { path: '/task-assignment/assign-mcps', name: 'AssignMCPs', element: AssignMCPs },
];
export default Routes;