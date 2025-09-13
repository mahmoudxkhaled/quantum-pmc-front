import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    subject?: string;
    message: string;
}

export interface CareerFormData {
    position: string;
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    linkedin: string;
}

export interface ApiResponse {
    ok: boolean;
    messageId?: string;
    error?: string;
    details?: string[];
}

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private baseUrl = 'http://localhost:4000/api';
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) { }

    submitContactForm(data: ContactFormData): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(`${this.baseUrl}/contact`, data, this.httpOptions);
    }

    submitCareerForm(data: CareerFormData): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(`${this.baseUrl}/careers`, data, this.httpOptions);
    }

    checkHealth(): Observable<{ ok: boolean }> {
        return this.http.get<{ ok: boolean }>(`http://localhost:4000/health`);
    }
}
