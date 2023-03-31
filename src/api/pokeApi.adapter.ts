import axios from "axios";

export interface HttpAdapter {
    get<T>(url: string): Promise<T>;
}

export class PokeApiAdapter implements HttpAdapter {

    private readonly axios = axios;

    // es opcional el Promise<T> ya que typescript lo infiere correctamente, en caso que no se agrega
    async get<T>(url: string): Promise<T> {
        const { data } = await this.axios.get<T>(url);
        console.log('Uso AXIOS');
        return data;
    }

    // async post(url: string, data: any) {
    //     return;
    // }

    // async patch(url: string, data: any) {
    //     return;
    // }

    // async delete(url: string) {
    //     return;
    // }
}


export class PokeApiFetchAdapter implements HttpAdapter {
    async get<T>(url: string): Promise<T> {
        const resp = await fetch(url);
        const data: T = await resp.json();
        console.log('Uso FETCH');
        return data;
    }
}