//import { ShowTime } from './showtime.model';

export class ShowTimeService {

    private getHoraAtual(): String {
        const showTime=new Date();
        return showTime.getHours()+':'+showTime.getMinutes()+':'+showTime.getSeconds();
    }

    geraHoraAtual(delay: number, callback: (showTime: String) => void) {
        callback(this.getHoraAtual());
        setInterval(() => callback(this.getHoraAtual()),delay);
    }
}