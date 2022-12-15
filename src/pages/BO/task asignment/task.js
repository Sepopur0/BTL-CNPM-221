export default class Task{
    static ids = 0;
    constructor(date, time, [WIds], VId, MIds)
    {
        this.ids = ++ids;
        this.date = date;
        this.time = time;
        this.WIds = WIds;
        this.VId = VId;
        this.MIds = MIds;
    }
}