export interface ExchangeDto {
    give: {[key: string]: number};
    take: {[key: string]: number};
} 

export interface RobberyDto {
    steal: {[key: string]: number};
}

export interface Resources {
    map: {[key: string]: number};
}

export interface LogMessage {
    playerId: string;
    message: string;
    to?: string;
}

// код выхода из комнаты, означающий что игрока кикнули (4000-4999 — свои коды)
export const KICK_CODE = 4001;

export type RoomInfo = { 
    roomId: string; 
    name: string; 
    mapName: string;
    clients: number; 
    maxClients: number; 
    private: boolean;
    owner: string;
};