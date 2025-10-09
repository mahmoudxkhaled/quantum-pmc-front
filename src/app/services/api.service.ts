import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

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
    private baseUrl = environment.apiUrl;
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) { }

    submitContactForm(data: ContactFormData): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(`${this.baseUrl}/contact`, data, this.httpOptions);
    }

    submitCareerForm(data: CareerFormData): Observable<ApiResponse>;
    submitCareerForm(data: FormData): Observable<ApiResponse>;
    submitCareerForm(data: CareerFormData | FormData): Observable<ApiResponse> {
        const isFormData = (typeof FormData !== 'undefined') && (data instanceof FormData);
        if (isFormData) {
            // Do NOT set Content-Type header; the browser will set it with proper boundary
            return this.http.post<ApiResponse>(`${this.baseUrl}/careers`, data);
        }
        return this.http.post<ApiResponse>(`${this.baseUrl}/careers`, data as CareerFormData, this.httpOptions);
    }

    submitCareerFormMultipart(formData: FormData): Observable<ApiResponse> {
        // Explicit method to avoid overload ambiguity at call sites
        return this.http.post<ApiResponse>(`${this.baseUrl}/careers`, formData);
    }

    checkHealth(): Observable<{ ok: boolean }> {
        return this.http.get<{ ok: boolean }>(`${this.baseUrl}/health`);
    }
}
