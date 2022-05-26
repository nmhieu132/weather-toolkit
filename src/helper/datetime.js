const datetime={
    convertDtToDate: (dt)=>{
        const date=new Date(dt*1000);
        const daily=['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const day = daily[date.getDay()]
        const hour =date.getHours()
        const min=(date.getHours()>12) ? `${date.getMinutes()} pm` : `${date.getMinutes()} am`
        return `${day}, ${hour}:${min}`;
    },
    convertDtToDayNum: (dt)=>{
        const date=new Date(dt*1000);
        return date.getDay();
    },
    convertDtToDay: (dt)=>{
        const date=new Date(dt*1000);
        const daily=['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const day = daily[date.getDay()]
        const dat = date.getDate();
        const month=date.getMonth();
        return `${day}, ${dat}/${month}`;
    },
    convertDtToOclock: (dt)=>{
        const date=new Date(dt*1000);
        const hour =date.getHours()
        const min=(date.getHours()>12) ? `${date.getMinutes()} PM` : `${date.getMinutes()} AM`
        return ` ${hour}h${min}`;
    },
}
export default datetime