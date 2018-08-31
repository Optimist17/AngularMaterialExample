import { Observable } from 'rxjs';
export interface IHubService {
    connect(): Observable<void>;
    disconnect();
}
